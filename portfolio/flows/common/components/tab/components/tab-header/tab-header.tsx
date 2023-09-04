import Typography from "@common/components/typography/typography";
import { FC, ReactNode } from "react";

type TabHeaderProps = {
  children: ReactNode;
  index: number;
  value: number;
  onHandleClick: VoidFunction;
};

const TabHeader: FC<TabHeaderProps> = ({
  children,
  index,
  onHandleClick,
  value,
}) => {
  const className = `flex-1 flex-grow-1 flex-shrink-1 flex-basis-0 text-center justify-center items-center w-full cursor-pointer p-2 ${
    value === index && "bg-slate-850 rounded "
  }`;
  return (
    <div className={className} onClick={onHandleClick}>
      <Typography
        color={value === index ? "light" : "dark"}
        component="h5"
        size="normal"
        spacing="normal"
        weight={value === index ? "normal" : "normal"}
        whitespace="normal"
      >
        {children}
      </Typography>
    </div>
  );
};

export default TabHeader;
