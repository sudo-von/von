export interface UserUsecaseReader {
  authenticate: (email: string, password: string) => Promise<string>;
}
