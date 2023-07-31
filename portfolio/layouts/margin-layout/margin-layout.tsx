import { FC, PropsWithChildren } from "react";

const MarginLayout: FC<PropsWithChildren> = ({ children }) => {
  return <div className="mx-10 sm:mx-20 md:mx-28 my-20">{children}</div>;
};

export default MarginLayout;
