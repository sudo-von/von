interface ICryptographyService {
  comparePlainAndHash: (plainData: string, hashedData: string) => Promise<boolean>;

  hash: (plainData: string) => Promise<string>;
}

export default ICryptographyService;
