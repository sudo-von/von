import { TimelineProps } from "@common/components/timeline/timeline";
import { formatTimelineDate } from "@services/date-service/date.service";
import { TimelineData } from "@home/services/timeline-service/timeline.service.responses";

export const toTimelineProps = (timelineData: TimelineData): TimelineProps => ({
  company: timelineData.attributes.company,
  description: timelineData.attributes.description,
  endDate: formatTimelineDate(new Date(timelineData.attributes.end_date)),
  position: timelineData.attributes.position,
  src: timelineData.attributes.src.data.attributes.url,
  startDate: formatTimelineDate(new Date(timelineData.attributes.start_date)),
});
