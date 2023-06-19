import { AboutDto } from './about-dto';
import { MetricsDto } from './metrics-dto';

export type ProfileDto = {
  id: string;
  username: string;
  metrics: MetricsDto;
  about: AboutDto;
};
