import { AboutEntity } from './about-entity';
import { CreateMetricsEntity, MetricsEntity, UpdateMetricsEntity } from './metrics-entity';

export type ProfileEntity = Readonly<{
  id: string;
  userId: string;
  username: string;
  metrics: MetricsEntity
  about: AboutEntity;
}>;

export type CreateProfileEntity = Readonly<
Omit<ProfileEntity, 'id' | 'metrics'>
>;

export type CreateProfileWithMetricsEntity = Readonly<
Omit<ProfileEntity, 'id' | 'metrics' & {
  metrics: CreateMetricsEntity
}>
>;

export type UpdateProfileEntity = Readonly<
Omit<ProfileEntity, 'id' | 'metrics'>
>;

export type UpdateProfileWithMetricsEntity = Readonly<
Omit<ProfileEntity, 'id' | 'metrics'> & {
  metrics: UpdateMetricsEntity
}
>;
