import { FC, PropsWithChildren } from "react";

const TabContainer: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex flex-wrap mt-5 rounded bg-slate-50 p-2">
      {children}
    </div>
  );
};

export default TabContainer;
