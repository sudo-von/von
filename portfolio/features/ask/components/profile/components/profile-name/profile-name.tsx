import { FC, PropsWithChildren } from "react";
import Typography from "../../../../../common/components/typography/typography";

const ProfileName: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Typography
      color="dark"
      component="h1"
      size="huge"
      spacing="normal"
      weight="bold"
      whitespace="normal"
    >
      {children}
    </Typography>
  );
};

export default ProfileName;
