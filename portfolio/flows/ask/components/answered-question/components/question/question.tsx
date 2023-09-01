import { FC, PropsWithChildren } from "react";
import Typography from "@common/components/typography/typography";

const Question: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Typography
      color="dark"
      component="h5"
      size="small"
      spacing="normal"
      weight="normal"
      whitespace="pre"
    >
      “{children}”
    </Typography>
  );
};

export default Question;
