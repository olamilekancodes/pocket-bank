export const formatNameShort = (fullName: string | undefined): string => {
  if (!fullName || fullName.trim() === "") return "";

  const parts = fullName.trim().split(/\s+/);

  if (parts.length === 1) {
    return parts[0];
  }

  const firstName = parts[0];
  const lastInitial = parts[1].charAt(0).toUpperCase();

  return `${firstName} ${lastInitial}.`;
};
