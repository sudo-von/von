import { FC, PropsWithChildren } from "react";
import Typography from "../../../../../../components/typography/typography";

const ProfileName: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Typography variant="banner" weight="bold" component="h1">
      {children}
    </Typography>
  );
};

export default ProfileName;
