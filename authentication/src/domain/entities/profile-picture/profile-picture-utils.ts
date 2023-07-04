const formatProfilePictureUrl = (name: string, mimetype: string) => {
  const extensionFile = mimetype.split('/').pop();
  if (!extensionFile) return `${name}.jpg`;
  return `${name}.${extensionFile}`;
};

export default formatProfilePictureUrl;
