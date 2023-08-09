export type TimelineDataAttributesResponse = {
  name: string;
  url: string;
};

export type TimelineDataResponse = {
  id: number;
  attributes: TimelineDataAttributesResponse;
};

export type TimelineSrcResponse = {
  data: TimelineDataResponse
};

export type TimelineAttributesResponse = {
  company: string;
  position: string;
  start_date: string;
  end_date: string;
  description: string;
  src: TimelineSrcResponse;
};

export type TimelineResponse = {
  id: number;
  attributes: TimelineAttributesResponse;
};