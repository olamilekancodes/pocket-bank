export function formatDate(dateString: string): string {
  const date = new Date(dateString);

  const month = new Intl.DateTimeFormat("en-US", { month: "short" }).format(
    date,
  );
  const day = date.getDate();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  return `${month} ${day}, ${hours}:${minutes}`;
}
