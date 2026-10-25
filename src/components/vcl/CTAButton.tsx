import type { ReactNode } from "react";

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
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => {
        // Abre o pré-checkout; o modal redireciona à Hotmart após o envio.
        e.preventDefault();
        e.currentTarget.focus({ preventScroll: true });
        window.dispatchEvent(
          new CustomEvent("vcl:open-precheckout", { detail: e.currentTarget }),
        );
      }}
      className={`${base} ${sizes} ${variants} ${className}`}
    >
      {children}
    </a>
  );
}
