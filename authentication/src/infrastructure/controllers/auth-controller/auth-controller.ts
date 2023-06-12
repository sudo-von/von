import LoggerService from '../../../domain/services/logger-service';
import AuthUsecase from '../../../domain/usecases/auth-usecase';

abstract class AuthController {
  constructor(
    protected authUsecase: AuthUsecase,
    protected logger: LoggerService,
  ) {}
}

export default AuthController;
