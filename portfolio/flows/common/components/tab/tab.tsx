import { FC, ReactNode } from "react";

type TabProps = {
  children: ReactNode;
  index: number;
  value: number;
};

const Tab: FC<TabProps> = ({ children, index, value }) => {
  return value === index && children;
};

export default Tab;
