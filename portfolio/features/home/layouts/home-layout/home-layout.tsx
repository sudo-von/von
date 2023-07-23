import { FC, PropsWithChildren } from "react";

const HomeLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex flex-col mt-36 sm:mt-40 md:mt-44">{children}</div>
  );
};

export default HomeLayout;
