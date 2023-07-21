import { FC } from "react";
import Typography from "../../../../components/typography/typography";

type AskInterestProps = {
  interest: string;
};

const AskInterest: FC<AskInterestProps> = ({ interest }) => {
  return (
    <Typography variant="paragraph" weight="light" color="black">
      {interest}
    </Typography>
  );
};

export default AskInterest;
