import { FC, PropsWithChildren } from "react";
import Typography from "../../../../../../components/typography/typography";

const AskAnswer: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Typography weight="light" variant="caption">
      {children}
    </Typography>
  );
};

export default AskAnswer;
