import LoggerService from './logger-service';

abstract class CryptographyService {
  constructor(
    protected logger: LoggerService,
  ) {}

  abstract areEqual: (plainData: string, hashedData: string) => Promise<boolean>;

  abstract hash: (plainData: string) => Promise<string>;
}

export default CryptographyService;
