import { FC, PropsWithChildren } from "react";

const Card: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="hover:shadow cursor-pointer rounded border border-slate-100 focus:border-slate-200">
      <div className="flex flex-col gap-3 p-5">{children}</div>
    </div>
  );
};

export default Card;
