export const formatQuestionDate = (date: Date) => {
  const options: Intl.DateTimeFormatOptions = {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };
  const formattedDate = new Intl.DateTimeFormat("en-US", options).format(date);
  return formattedDate;
};
