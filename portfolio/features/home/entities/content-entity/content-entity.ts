import { Media } from "../media-entity/media-entity";
import { ISection } from "../section-entity/section-entity";

export interface IContent extends ISection {
  media: Media;
};