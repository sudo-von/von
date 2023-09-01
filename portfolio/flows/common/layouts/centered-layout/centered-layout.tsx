import { FC, PropsWithChildren } from "react";

const CenteredLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="h-[calc(100vh-14rem)] flex flex-col justify-center items-center">
      {children}
    </div>
  );
};

export default CenteredLayout;
