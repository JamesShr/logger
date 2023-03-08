import { LoggerModule } from './logger/logger.module';
import { LoggerService, LoggerOption } from './logger/logger.service';
import * as winston from 'winston';
import { transports } from 'winston';

export { LoggerModule, LoggerService, LoggerOption, winston, transports };
