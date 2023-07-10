export type DomainError = {
  code: DomainErrorCode;
  message: string;
};

export type DomainErrorCode =
| QuestionErrorCode;

export type QuestionErrorCode =
| 'INVALID_ASKED_BY_LENGTH'
| 'INVALID_QUESTION_LENGTH';
