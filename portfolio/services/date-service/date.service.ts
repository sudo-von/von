export const formatDate = (date: Date): string => {
  const { format } = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  return format(date);
};

export const formatTimelineDate = (date: Date) => {
  const { format } = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short"
  });

  return format(date);
}