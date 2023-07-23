import { FC, PropsWithChildren } from "react";
import Typography from "../../../../../../components/typography/typography";

const HomeDescription: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Typography variant="caption" color="slate" weight="light" whitespace="pre">
      {children}
    </Typography>
  );
};

export default HomeDescription;
