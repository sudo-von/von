export type ProfileEntity = Readonly<{
  id: string;
  userId: string;
  username: string;
}>;

export type CreateProfileEntity = Readonly<
Omit<ProfileEntity, 'id'>
>;
