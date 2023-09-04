import { FC } from "react";
import Quote from "../quote/quote";
import Interest from "../interest/interest";
import Position from "../position/position";

export type DetailsProps = {
  interest: string;
  position: string;
  quote: string;
};

const Details: FC<DetailsProps> = ({ interest, position, quote }) => {
  return (
    <section className="flex flex-col gap-6 text-center lg:text-start">
      <Position>{position}</Position>
      <Interest>{interest}</Interest>
      <Quote>{quote}</Quote>
    </section>
  );
};

export default Details;
