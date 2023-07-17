import { FC, PropsWithChildren } from "react";

const FramedText: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex items-center gap-3">
      <div className="flex flex-1 border-t border-secondary-variant" />
      {children}
      <div className="flex flex-1 border-t border-secondary-variant" />
    </div>
  );
};

export default FramedText;
