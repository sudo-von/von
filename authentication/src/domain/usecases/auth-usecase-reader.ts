interface IAuthUsecaseReader {
  authenticate: (email: string, password: string) => Promise<string>;
}

export default IAuthUsecaseReader;
