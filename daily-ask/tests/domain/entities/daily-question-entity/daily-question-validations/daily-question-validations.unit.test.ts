import dailyQuestionRules from '../../../../../src/domain/entities/daily-question-entity/daily-question-rules';
import {
  validateAskedByLength,
  validateQuestionLength,
} from '../../../../../src/domain/entities/daily-question-entity/daily-question-validations/daily-question-validations';

describe('daily question validations', () => {
  describe('when minimum length is valid', () => {
    it('should return true when asked by is validated', () => {
      const askedBy = 'a'.repeat(dailyQuestionRules.askedBy.MIN_LENGTH);
      expect(validateAskedByLength(askedBy)).toBeTruthy();
    });

    it('should return true when question is validated', () => {
      const question = 'a'.repeat(dailyQuestionRules.question.MIN_LENGTH);
      expect(validateQuestionLength(question)).toBeTruthy();
    });
  });

  describe('when maximum length is valid', () => {
    it('should return true when asked by is validated', () => {
      const askedBy = 'a'.repeat(dailyQuestionRules.askedBy.MAX_LENGTH);
      expect(validateAskedByLength(askedBy)).toBeTruthy();
    });

    it('should return true when question is validated', () => {
      const question = 'a'.repeat(dailyQuestionRules.question.MAX_LENGTH);
      expect(validateQuestionLength(question)).toBeTruthy();
    });
  });

  describe('when minimum length is invalid', () => {
    it('should return false when asked by is validated', () => {
      const askedBy = 'a'.repeat(dailyQuestionRules.askedBy.MIN_LENGTH - 1);
      expect(validateAskedByLength(askedBy)).toBeFalsy();
    });

    it('should return false when question is validated', () => {
      const question = 'a'.repeat(dailyQuestionRules.question.MIN_LENGTH - 1);
      expect(validateQuestionLength(question)).toBeFalsy();
    });
  });

  describe('when maximum length is invalid', () => {
    it('should return false when asked by is validated', () => {
      const askedBy = 'a'.repeat(dailyQuestionRules.askedBy.MAX_LENGTH + 1);
      expect(validateAskedByLength(askedBy)).toBeFalsy();
    });

    it('should return false when question is validated', () => {
      const question = 'a'.repeat(dailyQuestionRules.question.MAX_LENGTH + 1);
      expect(validateQuestionLength(question)).toBeFalsy();
    });
  });
});
