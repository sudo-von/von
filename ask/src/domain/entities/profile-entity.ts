export type ProfileEntity = Readonly<{
  id: string;
  userId: string;
  username: string;
  statistics: {
    total_views: number;
    total_questions: number;
    total_answers: number;
  }
}>;

export type CreateProfileEntity = Readonly<
Omit<ProfileEntity, 'id'>
>;

export type UpdateProfileEntity = Readonly<
Omit<ProfileEntity, 'id'>
>;
