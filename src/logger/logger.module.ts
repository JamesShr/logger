import { DynamicModule, Module } from '@nestjs/common';
import { LoggerService, LoggerOption } from './logger.service';

@Module({})
export class LoggerModule {
  static forRoot(options: Partial<LoggerOption>): DynamicModule {
    const providers = [
      {
        provide: LoggerService,
        useValue: new LoggerService(options),
      },
    ];

    return {
      providers: providers,
      exports: providers,
      module: LoggerModule,
    };
  }
}
