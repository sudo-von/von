type SuccessCodes = 200 | 201 | 202;

type ClientSideCodes = 400 | 401 | 403 | 404 | 409 | 422;

type ServerSideCodes = 500;

export type AllStatusCodes = SuccessCodes | ClientSideCodes | ServerSideCodes;

type StatusCodes = {
  success: Record<'ok' | 'created' | 'accepted', SuccessCodes>,
  clientSide: Record<'badRequest' | 'unauthorized' | 'forbidden' | 'notFound' | 'conflict' | 'unprocessableEntity', ClientSideCodes>,
  serverSide: Record<'internalServer', ServerSideCodes>,
};

const statusCodes: StatusCodes = {
  success: {
    ok: 200,
    created: 201,
    accepted: 202,
  },
  clientSide: {
    badRequest: 400,
    unauthorized: 401,
    forbidden: 403,
    notFound: 404,
    conflict: 409,
    unprocessableEntity: 422,
  },
  serverSide: {
    internalServer: 500,
  },
} as const;

export default statusCodes;
