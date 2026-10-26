import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { AudienceSection } from "@/components/audience-section";

describe("AudienceSection", () => {
  it("renders both approved titles", () => {
    render(<AudienceSection />);
    expect(screen.getByRole("heading", { name: "É para você se…" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Não é para você se…" })).toBeInTheDocument();
  });

  it("renders exactly 5 positive and 4 negative items in order", () => {
    render(<AudienceSection />);
    const positive = screen.getByRole("heading", { name: "É para você se…" }).closest(".audience-card")!;
    const negative = screen.getByRole("heading", { name: "Não é para você se…" }).closest(".audience-card")!;
    expect(positive.querySelectorAll("li")).toHaveLength(5);
    expect(negative.querySelectorAll("li")).toHaveLength(4);
    expect(positive.querySelectorAll("li")[0]!.textContent).toContain("Assumiu uma equipe e quer liderar com mais segurança.");
    expect(negative.querySelectorAll("li")[2]!.textContent).toContain("Quer mentoria individual ou encontros ao vivo com Juliene");
  });
});
