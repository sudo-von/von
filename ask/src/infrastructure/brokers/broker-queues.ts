export type Queue =
| QuestionQueue
| UserQueue;

export type QuestionQueue =
| 'Question:CreateBroadcastQuestion';

export type UserQueue =
| 'User:CreateUser'
| 'User:UpdateUser';
