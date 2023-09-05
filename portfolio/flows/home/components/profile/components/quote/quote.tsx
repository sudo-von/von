import { FC, PropsWithChildren } from "react";
import Typography from "@common/components/typography/typography";

const Quote: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Typography
      color="normal"
      component="small"
      size="small"
      spacing="normal"
      weight="light"
      whitespace="pre"
    >
      {children}
    </Typography>
  );
};

export default Quote;
