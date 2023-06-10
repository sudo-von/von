const statusCodes = {
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
    internalServerError: 500,
  },
};

export default statusCodes;
