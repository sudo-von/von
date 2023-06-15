import { QuestionEntity } from '../domain/entities/question-entity';
import { ProfileNotFoundError } from '../domain/errors/error-factories';
import AnswerUsecase from '../domain/usecases/answer-usecase';

class AnswerUsecaseApplication extends AnswerUsecase {
  getAnsweredQuestionsByUsername = async (username: string): Promise<QuestionEntity[]> => {
    const profile = await this.profileRepository.getProfileByUsername(username);
    if (!profile) throw ProfileNotFoundError;

    const detailedAnswers = await this.questionRepository.getAnsweredQuestionsByUser(username);

    const answeredQuestions: QuestionEntity[] = detailedAnswers.map((answer) => ({
      id: answer.id,
      askedAt: answer.askedAt,
      question: answer.question,
      username: answer.username,
      answer: answer.answer,
    }));

    return answeredQuestions;
  };
}

export default AnswerUsecaseApplication;
