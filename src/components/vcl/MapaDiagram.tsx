import mapa640 from "@/assets/imagens/metodo-mapa-v3-640.webp.asset.json";
import mapa960 from "@/assets/imagens/metodo-mapa-v3-960.webp.asset.json";
import mapa1440 from "@/assets/imagens/metodo-mapa-v3-1440.webp.asset.json";

export function MapaDiagram() {
  return (
    <div className="relative left-1/2 my-8 w-screen -translate-x-1/2 md:static md:my-12 md:w-full md:max-w-[1100px] md:translate-x-0">
      <img
        src={mapa960.url}
        srcSet={`${mapa640.url} 640w, ${mapa960.url} 960w, ${mapa1440.url} 1440w`}
        sizes="(max-width: 768px) 100vw, 1100px"
        alt="Diagrama circular do Método M.A.P.A.: Mentalidade, Ação, Pessoas e Aprendizado Contínuo"
        loading="lazy"
        decoding="async"
        width={1672}
        height={941}
        className="mx-auto h-auto w-full"
      />
    </div>
  );
}
