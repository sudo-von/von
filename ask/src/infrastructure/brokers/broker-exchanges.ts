export type Exchange =
| QuestionExchange
| UserExchange;

export type QuestionExchange =
| 'Question:CreateBroadcastQuestion';

export type UserExchange =
| 'User:CreateUser'
| 'User:UpdateUser';
