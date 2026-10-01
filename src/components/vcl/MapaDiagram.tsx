import { useState } from "react";
import { Maximize2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import mapa480 from "@/assets/imagens/metodo-mapa-crop-480.webp";
import mapa853 from "@/assets/imagens/metodo-mapa-crop-853.webp";

const alt = "Diagrama circular do Método M.A.P.A.: Mentalidade, Ação, Pessoas e Aprendizado Contínuo";

export function MapaDiagram() {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative left-1/2 my-8 w-[calc(100vw-32px)] max-w-[853px] -translate-x-1/2 md:static md:my-12 md:mx-auto md:w-full md:translate-x-0">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button type="button" variant="ghost" aria-label="Ampliar diagrama" className="group relative mx-auto block h-auto w-full p-0 hover:bg-transparent focus-visible:ring-2 focus-visible:ring-[color:var(--creme)]">
            <picture>
              <source media="(min-width: 768px)" srcSet={mapa853} />
              <img
                src={mapa480}
                alt={alt}
                loading="lazy"
                decoding="async"
                width={853}
                height={768}
                className="block h-auto w-full"
              />
            </picture>
            <span aria-hidden="true" className="absolute bottom-2 right-2 grid h-11 w-11 place-items-center rounded-full bg-[color:var(--vermelho)]/85 text-[color:var(--creme)] md:bottom-4 md:right-4"><Maximize2 /></span>
          </Button>
        </DialogTrigger>
        <DialogContent className="w-[calc(100vw-24px)] max-w-[900px] max-h-[calc(100dvh-24px)] gap-2 overflow-hidden border-0 bg-[color:var(--vermelho)] p-3 text-[color:var(--creme)] [&>button:last-child]:hidden">
          <DialogTitle className="sr-only">Diagrama do Método M.A.P.A. ampliado</DialogTitle>
          <DialogClose asChild>
            <Button type="button" variant="ghost" aria-label="Fechar diagrama ampliado" className="ml-auto h-11 w-11 shrink-0 p-0 text-[color:var(--creme)]"><X aria-hidden="true" /></Button>
          </DialogClose>
          <div className="max-h-[calc(100dvh-100px)] overflow-auto" tabIndex={0} aria-label="Diagrama ampliado. Deslize para ler todos os detalhes.">
            {open && <img src={mapa853} alt={alt} width={853} height={768} className="mx-auto block h-auto w-[853px] max-w-none" />}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
