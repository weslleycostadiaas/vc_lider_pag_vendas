import logo from "@/assets/imagens/logo-vc-lider.jpeg.asset.json";

export function Logo({ onDark = false, height = 40 }: { onDark?: boolean; height?: number }) {
  return (
    <img
      src={logo.url}
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
