export type LogType = 'warn' | 'info';

export interface ILoggerServiceWriter {
  log:(logType: LogType, message: string) => void;
}

interface ILoggerService extends ILoggerServiceWriter {}

export default ILoggerService;
