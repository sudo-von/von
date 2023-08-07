import { FC, PropsWithChildren } from "react";

const MarginLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="mx-8 sm:mx-10 md:mx-14 lg:mx-16 xl:mx-20 2xl:mx-24 my-20">
      {children}
    </div>
  );
};

export default MarginLayout;
