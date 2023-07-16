export type Avatar = Readonly<{
  name: string;
}>;

export type AvatarFile = Readonly<{
  name: string;
  size: number;
  buffer: Buffer;
  mimetype: string;
}>;

export type CreateAvatarFile = AvatarFile;

export type UpdateAvatarFile = AvatarFile;