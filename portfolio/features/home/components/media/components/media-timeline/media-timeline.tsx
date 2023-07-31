import { FC } from "react";
import Image from "next/image";
import Typography from "../../../../../../components/typography/typography";

export type ContentTimelineProps = {
  src: string;
  title: string;
  endDate: string;
  startDate: string;
  description: string;
};

function getFormattedDate(currentDate: string) {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const date = new Date(currentDate);
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  return `${month} ${year}`;
}

const ContentTimeline: FC<ContentTimelineProps> = ({
  src,
  title,
  startDate,
  endDate,
  description,
}) => {
  return (
    <div className="flex flex-row justify-center items-center gap-4">
      <div className="relative h-16 md:h-20 lg:h-20 w-32 md:w-36 lg:w-20">
        <Image
          src={src}
          className="rounded object-cover h-full w-full"
          alt="img"
          fill
        />
      </div>
      <div className="flex flex-col gap-1 h-min w-44">
        <Typography variant="subtitle">{title}</Typography>
        <Typography variant="caption" color="slate" weight="light">
          {getFormattedDate(startDate)} - {getFormattedDate(endDate)}
        </Typography>
        <Typography weight="light">{description}</Typography>
      </div>
    </div>
  );
};

export default ContentTimeline;
