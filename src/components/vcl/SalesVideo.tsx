import { useEffect, useRef, useState } from "react";
import thumb640 from "@/assets/imagens/thumb-vvv-v2-640.webp.asset.json";
import thumb960 from "@/assets/imagens/thumb-vvv-v2-960.webp.asset.json";
import thumb1440 from "@/assets/imagens/thumb-vvv-v2-1440.webp.asset.json";

const EMBED_BASE =
  "https://player.mediadelivery.net/embed/750581/156c7e91-bde4-4ba7-b91c-3830a4f39268";

// Player is mounted upfront but does NOT autoplay and does NOT preload the
// video stream. Playback is requested from a real user tap through the
// player.js postMessage protocol that the Bunny player implements.
const EMBED_SRC = `${EMBED_BASE}?autoplay=false&loop=false&muted=false&preload=false&responsive=true&playsinline=true`;

type PlayerEvent = {
  context?: string;
  event?: string;
  value?: unknown;
  listener?: string;
};

export default function SalesVideo() {
  const [ready, setReady] = useState(false);
  const [coverOff, setCoverOff] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const readyRef = useRef(false);

  useEffect(() => {
    const markReady = () => {
      if (readyRef.current) return;
      readyRef.current = true;
      setReady(true);
    };

    // The iframe starts loading during SSR, so its "ready" event can fire
    // before React attaches this listener. Probe the API until it answers.
    const probeListener = "vcl-probe";
    const probe = setInterval(() => {
      if (readyRef.current) {
        clearInterval(probe);
        return;
      }
      iframeRef.current?.contentWindow?.postMessage(
        {
          context: "player.js",
          version: "0.0.11",
          method: "getMuted",
          listener: probeListener,
        },
        "*",
      );
    }, 1000);

    const onMessage = (e: MessageEvent) => {
      if (!e.origin.includes("mediadelivery.net")) return;
      let d = e.data as PlayerEvent | string | undefined;
      if (typeof d === "string") {
        try {
          d = JSON.parse(d) as PlayerEvent;
        } catch {
          return;
        }
      }
      const evt = d as PlayerEvent | undefined;
      if (!evt || evt.context !== "player.js") return;

      if (evt.event === "ready" || evt.listener === probeListener) {
        markReady();
      }
    };

    window.addEventListener("message", onMessage);
    return () => {
      window.removeEventListener("message", onMessage);
      clearInterval(probe);
    };
  }, []);

  const send = (method: string, value?: unknown) => {
    iframeRef.current?.contentWindow?.postMessage(
      { context: "player.js", version: "0.0.11", method, value },
      "*",
    );
  };

  const requestPlay = () => {
    if (!readyRef.current || coverOff) return;
    // Reveal the player immediately from the accepted user interaction. The
    // controls must never depend on a playback event reaching the parent page.
    setCoverOff(true);
    // Ask for audible playback directly inside the user gesture.
    send("setVolume", 100);
    send("unmute");
    send("play");
  };

  return (
    <div
      className="relative w-full rounded-lg overflow-hidden ring-2 ring-[color:var(--laranja)] shadow-2xl bg-black/40"
      style={{ paddingTop: "56.25%" }}
    >
      <iframe
        ref={iframeRef}
        src={EMBED_SRC}
        style={{
          border: 0,
          position: "absolute",
          top: 0,
          height: "100%",
          width: "100%",
        }}
        allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture; fullscreen"
        allowFullScreen
        title="Vídeo de vendas VC_Líder"
      />

      {!coverOff && (
        <button
          type="button"
          aria-label="Assistir à aula"
          disabled={!ready}
          onClick={requestPlay}
          className="absolute inset-0 z-10 block w-full cursor-pointer disabled:cursor-wait"
        >
          <img
            src={thumb960.url}
            srcSet={`${thumb640.url} 640w, ${thumb960.url} 960w, ${thumb1440.url} 1440w`}
            sizes="(max-width: 768px) 100vw, 800px"
            alt=""
            width={1672}
            height={941}
            fetchPriority="high"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover"
          />
          {!ready && (
            <span className="absolute inset-x-0 bottom-4 flex justify-center">
              <span className="rounded-full bg-black/70 px-4 py-2 text-[13px] md:text-[14px] font-medium text-[color:var(--branco)]">
                Carregando vídeo…
              </span>
            </span>
          )}
        </button>
      )}
    </div>
  );
}
