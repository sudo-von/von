import { FC, ReactNode } from "react";
import Typography from "@common/components/typography/typography";

type TabHeaderProps = {
  children: ReactNode;
  index: number;
  onHandleClick: VoidFunction;
  value: number;
};

const TabHeader: FC<TabHeaderProps> = ({
  children,
  index,
  onHandleClick,
  value,
}) => {
  const isSelected = value === index;
  const isSelectedClassName = isSelected ? "bg-slate-850 rounded" : "";
  const className = `${isSelectedClassName} flex-1 flex-grow-1 flex-shrink-1 flex-basis-0 text-center justify-center items-center w-full cursor-pointer p-2`;
  return (
    <div className={className} onClick={onHandleClick}>
      <Typography
        color={isSelected ? "light" : "dark"}
        component="h5"
        size="normal"
        spacing="normal"
        weight="normal"
        whitespace="normal"
      >
        {children}
      </Typography>
    </div>
  );
};

export default TabHeader;
