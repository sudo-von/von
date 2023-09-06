import { FC, PropsWithChildren } from "react";
import FramedBorder from "@common/components/framed-box/components/framed-border/framed-border";

const FramedBox: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex items-center justify-center gap-4">
      <FramedBorder />
      {children}
      <FramedBorder />
    </div>
  );
};

export default FramedBox;
