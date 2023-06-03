import { UserUsecase } from '../../domain/usecase/user-usecase';

abstract class AbstractUserController {
  constructor(
    protected userUsecase: UserUsecase,
  ) {}

  abstract init(): void;
}

export default AbstractUserController;
