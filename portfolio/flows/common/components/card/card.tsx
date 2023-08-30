import { FC, ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  onClick?: VoidFunction;
};

const Card: FC<CardProps> = ({ children, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="flex flex-col hover:shadow cursor-pointer rounded border border-slate-100"
    >
      <div className="flex flex-col gap-2.5 p-5 break-all">{children}</div>
    </div>
  );
};

export default Card;
