interface ICryptographyServiceWriter {
  hash: (plainData: string) => Promise<string>;
  comparePlainAndHash: (plainData: string, hashedData: string) => Promise<boolean>;
}

interface ICryptographyService extends ICryptographyServiceWriter {}

export default ICryptographyService;
