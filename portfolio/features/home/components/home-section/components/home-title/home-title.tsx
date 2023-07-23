import { FC, PropsWithChildren } from "react";
import Typography from "../../../../../../components/typography/typography";

const HomeTitle: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Typography variant="title" weight="regular" whitespace="pre">
      {children}
    </Typography>
  );
};

export default HomeTitle;
