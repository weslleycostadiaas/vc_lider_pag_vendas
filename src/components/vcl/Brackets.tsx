type Props = {
  size?: number;
  opacity?: number;
  className?: string;
};

export function Brackets({ size = 500, opacity = 0.25, className = "" }: Props) {
  // Responsive scale: brackets grow with viewport width but stay capped by `size`.
  // Aspect ratio (w:h ≈ 0.28:1.5) matches the reference art.
  const widthCss = `clamp(44px, 11vw, ${size * 0.28}px)`;
  const heightCss = `clamp(230px, 58vw, ${size * 1.5}px)`;
  // Horizontal inset compensates the 10° skew overhang (≈ height × 0.09 per side)
  // so the serifs never get clipped by the viewport edge on any breakpoint.
  const offsetCss = `calc(${heightCss} * 0.1 + 0.5rem)`;


  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-x-0 top-0 bottom-0 z-0 overflow-visible ${className}`}
    >
      {/* Left bracket — solid serif shape */}
      <svg
        viewBox="0 0 100 400"
        fill="none"
        preserveAspectRatio="none"
        className="bracket-decor"
        style={{
          position: "absolute",
          left: offsetCss,
          top: "50%",
          width: widthCss,
          height: heightCss,
          transform: "translateY(-50%) skewX(-10deg)",
          opacity,
        }}
      >
        <path d="M8 0 H92 V22 H50 V378 H92 V400 H8 Z" fill="currentColor" />
      </svg>

      {/* Right bracket — mirrored */}
      <svg
        viewBox="0 0 100 400"
        fill="none"
        preserveAspectRatio="none"
        className="bracket-decor"
        style={{
          position: "absolute",
          right: offsetCss,
          top: "50%",
          width: widthCss,
          height: heightCss,
          transform: "translateY(-50%) skewX(-10deg)",
          opacity,
        }}
      >
        <path d="M92 0 H8 V22 H50 V378 H8 V400 H92 Z" fill="currentColor" />
      </svg>
    </div>
  );
}

