import AuthUsecase from '../domain/usecase/auth-usecase';

abstract class ApplicationService {
  constructor(protected authUsecase: AuthUsecase) {}

  abstract start: () => void;
}

export default ApplicationService;
