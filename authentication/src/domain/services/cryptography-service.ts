abstract class CryptographyService {
  abstract areEqual: (plainData: string, hashedData: string) => Promise<boolean>;

  abstract hash: (data: string) => Promise<string>;
}

export default CryptographyService;
