import { FC, PropsWithChildren } from "react";
import Typography from "../../../../../common/components/typography/typography";

const AskPosition: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Typography
      component="h2"
      variant="subtitle"
      weight="regular"
      color="black"
    >
      {children}
    </Typography>
  );
};

export default AskPosition;
