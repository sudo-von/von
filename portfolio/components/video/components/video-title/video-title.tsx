import { FC, PropsWithChildren } from "react";
import Typography from "../../../typography/typography";

const VideoTitle: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Typography
      align="center"
      color="slate"
      component="p"
      spacing="wide"
      variant="legend"
      weight="light"
    >
      {children}
    </Typography>
  );
};

export default VideoTitle;
