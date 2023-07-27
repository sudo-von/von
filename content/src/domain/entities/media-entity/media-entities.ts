import {
  Video,
  CreateVideo,
} from '../video-entity/video-entitites';

export type Media = VideoMedia;

export type CreateMedia = CreateVideoMedia;

export type VideoMedia = {
  type: 'video';
  video: Video;
};

export type CreateVideoMedia = {
  type: 'video';
  video: CreateVideo;
};
