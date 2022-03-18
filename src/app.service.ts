import { Injectable, Inject } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(
    @Inject('API_KEY') private apiKey: string,
    @Inject('TASKS') private tasks: any[],
    private configService: ConfigService,
  ) {}

  getHello(): string {
    const apiKey = this.configService.get('API_KEY');
    const name = this.configService.get('DATABASE_NAME');
    return `Hello World! ${apiKey} ${name}`;
  }
}
