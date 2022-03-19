import { Injectable, Inject } from '@nestjs/common';
import { ConfigType, ConfigService } from '@nestjs/config';
import config from './config';

@Injectable()
export class AppService {
  constructor(
    @Inject('API_KEY') private apiKey: string,
    @Inject('TASKS') private tasks: any[],
    @Inject(config.KEY) private configService: ConfigType<typeof config>
  ) {}
  //private configService: ConfigService,
  getHello(): string {
    const apiKey = this.configService.apiKey;
    const name = this.configService.database.name;

    // const apiKey = this.configService.get('API_KEY');
    // const name = this.configService.get('DATABASE_NAME');
    return `Hello World! ${apiKey} ${name}`;
  }
}
