import { FC, PropsWithChildren } from "react";

const Container: FC<PropsWithChildren> = ({ children }) => {
  return <div className="p-12 sm:p-20 md:p-28">{children}</div>;
};

export default Container;
