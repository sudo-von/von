abstract class AbstractRequestError extends Error {
  abstract statusCode: number;
}

export default AbstractRequestError;
