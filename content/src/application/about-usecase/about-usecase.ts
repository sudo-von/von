import {
  UserNotFoundError,
} from '../../domain/entities/user-entity/user-errors';
import {
  AboutNotFoundError,
  AboutUpdateFailedError,
  AboutNotCreatedYetError,
  AboutAlreadyCreatedError,
} from '../../domain/entities/about-entity/about-errors';
import {
  About,
  CreateBasicAbout,
  UpdateBasicAbout,
} from '../../domain/entities/about-entity/about-entities';
import AboutUsecase from '../../domain/usecases/about-usecase/about-usecase';
import validateAboutUpdate from '../../domain/entities/about-entity/about-validations/update-about-validations';
import validateAboutCreation from '../../domain/entities/about-entity/about-validations/create-about-validations';

class AboutUsecaseApplication extends AboutUsecase {
  getAboutByUsername = async (
    username: string,
  ): Promise<About> => {
    const user = await this.userRepository.getUser({ username });
    if (!user) throw UserNotFoundError;

    const about = await this.aboutRepository.getAbout({ username });
    if (!about) throw AboutNotFoundError;

    return about;
  };

  createAboutByUsername = async (
    username: string,
    payload: CreateBasicAbout,
  ): Promise<About> => {
    validateAboutCreation(payload);

    const user = await this.userRepository.getUser({ username });
    if (!user) throw UserNotFoundError;

    const about = await this.aboutRepository.getAbout({ username });
    if (about) throw AboutAlreadyCreatedError;

    const createdAbout = await this.aboutRepository.createAbout({
      title: payload.title,
      subtitle: payload.subtitle,
      description: payload.description,
      username,
      media: {
        url: payload.media.url,
      },
    });

    return createdAbout;
  };

  updateAboutByUsername = async (
    username: string,
    payload: UpdateBasicAbout,
  ): Promise<About> => {
    validateAboutUpdate(payload);

    const user = await this.userRepository.getUser({ username });
    if (!user) throw UserNotFoundError;

    const about = await this.aboutRepository.getAbout({ username });
    if (!about) throw AboutNotCreatedYetError;

    const updatedAbout = await this.aboutRepository.updateAbout({
      title: payload.title,
      subtitle: payload.subtitle,
      description: payload.description,
      media: {
        url: payload.media.url,
      },
    }, { username });
    if (!updatedAbout) throw AboutUpdateFailedError;

    return updatedAbout;
  };
}

export default AboutUsecaseApplication;
