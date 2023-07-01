export type IntroductionEntity = Readonly<{
  id: string;
  title: string;
  username: string;
  videoUrl: string;
  description: string;
}>;

export type CreateIntroductionEntity = Omit<IntroductionEntity, 'id'>;

export type UpdateIntroductionEntity = Omit<IntroductionEntity, 'id'>;
