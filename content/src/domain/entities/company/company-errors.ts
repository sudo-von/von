import {
  createDomainErrorFactory,
} from '../../errors/error-factory';
import companyRules from './company-rules';

export const CompanyNotFoundError = createDomainErrorFactory({
  code: 'COMPANY_NOT_FOUND_DOMAIN_ERROR',
  message: 'Company not found.',
});

export const CompanyUpdateFailedError = createDomainErrorFactory({
  code: 'COMPANY_UPDATE_FAILED_DOMAIN_ERROR',
  message: 'Company update failed.',
});

export const InvalidCompanyNameLengthError = createDomainErrorFactory({
  code: 'INVALID_COMPANY_NAME_LENGTH_DOMAIN_ERROR',
  message: `Please provide a name that consists of ${companyRules.name.MIN_LENGTH} to ${companyRules.name.MAX_LENGTH} characters.`,
});

export const InvalidCompanyPositionLengthError = createDomainErrorFactory({
  code: 'INVALID_COMPANY_POSITION_LENGTH_DOMAIN_ERROR',
  message: `Please provide a position that consists of ${companyRules.position.MIN_LENGTH} to ${companyRules.position.MAX_LENGTH} characters.`,
});
