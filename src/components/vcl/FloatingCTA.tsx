import { useEffect, useState } from "react";
import { CTAButton } from "./CTAButton";

export function FloatingCTA({ href }: { href: string }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShow(window.scrollY > window.innerHeight * 0.9);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 md:hidden transition-transform duration-300 ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="border-t border-[color:var(--laranja)]/40 bg-[color:var(--vermelho)]/95 px-4 pt-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] backdrop-blur">
        <CTAButton href={href} className="w-full">
          Quero aprimorar minha Liderança
        </CTAButton>
      </div>
    </div>
  );
}
