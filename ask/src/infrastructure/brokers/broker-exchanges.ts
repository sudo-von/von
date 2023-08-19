export type Exchange =
| AuthenticationExchange
| DailyAskExchange;

export type AuthenticationExchange =
| 'Authentication:CreateUser'
| 'Authentication:UpdateUser';

export type DailyAskExchange =
| 'DailyAsk:CreateDailyQuestion';
