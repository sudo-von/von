import { FC, PropsWithChildren } from "react";
import Typography from "../../../../../../components/typography/typography";

const AskPosition: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Typography variant="subtitle" weight="regular" color="black">
      {children}
    </Typography>
  );
};

export default AskPosition;