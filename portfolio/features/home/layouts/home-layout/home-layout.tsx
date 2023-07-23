import { FC, PropsWithChildren } from "react";

const HomeLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex flex-col mt-24 sm:mt-28 md:mt-32">{children}</div>
  );
};

export default HomeLayout;
