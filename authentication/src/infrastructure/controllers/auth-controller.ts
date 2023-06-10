import AuthUsecase from '../../domain/usecase/auth-usecase';

abstract class AuthController {
  constructor(
    protected authUsecase: AuthUsecase,
  ) {}
}

export default AuthController;
