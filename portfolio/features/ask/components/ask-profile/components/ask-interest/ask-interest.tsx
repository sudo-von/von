import { FC, PropsWithChildren } from "react";
import Typography from "../../../../../common/components/typography/typography";

const AskInterest: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Typography color="black" component="h3" variant="paragraph" weight="light">
      {children}
    </Typography>
  );
};

export default AskInterest;
