import LoggerService from '../../infrastructure/services/logger-service/logger-service';

abstract class SecurityService {
  constructor(protected loggerService: LoggerService) {}

  abstract computeChecksum: (plainData: string) => string;

  abstract hashPassword: (password: string) => Promise<string>;

  abstract compareHashes: (plainData: string, hashedData: string) => Promise<boolean>;
}

export default SecurityService;
