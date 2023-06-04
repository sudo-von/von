import { UserUsecase } from '../usecase/user-usecase';

abstract class AbstractApplication {
  constructor(protected userUsecase: UserUsecase) {}

  abstract start: () => void;
}

export default AbstractApplication;
