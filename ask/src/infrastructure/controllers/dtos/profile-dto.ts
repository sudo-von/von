import { MetricsDto } from './metrics-dto';

export type ProfileDto = {
  id: string;
  username: string;
  metrics: MetricsDto;
};
