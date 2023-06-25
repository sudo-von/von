export type ProfileEntity = Readonly<{
  id: string;
  quote: string;
  interest: string;
  username: string;
  position: string;
}>;

export type CreateProfileEntity = Omit<ProfileEntity, 'id'>;

export type UpdateProfileEntity = Omit<ProfileEntity, 'id'>;
