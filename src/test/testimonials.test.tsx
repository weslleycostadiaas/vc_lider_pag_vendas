import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { TestimonialsSection } from "@/components/testimonials-section";

describe("TestimonialsSection", () => {
  it("renders the exact approved headline, subheadline and support line", () => {
    render(<TestimonialsSection />);
    const title = screen.getByRole("heading", { level: 2 });
    expect(title.textContent?.replace(/\s+/g, " ").trim()).toBe("Aprenda hoje. Aplique na próxima conversa, decisão ou desafio.");
    expect(screen.getByText("Mais clareza sobre o que fazer e como agir nas situações que você enfrenta todos os dias.")).toBeTruthy();
    expect(screen.getByText("Veja o que mudou na prática para quem já começou.")).toBeTruthy();
  });

  it("renders the four prints in order with accessible zoom buttons", () => {
    render(<TestimonialsSection />);
    const buttons = [1, 2, 3, 4].map(n => screen.getByRole("button", { name: `Ampliar depoimento ${n}` }));
    expect(buttons).toHaveLength(4);
    const images = screen.getAllByRole("img");
    expect(images).toHaveLength(4);
    expect(images[0]?.getAttribute("src")).toContain("depoimento-1.webp");
    expect(images[3]?.getAttribute("src")).toContain("depoimento-4.webp");
    images.forEach(img => {
      expect(img.getAttribute("width")).toBe("1696");
      expect(img.getAttribute("height")).toBe("2528");
    });
  });

  it("opens the lightbox on click and closes it with Escape, restoring scroll", () => {
    render(<TestimonialsSection />);
    expect(document.body.style.overflow).toBe("");
    fireEvent.click(screen.getByRole("button", { name: "Ampliar depoimento 1" }));
    const dialog = screen.getByRole("dialog", { name: "Depoimento 1 ampliado" });
    expect(dialog).toBeTruthy();
    expect(document.body.style.overflow).toBe("hidden");
    fireEvent.keyDown(document, { key: "Escape" });
    expect(screen.queryByRole("dialog")).toBeNull();
    expect(document.body.style.overflow).toBe("");
  });

  it("closes the lightbox via the close button and restores focus to the trigger", () => {
    render(<TestimonialsSection />);
    const trigger = screen.getByRole("button", { name: "Ampliar depoimento 3" });
    trigger.focus();
    fireEvent.click(trigger);
    const close = screen.getByRole("button", { name: "Fechar depoimento ampliado" });
    expect(document.activeElement).toBe(close);
    fireEvent.click(close);
    expect(screen.queryByRole("dialog")).toBeNull();
    expect(document.activeElement).toBe(trigger);
  });

  it("closes the lightbox when clicking the backdrop", () => {
    render(<TestimonialsSection />);
    fireEvent.click(screen.getByRole("button", { name: "Ampliar depoimento 2" }));
    const backdrop = screen.getByRole("dialog").parentElement!;
    fireEvent.click(backdrop);
    expect(screen.queryByRole("dialog")).toBeNull();
  });
});
