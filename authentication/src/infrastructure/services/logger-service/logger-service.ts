interface ILoggerServiceWriter {
  info: (message: string) => void;
  warn: (message: string) => void;
  error: (error: Error, message: string) => void;
}

interface ILoggerService extends ILoggerServiceWriter {}

export default ILoggerService;
