abstract class CryptographyService {
  abstract areEqual: (plainData: string, hashedData: string) => Promise<boolean>;

  abstract hash: (plainData: string) => Promise<string>;
}

export default CryptographyService;
