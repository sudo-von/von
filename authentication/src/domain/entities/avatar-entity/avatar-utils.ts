const generateAvatarFileName = (name: string, mimetype: string) => {
  const extension = mimetype.split('/').pop();

  if (!extension) return `${name}.jpg`;

  return `${name}.${extension}`;
};

export default generateAvatarFileName;
