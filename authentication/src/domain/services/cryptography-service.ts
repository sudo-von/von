interface ICryptographyServiceReader {}

interface ICryptographyServiceWriter {
  hash: (plainData: string) => Promise<string>;
  comparePlainAndHash: (plainData: string, hashedData: string) => Promise<boolean>;
}

interface ICryptographyService extends ICryptographyServiceReader, ICryptographyServiceWriter {}

export default ICryptographyService;
