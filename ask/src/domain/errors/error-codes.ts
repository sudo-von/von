export type DomainError = {
  code: DomainErrorCode;
  message: string;
};

export type DomainErrorCode =
| AnswerErrorCode
| QuestionErrorCode
| UserErrorCode;

export type AnswerErrorCode =
| 'ANSWER_CREATE_FAILED'
| 'ANSWER_DELETE_FAILED'
| 'ANSWER_UPDATE_FAILED'
| 'INVALID_ANSWER_LENGTH';

export type QuestionErrorCode =
| 'INVALID_QUESTION_LENGTH'
| 'QUESTION_ALREADY_ANSWERED'
| 'QUESTION_DELETE_FAILED'
| 'QUESTION_NOT_ANSWERED'
| 'QUESTION_NOT_FOUND'
| 'QUESTION_UPDATE_FAILED';

export type UserErrorCode =
| 'INVALID_USERNAME_LENGTH'
| 'SINGLE_USER_ONLY'
| 'USER_NOT_FOUND'
| 'USER_PERMISSION_DENIED'
| 'USER_UPDATE_FAILED';
