import { FC } from "react";
import Quote from "@home/components/profile/components/quote/quote";
import Interest from "@home/components/profile/components/interest/interest";
import Position from "@home/components/profile/components/position/position";

export type DetailsProps = {
  interest: string;
  position: string;
  quote: string;
};

const Details: FC<DetailsProps> = ({ interest, position, quote }) => {
  return (
    <section className="flex flex-col text-center lg:text-start gap-6">
      <Position>{position}</Position>
      <Interest>{interest}</Interest>
      <Quote>{quote}</Quote>
    </section>
  );
};

export default Details;
