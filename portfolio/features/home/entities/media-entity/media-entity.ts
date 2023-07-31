import { IVideo } from "../video-entity/video-entity";
import { IVector } from "../vector-entity/vector-entity";
import { ITimeline } from "../timeline-entity/timeline-entity";

export type Media = IVideoMedia | /*IVectorMedia |*/ ITimelineMedia;

export interface IVideoMedia {
  type: "video-media";
  video: IVideo;
};

export interface IVectorMedia {
  type: "vector-media";
  vectors: IVector[];
};

export interface ITimelineMedia {
  type: "timeline-media";
  timelines: ITimeline[];
};
