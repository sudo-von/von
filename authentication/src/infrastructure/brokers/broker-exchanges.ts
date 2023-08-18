export type Exchange =
| AuthenticationExchange;

export type AuthenticationExchange =
| 'Authentication:CreateUser'
| 'Authentication:UpdateUser';
