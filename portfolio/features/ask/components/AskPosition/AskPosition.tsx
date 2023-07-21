import { FC } from "react";
import Typography from "../../../../components/typography/typography";

type AskPositionProps = {
  position: string;
};

const AskPosition: FC<AskPositionProps> = ({ position }) => {
  return (
    <Typography variant="subtitle" weight="regular" color="black">
      {position}
    </Typography>
  );
};

export default AskPosition;
