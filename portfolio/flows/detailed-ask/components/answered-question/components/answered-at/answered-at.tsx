import { FC, PropsWithChildren } from "react";
import Metric from "../metric/metric";
import { MdDateRange } from "react-icons/md";
import Icon from "../../../../../common/components/icon/icon";

const AnsweredAt: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex flex-row justify-start items-center gap-1">
      <Icon icon={MdDateRange} color="normal" />
      <Metric>{children}</Metric>
    </div>
  );
};

export default AnsweredAt;
