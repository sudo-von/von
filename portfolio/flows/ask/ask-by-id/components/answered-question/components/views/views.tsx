import { FC } from "react";
import { AiFillEye } from "react-icons/ai";
import Icon from "@common/components/icon/icon";
import { formatMetrics } from "@services/metrics-service/metrics.service";
import Metric from "@ask-by-id/components/answered-question/components/metric/metric";

export type ViewsProps = {
  views: number;
};

const Views: FC<ViewsProps> = ({ views }) => {
  const formatedViews = formatMetrics(views, "View", "Views");
  return (
    <div className="flex flex-row justify-start items-center gap-1">
      <Icon icon={AiFillEye} color="normal" />
      <Metric>{formatedViews}</Metric>
    </div>
  );
};

export default Views;
