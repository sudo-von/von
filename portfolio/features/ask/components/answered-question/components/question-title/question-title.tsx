import { FC, PropsWithChildren } from "react";
import Typography from "../../../../../common/components/typography/typography";

const QuestionTitle: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Typography
      color="dark"
      component="h4"
      size="normal"
      spacing="normal"
      weight="bold"
      whitespace="normal"
    >
      “{children}”
    </Typography>
  );
};

export default QuestionTitle;
