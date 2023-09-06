import { FC, PropsWithChildren } from "react";
import { MdDateRange } from "react-icons/md";
import Icon from "@common/components/icon/icon";
import Metric from "@ask-by-id/components/answered-question/components/metric/metric";

const AnsweredAt: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex flex-row justify-start items-center gap-1">
      <Icon icon={MdDateRange} color="normal" />
      <Metric>{children}</Metric>
    </div>
  );
};

export default AnsweredAt;
