import { FC, PropsWithChildren } from "react";
import Typography from "../../../../../../components/typography/typography";

const HomeProfilePosition: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Typography variant="title" weight="regular">
      {children}
    </Typography>
  );
};

export default HomeProfilePosition;
