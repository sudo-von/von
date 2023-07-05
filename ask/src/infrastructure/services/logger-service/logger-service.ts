abstract class LoggerService {
  abstract info: (message: string) => void;

  abstract warn: (message: string) => void;

  abstract error: (message: string, error: Error) => void;
}

export default LoggerService;
