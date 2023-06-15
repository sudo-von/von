import { MediumQuestionEntity } from '../domain/entities/question-entity';
import { ProfileNotFoundError } from '../domain/errors/error-factories';
import AnswerUsecase from '../domain/usecases/answer-usecase';

class AnswerUsecaseApplication extends AnswerUsecase {
  getAnswersByUsername = async (username: string): Promise<MediumQuestionEntity[]> => {
    const profile = await this.profileRepository.getProfileByUsername(username);
    if (!profile) throw ProfileNotFoundError;

    const answers = await this.questionRepository.getAnswersByUsername(username);

    const mediumAnswers: MediumQuestionEntity[] = answers.map((answer) => ({
      id: answer.id,
      askedAt: answer.askedAt,
      question: answer.question,
      username: answer.username,
      answer: answer.answer,
    }));

    return mediumAnswers;
  };
}

export default AnswerUsecaseApplication;
