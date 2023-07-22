import { FC, PropsWithChildren } from "react";
import Typography from "../../../../../../components/typography/typography";

const HomeProfileInterest: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Typography variant="subtitle" weight="light">
      {children}
    </Typography>
  );
};

export default HomeProfileInterest;
