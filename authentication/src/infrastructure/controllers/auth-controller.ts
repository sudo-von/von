import AuthUsecase from '../../domain/usecases/auth-usecase';

abstract class AuthController {
  constructor(
    protected authUsecase: AuthUsecase,
  ) {}
}

export default AuthController;
