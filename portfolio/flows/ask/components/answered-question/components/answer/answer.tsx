import { FC, PropsWithChildren } from "react";
import Typography from "@common/components/typography/typography";

const Answer: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Typography
      color="dark"
      component="p"
      size="small"
      spacing="normal"
      weight="light"
      whitespace="pre"
    >
      {children}
    </Typography>
  );
};

export default Answer;
