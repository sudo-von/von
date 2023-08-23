export type TokenHeader = {
  alg: string;
};

export type TokenPayload = {
  id: string;
  iat: number;
  exp: number;
  name: string;
  email: string;
  username: string;
};

export type TokenSignature = string;

export type DecodedToken = {
  header: TokenHeader;
  payload: TokenPayload;
  signature: TokenSignature;
};
