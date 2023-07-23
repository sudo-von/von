import {
  Username,
} from '../user/user-entity';

export type IntroductionEntity = Readonly<{
  id: string;
  title: string;
  description: string;
  videoUrl: string;
} & Username>;

export type CreateIntroductionEntity = Omit<IntroductionEntity, 'id'>;

export type UpdateIntroductionEntity = Omit<IntroductionEntity, 'id'>;
