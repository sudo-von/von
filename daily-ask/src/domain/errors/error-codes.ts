export type DomainError = {
  code: DomainErrorCode;
  message: string;
};

export type DomainErrorCode =
| DailyQuestionErrorCode;

export type DailyQuestionErrorCode =
| 'INVALID_ASKED_BY_LENGTH'
| 'INVALID_QUESTION_LENGTH';
