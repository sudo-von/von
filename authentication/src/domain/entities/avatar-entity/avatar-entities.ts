export type Avatar = Readonly<{
  name: string;
}>;

export type AvatarFile = Readonly<{
  size: number;
  buffer: Buffer;
  mimetype: string;
}>;

export type CreateAvatarFile = AvatarFile;

export type UpdateAvatarFile = AvatarFile;
