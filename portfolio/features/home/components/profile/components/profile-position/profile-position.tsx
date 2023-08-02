import { FC, PropsWithChildren } from "react";
import Typography from "../../../../../../components/typography/typography";

const ProfilePosition: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Typography
      color="black"
      component="h2"
      variant="title"
      weight="regular"
      whitespace="pre"
    >
      {children}
    </Typography>
  );
};

export default ProfilePosition;
