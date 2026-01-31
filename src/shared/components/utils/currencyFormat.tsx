export const formatCurrency = (
  amount: number,
  currency: string = "NGN",
  locale: string = "en-NG",
) => {
  const isNegative = amount < 0;

  const formattedValue = new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
    currencyDisplay: "narrowSymbol",
  }).format(Math.abs(amount));

  return isNegative ? `- ${formattedValue}` : formattedValue;
};
