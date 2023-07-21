import { FC, PropsWithChildren } from "react";

const CenteredLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="h-[calc(100vh-2.5rem)] sm:h-[calc(100vh-5rem)] md:h-[calc(100vh-7rem)] grid content-center">
      {children}
    </div>
  );
};

export default CenteredLayout;
