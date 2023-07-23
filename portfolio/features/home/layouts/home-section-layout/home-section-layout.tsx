import React, { FC, PropsWithChildren } from "react";

const HomeSectionLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 mt-24 sm:mt-28 md:mt-32 gap-8">
      {children}
    </div>
  );
};

export default HomeSectionLayout;
