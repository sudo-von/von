import { FC } from "react";
import Interest from "../interest/interest";
import Position from "../position/position";

export type DetailsProps = {
  interest: string;
  position: string;
};

const Details: FC<DetailsProps> = ({ interest, position }) => {
  return (
    <>
      <Position>{position}</Position>
      <Interest>{interest}</Interest>
    </>
  );
};

export default Details;
