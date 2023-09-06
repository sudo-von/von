import { FC, PropsWithChildren } from "react";
import Typography from "@common/components/typography/typography";

const VideoTitle: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Typography
      color="normal"
      component="small"
      spacing="normal"
      size="normal"
      weight="light"
      whitespace="pre"
    >
      {children}
    </Typography>
  );
};

export default VideoTitle;
