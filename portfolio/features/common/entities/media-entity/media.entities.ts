import { Video } from "../video-entity/video.entities"
import { Vector } from "../vector-entity/vector.entities";
import { Timeline } from "../timeline-entity/timeline.entities";

export type Media = {
  video?: Video;
  vectors: Vector[];
  timelines: Timeline[];
};
