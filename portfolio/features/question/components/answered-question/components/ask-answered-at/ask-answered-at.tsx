import { FC } from "react";
import Typography from "../../../../../common/components/typography/typography";

type AskAnsweredAtProps = {
  date: Date;
};

const AskAnsweredAt: FC<AskAnsweredAtProps> = ({ date }) => {
  const formattedAskedAt = `“${date}”`;
  return (
    <Typography weight="light" variant="legend" color="slate">
      {formattedAskedAt}
    </Typography>
  );
};

export default AskAnsweredAt;
