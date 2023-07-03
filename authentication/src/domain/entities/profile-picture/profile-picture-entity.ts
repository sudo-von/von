export type ProfilePicture = Readonly<{
  name: string;
  size: number;
  buffer: Buffer;
  mimetype: string;
}>;

export type CreateProfilePicture = ProfilePicture;

export type UpdateProfilePicture = ProfilePicture;
