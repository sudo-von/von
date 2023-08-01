import { FC, PropsWithChildren } from "react";
import Typography from "../../../../../../components/typography/typography";

const ProfileInterest: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Typography color="black" component="h3" variant="subtitle" weight="light">
      {children}
    </Typography>
  );
};

export default ProfileInterest;
