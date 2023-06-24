export type ProfileEntity = Readonly<{
  id: string;
  name: string;
  quote: string;
  userId: string;
  position: string;
  interest: string;
  profilePicture: string;
}>;

export type CreateProfileEntity = Omit<ProfileEntity, 'id'>;

export type UpdateProfileEntity = Omit<ProfileEntity, 'id'>;
