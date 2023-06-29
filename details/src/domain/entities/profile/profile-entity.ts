export type ProfileEntity = Readonly<{
  id: string;
  quote: string;
  username: string;
  interest: string;
  position: string;
}>;

export type CreateProfileEntity = Omit<ProfileEntity, 'id'>;

export type UpdateProfileEntity = Omit<ProfileEntity, 'id'>;
