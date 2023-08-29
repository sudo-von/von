import { FC, PropsWithChildren } from "react";
import FramedBorder from "./components/framed-border/framed-border";

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
