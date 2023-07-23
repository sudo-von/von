import {
  Username,
} from '../user/user-entity';

export type CompanyEntity = Readonly<{
  id: string;
  name: string;
  startDate: Date;
  endDate: Date;
  position: string;
} & Username>;

export type CreateCompanyEntity = Omit<CompanyEntity, 'id'>;

export type UpdateCompanyEntity = Omit<CompanyEntity, 'id'>;
