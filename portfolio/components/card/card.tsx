import { FC, ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  onClick?: VoidFunction;
};

const Card: FC<CardProps> = ({ children, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="hover:shadow cursor-pointer rounded border border-slate-100 focus:border-slate-200"
    >
      <div className="flex flex-col gap-3 p-5">{children}</div>
    </div>
  );
};

export default Card;
