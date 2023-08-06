import { FC, PropsWithChildren } from "react";

const MarginLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="mx-10 sm:mx-12 md:mx-14 lg:mx-16 xl:mx-24 2xl:mx-28 my-20">
      {children}
    </div>
  );
};

export default MarginLayout;
