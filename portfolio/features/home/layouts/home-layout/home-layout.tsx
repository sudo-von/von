import { FC, PropsWithChildren } from "react";

const HomeLayout: FC<PropsWithChildren> = ({ children }) => {
  return <div className="flex flex-col mt-36">{children}</div>;
};

export default HomeLayout;
