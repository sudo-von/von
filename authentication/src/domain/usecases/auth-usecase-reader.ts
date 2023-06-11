interface IAuthUsecaseReader {
  refresh: (token: string) => Promise<string>;
  authenticate: (email: string, password: string) => Promise<string>;
}

export default IAuthUsecaseReader;
