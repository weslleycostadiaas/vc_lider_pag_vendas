import logo240 from "@/assets/imagens/logo-vc-lider-240.webp";
import logo480 from "@/assets/imagens/logo-vc-lider-480.webp";

export function Logo({ onDark = false, height = 40 }: { onDark?: boolean; height?: number }) {
  return (
    <img
      src={logo480}
      srcSet={`${logo240} 240w, ${logo480} 480w`}
      sizes={`${height}px`}
      alt="VC_Líder — Método M.A.P.A."
      width={height}
      height={height}
      fetchPriority="high"
      decoding="async"
      style={{ height, width: "auto" }}
      className="w-auto"
    />
  );
}
