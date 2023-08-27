import { FC, PropsWithChildren } from "react";
import Typography from "../../../../../common/components/typography/typography";

const QuestionDate: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Typography
      color="normal"
      component="small"
      size="small"
      spacing="normal"
      weight="light"
      whitespace="normal"
    >
      {children}
    </Typography>
  );
};

export default QuestionDate;
