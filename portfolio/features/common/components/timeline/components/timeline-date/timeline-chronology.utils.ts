export const formatTimelineChronology = (date: Date) => {
  const formatter = new Intl.DateTimeFormat("en", { year: "numeric", month: "short" })
  const result = formatter.format(date);
  return result;
}