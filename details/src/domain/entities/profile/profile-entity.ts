export type ProfileEntity = Readonly<{
  id: string;
  quote: string;
  interest: string;
  position: string;
  username: string;
}>;

export type CreateProfileEntity = Omit<ProfileEntity, 'id'>;

export type UpdateProfileEntity = Omit<ProfileEntity, 'id'>;
