import { Controller, Get, UseInterceptors } from '@nestjs/common';

import { AppService } from './app.service';
import { CacheInterceptor } from './cache.interceptor';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly cacheInterceptor: CacheInterceptor) {}

  @Get()
  @UseInterceptors(CacheInterceptor)
  getHello(): string {
    const response = this.appService.getHello();
    console.log(`Debug number from getDebug method ${this.cacheInterceptor.getDebugNumber()}`);
    return response;
  }
}
