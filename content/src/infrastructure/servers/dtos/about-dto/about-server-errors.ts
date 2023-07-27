import statusCode from 'http-status-codes';
import {
  ServerErrorFactory,
  createServerErrorFactory,
} from '../../errors/server-error-factory';
import {
  AboutErrorCode,
} from '../../../../domain/errors/error-codes';
import {
  AboutNotFoundError,
  AboutUpdateFailedError,
  InvalidAboutDomainError,
  AboutNotCreatedYetError,
  AboutAlreadyCreatedError,
  InvalidAboutUrlLengthError,
} from '../../../../domain/entities/about-entity/about-errors';

export const AboutAlreadyCreatedServerError = createServerErrorFactory({
  code: 'ABOUT_ALREADY_CREATED',
  error: AboutAlreadyCreatedError.message,
  statusCode: statusCode.CONFLICT,
});

export const AboutNotCreatedYetServerError = createServerErrorFactory({
  code: 'ABOUT_NOT_CREATED_YET',
  error: AboutNotCreatedYetError.message,
  statusCode: statusCode.CONFLICT,
});

export const AboutNotFoundServerError = createServerErrorFactory({
  code: 'ABOUT_NOT_FOUND',
  error: AboutNotFoundError.message,
  statusCode: statusCode.NOT_FOUND,
});

export const AboutUpdateFailedServerError = createServerErrorFactory({
  code: 'ABOUT_UPDATE_FAILED',
  error: AboutUpdateFailedError.message,
  statusCode: statusCode.INTERNAL_SERVER_ERROR,
});

export const InvalidAboutDomainServerError = createServerErrorFactory({
  code: 'INVALID_ABOUT_DOMAIN',
  error: InvalidAboutDomainError.message,
  statusCode: statusCode.BAD_REQUEST,
});

export const InvalidAboutUrlLengthServerError = createServerErrorFactory({
  code: 'INVALID_ABOUT_URL_LENGTH',
  error: InvalidAboutUrlLengthError.message,
  statusCode: statusCode.BAD_REQUEST,
});

export const aboutServerErrors: Record<AboutErrorCode, ServerErrorFactory> = {
  ABOUT_ALREADY_CREATED: AboutAlreadyCreatedServerError,
  ABOUT_NOT_CREATED_YET: AboutNotCreatedYetServerError,
  ABOUT_NOT_FOUND: AboutNotFoundServerError,
  ABOUT_UPDATE_FAILED: AboutUpdateFailedServerError,
  INVALID_ABOUT_DOMAIN: InvalidAboutDomainServerError,
  INVALID_ABOUT_URL_LENGTH: InvalidAboutUrlLengthServerError,
};
