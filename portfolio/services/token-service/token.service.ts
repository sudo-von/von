import {
  TokenHeader,
  DecodedToken,
  EncodedToken,
  TokenPayload,
} from "./token.service.types";
import cookie from 'js-cookie';

export const parseData = <T>(data: string): T => {
  const decodedData = Buffer.from(data, "base64").toString("utf-8");
  const parsedData = Buffer.from(decodedData, "base64").toString("utf-8") as T;
  return parsedData;
}

export const decodeToken = (encodedToken: EncodedToken): DecodedToken => {
  const token = encodedToken.split(" ").pop();
  if (!token) throw new Error("Missing token.");

  const encodedBody = token.split(".");
  if (encodedBody.length !== 3)
    throw new Error("The provided token is invalid.");

  const [encodedHeader, encodedPayload, encodedSignature] = encodedBody;

  const decodedHeader = parseData<TokenHeader>(encodedHeader);
  const decodedPayload = parseData<TokenPayload>(encodedPayload);

  const decodedToken: DecodedToken = {
    header: decodedHeader,
    payload: decodedPayload,
    signature: encodedSignature,
  };
  return decodedToken;
};


export const getToken = () => cookie.get('token');

export const removeToken = () => cookie.remove('token');

export const setToken = (encodedToken: EncodedToken) => cookie.set('token', encodedToken, { expires: 7 }); 