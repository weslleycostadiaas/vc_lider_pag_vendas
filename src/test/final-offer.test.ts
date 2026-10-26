import { describe, expect, it } from "vitest";
import { finalOffer } from "@/lib/final-offer";

describe("Approved VC_Líder offer rules", () => {
  it("charges the displayed cash price of 949 BRL", () => expect(finalOffer.cashPrice).toBe(949));
  it("offers 12 installments of 98.15 BRL", () => {
    expect(finalOffer.installments).toBe(12);
    expect(finalOffer.installmentPrice).toBe(98.15);
  });
  it("keeps course and material access for 12 months", () => expect(finalOffer.lessonAccessMonths).toBe(12));
  it("keeps Mentor access for 6 months", () => expect(finalOffer.mentorAccessMonths).toBe(6));
  it("keeps Radar access for 6 months", () => expect(finalOffer.radarAccessMonths).toBe(6));
  it("allows the full refund within 7 days", () => expect(finalOffer.guaranteeDays).toBe(7));
  it("sets support response to 24 business hours", () => expect(finalOffer.supportBusinessHours).toBe(24));
  it("includes 23 lessons in 6 modules", () => {
    expect(finalOffer.lessons).toBe(23);
    expect(finalOffer.modules).toBe(6);
  });
});