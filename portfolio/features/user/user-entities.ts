import { DetailedMetrics } from "../metric/metric-entities";

export type User = {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  username: string;
};

export type DetailedUser = Readonly<{
  id: string;
  name: string;
  email: string;
  avatar: string;
  username: string;
  position: string;
  interest: string;
  metrics: DetailedMetrics;
}>;