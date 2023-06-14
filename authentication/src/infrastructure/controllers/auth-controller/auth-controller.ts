import LoggerService from '../../../domain/services/logger-service';
import AuthUsecase from '../../../domain/usecases/auth-usecase';
import MessageBroker from '../../message-brokers/message-broker';

abstract class AuthController {
  constructor(
    protected authUsecase: AuthUsecase,
    protected loggerService: LoggerService,
    protected messageBroker: MessageBroker,
  ) {}
}

export default AuthController;