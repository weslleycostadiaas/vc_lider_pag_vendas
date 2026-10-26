import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { FinalFaq } from "@/components/final-faq";

describe("Final FAQ interaction", () => {
  it("starts with only the first answer open and lets it close independently", () => {
    render(<FinalFaq />);
    const triggers = screen.getAllByRole("button");
    const first = triggers[0];
    const second = triggers[1];
    if (!first || !second) throw new Error("Missing FAQ entries");
    expect(triggers).toHaveLength(13);
    expect(first).toHaveAttribute("aria-expanded", "true");
    expect(second).toHaveAttribute("aria-expanded", "false");
    fireEvent.click(second);
    expect(first).toHaveAttribute("aria-expanded", "true");
    expect(second).toHaveAttribute("aria-expanded", "true");
    fireEvent.click(first);
    expect(first).toHaveAttribute("aria-expanded", "false");
    expect(second).toHaveAttribute("aria-expanded", "true");
  });
});