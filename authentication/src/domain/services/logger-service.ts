abstract class LoggerService {
  abstract log:(type: string, message: string) => void;
}

export default LoggerService;
