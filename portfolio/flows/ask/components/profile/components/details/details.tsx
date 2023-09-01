import { FC } from "react";
import Interest from "@ask/components/profile/components/interest/interest";
import Position from "@ask/components/profile/components/position/position";

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
