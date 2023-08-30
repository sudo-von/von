import { FC, PropsWithChildren } from "react";
import Typography from "../../../../../common/components/typography/typography";

const Position: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Typography
      color="dark"
      component="h2"
      size="normal"
      spacing="normal"
      weight="normal"
      whitespace="normal"
    >
      {children}
    </Typography>
  );
};

export default Position;
