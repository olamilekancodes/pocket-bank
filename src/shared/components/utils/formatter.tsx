export const stripCommas = (value: string): string => {
  return value.replace(/,/g, "");
};

export const formatCurrencyInput = (value: string): string => {
  if (!value) return "";

  const [integerPart, fractionalPart] = value.split(".");

  const formattedInteger = new Intl.NumberFormat("en-US").format(
    Number(integerPart.replace(/,/g, "")),
  );

  return fractionalPart !== undefined
    ? `${formattedInteger}.${fractionalPart}`
    : formattedInteger;
};
