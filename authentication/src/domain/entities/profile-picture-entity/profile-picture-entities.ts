export type Avatar = Readonly<{
  name: string;
  size: number;
  buffer: Buffer;
  mimetype: string;
}>;

export type CreateAvatar = Avatar;

export type UpdateAvatar = Avatar;
