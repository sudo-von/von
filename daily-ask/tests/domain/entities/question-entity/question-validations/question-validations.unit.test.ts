import questionRules from '../../../../../src/domain/entities/question-entity/question-rules';
import {
  validateAskedByLength,
  validateQuestionLength,
} from '../../../../../src/domain/entities/question-entity/question-validations/question-validations';

describe('question validations', () => {
  describe('when minimum length is valid', () => {
    it('should return true when askedBy is validated', () => {
      const askedBy = 'a'.repeat(questionRules.askedBy.MIN_LENGTH);
      expect(validateAskedByLength(askedBy)).toBeTruthy();
    });

    it('should return true when question is validated', () => {
      const question = 'a'.repeat(questionRules.question.MIN_LENGTH);
      expect(validateQuestionLength(question)).toBeTruthy();
    });
  });

  describe('when maximum length is valid', () => {
    it('should return true when question is validated', () => {
      const question = 'a'.repeat(questionRules.question.MAX_LENGTH);
      expect(validateQuestionLength(question)).toBeTruthy();
    });
  });

  describe('when minimum length is invalid', () => {
    it('should return false when askedBy is validated', () => {
      const askedBy = 'a'.repeat(questionRules.askedBy.MIN_LENGTH - 1);
      expect(validateAskedByLength(askedBy)).toBeFalsy();
    });

    it('should return false when question is validated', () => {
      const question = 'a'.repeat(questionRules.question.MIN_LENGTH - 1);
      expect(validateQuestionLength(question)).toBeFalsy();
    });
  });

  describe('when maximum length is invalid', () => {
    it('should return false when question is validated', () => {
      const question = 'a'.repeat(questionRules.question.MAX_LENGTH + 1);
      expect(validateQuestionLength(question)).toBeFalsy();
    });
  });
});
