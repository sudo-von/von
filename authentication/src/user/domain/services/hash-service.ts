export interface HashService {
  hashSensitiveData: (data: string) => Promise<string>;
}
