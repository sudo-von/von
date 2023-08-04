import { FC, PropsWithChildren } from "react";
import Typography from "../../../../../common/components/typography/typography";

const AskInterest: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Typography variant="paragraph" weight="light" color="black">
      {children}
    </Typography>
  );
};

export default AskInterest;
