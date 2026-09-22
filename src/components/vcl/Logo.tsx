import logo240 from "@/assets/imagens/logo-metodo-mapa-240.webp.asset.json";
import logo480 from "@/assets/imagens/logo-metodo-mapa-480.webp.asset.json";

export function Logo({ onDark = false, height = 40 }: { onDark?: boolean; height?: number }) {
  return (
    <img
      src={logo240.url}
      srcSet={`${logo240.url} 1x, ${logo480.url} 2x`}
      alt="VC_Líder"
      width={height}
      height={height}
      fetchPriority="high"
      decoding="async"
      style={{ height, width: "auto" }}
      className="w-auto"
    />
  );
}
