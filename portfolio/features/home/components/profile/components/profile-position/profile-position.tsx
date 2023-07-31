import { FC, PropsWithChildren } from "react";
import Typography from "../../../../../../components/typography/typography";

const ProfilePosition: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Typography variant="title" weight="regular" component="h2">
      {children}
    </Typography>
  );
};

export default ProfilePosition;
