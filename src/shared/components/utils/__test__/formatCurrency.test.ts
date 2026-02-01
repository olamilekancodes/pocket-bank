import { describe, it, expect } from "vitest";
import { formatCurrency } from "../currencyFormat";

describe("formatCurrency utility", () => {
  it("should format a positive amount correctly in NGN", () => {
    const result = formatCurrency(150000.5);
    expect(result.replace(/\u00A0/g, " ")).toBe("₦150,000.50");
  });

  it("should handle negative amounts and prepend a minus sign with space", () => {
    const result = formatCurrency(-500.75);
    expect(result.replace(/\u00A0/g, " ")).toBe("- ₦500.75");
  });

  it("should format different currencies correctly (e.g., USD)", () => {
    const result = formatCurrency(100, "USD", "en-US");
    expect(result.replace(/\u00A0/g, " ")).toBe("$100.00");
  });

  it("should handle zero correctly", () => {
    const result = formatCurrency(0);
    expect(result.replace(/\u00A0/g, " ")).toBe("₦0.00");
  });

  it("should handle large numbers without losing precision in display", () => {
    const result = formatCurrency(1000000);
    expect(result.replace(/\u00A0/g, " ")).toBe("₦1,000,000.00");
  });
});
