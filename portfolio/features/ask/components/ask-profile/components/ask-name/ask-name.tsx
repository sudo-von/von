import { FC, PropsWithChildren } from "react";
import Typography from "../../../../../common/components/typography/typography";

const AskName: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Typography variant="heading" weight="bold" color="black">
      {children}
    </Typography>
  );
};

export default AskName;
