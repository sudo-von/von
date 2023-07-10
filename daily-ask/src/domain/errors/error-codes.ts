export type DomainError = {
  code: DomainErrorCode;
  message: string;
};

export type DomainErrorCode =
| QuestionErrorCode;

export type QuestionErrorCode =
| 'INVALID_QUESTION_LENGTH';
