export type Avatar = string;

export type AvatarFile = {
  size: number;
  buffer: Buffer;
  mimetype: string;
};

export type CreateAvatarFile = AvatarFile;

export type ReplaceAvatarFile = AvatarFile;
