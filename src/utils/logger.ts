type loggerType =
  | string
  | {
      text: string;
      data: any;
    };

class Logger {
  log(data: loggerType): void {
    console.log(data);
  }

  warning(data: loggerType): void {
    console.warn(data);
  }

  error(data: loggerType): void {
    console.error(data);
  }
}

export const logger = new Logger();
