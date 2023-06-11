import LoggerService from './logger-service';

abstract class CryptographyService {
  constructor(
    protected logger: LoggerService,
  ) {}

  abstract comparePlainAndHash: (plainData: string, hashedData: string) => Promise<boolean>;

  abstract hash: (plainData: string) => Promise<string>;
}

export default CryptographyService;
