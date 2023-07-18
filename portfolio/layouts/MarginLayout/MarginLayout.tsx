import { FC, PropsWithChildren } from "react";

const MarginLayout: FC<PropsWithChildren> = ({ children }) => {
  return <div className="m-10 sm:m-20 md:m-28">{children}</div>;
};

export default MarginLayout;
