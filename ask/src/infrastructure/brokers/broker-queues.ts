export type Queue =
| QuestionQueue
| UserQueue;

export type QuestionQueue =
| 'Question:CreateQuestion';

export type UserQueue =
| 'User:CreateUser'
| 'User:UpdateUser';
