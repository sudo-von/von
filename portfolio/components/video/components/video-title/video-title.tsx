import { FC, PropsWithChildren } from "react";
import Typography from "../../../typography/typography";

const VideoTitle: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Typography weight="light" color="slate" align="center">
      {children}
    </Typography>
  );
};

export default VideoTitle;
