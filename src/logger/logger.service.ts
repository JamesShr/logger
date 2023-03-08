import { Injectable } from '@nestjs/common';
import * as winston from 'winston';
import { format, transports } from 'winston';
import Transport from 'winston-transport';
// import 'winston-mongodb';
// import { TransformableInfo } from 'logform';

/**
  error: 0,
  warn: 1,
  info: 2, 
  http: 3, 
  verbose: 4,
  debug: 5
  silly: 6
 **/

// export interface LoggerService {
//   system(): winston.Logger;
// }

// export const LOGGER_SERVICE = Symbol('LOGGER_SERVICE');

export type LoggerOption = {
  transports?: winston.transport[] | winston.transport
};

@Injectable()
export class LoggerService {
  private systemLogger: winston.Logger;
  private options: LoggerOption;

  constructor(options: Partial<LoggerOption>) {
    this.options = Object.assign({}, {
      transports: [new transports.Console()]
    }, options);

    this.systemLogger = winston.createLogger({
      level: 'silly',
      format: format.combine(
        format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss Z' }),
        format.json(),
        format.colorize({ all: true }),
        format.label({ label: 'sys' }),
      ),
      ...this.options
    });
  }

  public init(): winston.Logger {
    return this.systemLogger;
  }

  // private formatConsoleMessage(info: TransformableInfo): string {
  //   const { label, timestamp, level, message, ...obj } = info;
  //   return `[${label}] - ${timestamp} [${level}]: ${message}`;
  // }
}
