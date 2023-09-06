import {
  TokenHeader,
  DecodedToken,
  TokenPayload,
} from "@services/token-service/token.service.types";

export const decodeToken = (encodedToken: string): DecodedToken => {
  const token = encodedToken.split(" ").pop();
  if (!token) throw new Error("Missing token.");

  const segments = token.split(".");
  if (segments.length !== 3) throw new Error("The provided token is invalid.");

  const [headerSegment, payloadSegment, signatureSegment] = segments;

  const decodedHeader = Buffer.from(headerSegment, "base64").toString("utf-8");
  const parsedHeader = JSON.parse(decodedHeader) as TokenHeader;

  const decodedPayload = Buffer.from(payloadSegment, "base64").toString("utf-8");
  const parsedPayload = JSON.parse(decodedPayload) as TokenPayload;

  const decodedToken: DecodedToken = {
    header: parsedHeader,
    payload: parsedPayload,
    signature: signatureSegment,
  };

  return decodedToken;
};
