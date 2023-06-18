import { CreateMetricsEntity, MetricsEntity, UpdateMetricsEntity } from './metrics-entity';

export type ProfileEntity = Readonly<{
  id: string;
  userId: string;
  username: string;
  metrics: MetricsEntity
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
