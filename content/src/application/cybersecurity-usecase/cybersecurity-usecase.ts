import {
  UserNotFoundError,
} from '../../domain/entities/user-entity/user-errors';
import {
  CybersecurityNotFoundError,
  CybersecurityUpdateFailedError,
  CybersecurityNotCreatedYetError,
  CybersecurityAlreadyCreatedError,
} from '../../domain/entities/cybersecurity-entity/cybersecurity-errors';
import {
  Cybersecurity,
  CreateBasicCybersecurity,
  UpdateBasicCybersecurity,
} from '../../domain/entities/cybersecurity-entity/cybersecurity-entities';
import CybersecurityUsecase from '../../domain/usecases/cybersecurity-usecase/cybersecurity-usecase';
import validateCybersecurityUpdate from '../../domain/entities/cybersecurity-entity/cybersecurity-validations/update-cybersecurity-validations';
import validateCybersecurityCreation from '../../domain/entities/cybersecurity-entity/cybersecurity-validations/create-cybersecurity-validations';

class CybersecurityUsecaseApplication extends CybersecurityUsecase {
  getCybersecurityByUsername = async (
    username: string,
  ): Promise<Cybersecurity> => {
    const user = await this.userRepository.getUser({ username });
    if (!user) throw UserNotFoundError;

    const cybersecurity = await this.cybersecurityRepository.getCybersecurity({ username });
    if (!cybersecurity) throw CybersecurityNotFoundError;

    return cybersecurity;
  };

  createCybersecurityByUsername = async (
    username: string,
    payload: CreateBasicCybersecurity,
  ): Promise<Cybersecurity> => {
    validateCybersecurityCreation(payload);

    const user = await this.userRepository.getUser({ username });
    if (!user) throw UserNotFoundError;

    const cybersecurity = await this.cybersecurityRepository.getCybersecurity({ username });
    if (cybersecurity) throw CybersecurityAlreadyCreatedError;

    const createdCybersecurity = await this.cybersecurityRepository.createCybersecurity({
      title: payload.title,
      subtitle: payload.subtitle,
      description: payload.description,
      username,
      media: {
        url: payload.media.url,
      },
    });

    return createdCybersecurity;
  };

  updateCybersecurityByUsername = async (
    username: string,
    payload: UpdateBasicCybersecurity,
  ): Promise<Cybersecurity> => {
    validateCybersecurityUpdate(payload);

    const user = await this.userRepository.getUser({ username });
    if (!user) throw UserNotFoundError;

    const cybersecurity = await this.cybersecurityRepository.getCybersecurity({ username });
    if (!cybersecurity) throw CybersecurityNotCreatedYetError;

    const updatedCybersecurity = await this.cybersecurityRepository.updateCybersecurity({
      title: payload.title,
      subtitle: payload.subtitle,
      description: payload.description,
      media: {
        url: payload.media.url,
      },
    }, { username });
    if (!updatedCybersecurity) throw CybersecurityUpdateFailedError;

    return updatedCybersecurity;
  };
}

export default CybersecurityUsecaseApplication;
