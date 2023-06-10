export interface HashService {
  compare: (plainData: string, hashedData: string) => Promise<boolean>;
  hashSensitiveData: (data: string) => Promise<string>;
}
