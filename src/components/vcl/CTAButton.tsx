import { useEffect, useRef, type ReactNode } from "react";
import { decorateCheckoutUrl, trackCheckoutClick } from "@/lib/vcl-lead";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "dark";
  size?: "md" | "lg";
  className?: string;
};

export function CTAButton({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
}: Props) {
  const ref = useRef<HTMLAnchorElement>(null);

  // Decorate the live DOM href (keeps anything GTM already appended).
  useEffect(() => {
    const el = ref.current;
    if (el) el.href = decorateCheckoutUrl(el.href);
  }, [href]);

  const onClick = () => {
    const el = ref.current;
    if (!el) return;
    el.href = decorateCheckoutUrl(el.href);
    if (el.hostname.endsWith("pay.hotmart.com")) trackCheckoutClick();
  };

  const base =
    "inline-flex min-h-11 items-center justify-center rounded-md text-center font-semibold tracking-wide transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5";
  const sizes =
    size === "lg"
      ? "px-6 py-4 text-base min-[360px]:px-8 sm:px-10 sm:py-5 sm:text-lg md:text-xl"
      : "px-6 py-4 text-base min-[360px]:px-8 sm:px-10 sm:py-[18px] md:text-lg";
  const variants =
    variant === "dark"
      ? "bg-vermelho text-creme hover:bg-[color:var(--terracota)]"
      : "bg-laranja text-creme hover:bg-[color:var(--terracota)]";
  return (
    <a
      ref={ref}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className={`${base} ${sizes} ${variants} ${className}`}
    >
      {children}
    </a>
  );
}
