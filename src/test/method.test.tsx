import { cleanup, render } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { MethodSection } from "@/components/method-section";

afterEach(cleanup);

describe("Method M.A.P.A. reading rules", () => {
  it("shows all four pillar titles and full explanations without any toggle controls", () => {
    const page = render(<MethodSection />);
    expect(page.queryAllByRole("button")).toHaveLength(0);
    ["M | Mentalidade", "A | Ação", "P | Pessoas", "A | Aprendizado Contínuo"].forEach(title => {
      expect(page.getByRole("heading", { name: title })).toBeTruthy();
    });
    [
      "Reconheça suas emoções e crenças para agir com mais consciência.",
      "Use ferramentas para delegar, dar feedback e transformar decisões em entregas.",
      "Alinhe expectativas, enfrente conflitos e desenvolva sua equipe.",
      "Aprenda com cada experiência e ajuste sua forma de liderar.",
    ].forEach(text => {
      const paragraph = page.getByText(text);
      expect(paragraph).toBeTruthy();
      expect(paragraph.getAttribute("aria-hidden")).toBeNull();
    });
  });

  it("keeps the exact headline with the M.A.P.A. brand accent", () => {
    const page = render(<MethodSection />);
    const title = page.getByRole("heading", { name: /PARA OS DESAFIOS DA LIDERANÇA, UM M\.A\.P\.A\./ });
    const accent = title.querySelector(".method-title-accent");
    expect(accent?.textContent).toBe("M.A.P.A.");
  });

  it("renders the vector flywheel with its accessible diagram description", () => {
    const page = render(<MethodSection />);
    const diagram = page.getByRole("img", { name: /Diagrama circular do Método M\.A\.P\.A\./ });
    expect(diagram.tagName).toBe("svg");
    expect(diagram.querySelector(".mw-center")?.textContent).toContain("M.A.P.A.");
  });
});
