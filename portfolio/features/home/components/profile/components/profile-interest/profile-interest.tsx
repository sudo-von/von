import { FC, PropsWithChildren } from "react";
import Typography from "../../../../../../components/typography/typography";

const ProfileInterest: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Typography variant="subtitle" weight="light" component="h3">
      {children}
    </Typography>
  );
};

export default ProfileInterest;
