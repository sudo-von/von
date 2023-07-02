export type IntroductionEntity = Readonly<{
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  username: string;
}>;

export type CreateIntroductionEntity = Omit<IntroductionEntity, 'id'>;

export type UpdateIntroductionEntity = Omit<IntroductionEntity, 'id'>;
