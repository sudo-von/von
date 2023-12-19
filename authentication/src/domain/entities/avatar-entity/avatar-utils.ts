const generateFilename = (hash: string, mimetype: string): string => {
  const extension = mimetype.split('/').pop();
  const filename = `${hash}.${extension}`;
  return filename;
};

export default generateFilename;
