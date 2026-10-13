/**
 * Simple class merger utility without external dependencies
 */
export function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(" ");
}

/**
 * Format currency (IDR / USD)
 */
export function formatCurrency(
  amount: number,
  currency: "IDR" | "USD" = "IDR"
) {
  return new Intl.NumberFormat(currency === "IDR" ? "id-ID" : "en-US", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(amount);
}

/**
 * Truncate long text with ellipsis
 */
export function truncateText(str: string, length: number) {
  if (str.length <= length) return str;
  return str.slice(0, length) + "...";
}