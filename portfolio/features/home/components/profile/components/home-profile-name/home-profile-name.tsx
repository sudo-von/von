import { FC, PropsWithChildren } from "react";
import Typography from "../../../../../../components/typography/typography";

const HomeProfileName: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Typography variant="banner" weight="bold">
      {children}
    </Typography>
  );
};

export default HomeProfileName;
