export type LogType = 'warn' | 'info';

abstract class LoggerService {
  abstract log:(logType: LogType, message: string) => void;
}

export default LoggerService;
