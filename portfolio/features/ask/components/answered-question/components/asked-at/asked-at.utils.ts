export const formatAskedAt = (askedAt: Date) => {
  const { format } = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  return format(askedAt);
};
