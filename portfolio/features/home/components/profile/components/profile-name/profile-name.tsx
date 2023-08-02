import { FC, PropsWithChildren } from "react";
import Typography from "../../../../../../components/typography/typography";

const ProfileName: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Typography
      color="black"
      component="h1"
      variant="banner"
      weight="bold"
      whitespace="pre"
    >
      {children}
    </Typography>
  );
};

export default ProfileName;
