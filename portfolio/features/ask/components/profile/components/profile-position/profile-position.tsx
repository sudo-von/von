import { FC, PropsWithChildren } from "react";
import Typography from "../../../../../common/components/typography/typography";

const ProfilePosition: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Typography
      color="dark"
      component="h2"
      size="medium"
      spacing="normal"
      weight="light"
      whitespace="normal"
    >
      {children}
    </Typography>
  );
};

export default ProfilePosition;
