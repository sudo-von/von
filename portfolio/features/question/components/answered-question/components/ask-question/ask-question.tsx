import { FC, PropsWithChildren } from "react";
import Typography from "../../../../../common/components/typography/typography";

const AskQuestion: FC<PropsWithChildren> = ({ children }) => {
  const formattedQuestion = `“${children}”`;
  return (
    <Typography weight="bold" variant="caption">
      {formattedQuestion}
    </Typography>
  );
};

export default AskQuestion;
