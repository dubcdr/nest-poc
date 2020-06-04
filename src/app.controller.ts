import { Controller, Get, UseInterceptors } from '@nestjs/common';

import { AppService } from './app.service';
import { CacheInterceptor } from './cache.interceptor';
import { CacheService } from './cache/cache.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly cacheService: CacheService,
  ) {}

  @Get()
  @UseInterceptors(CacheInterceptor)
  getHello(): string {
    const response = this.appService.getHello();
    return response;
  }

  @Get('add')
  @UseInterceptors(CacheInterceptor)
  add(): string {
    this.cacheService.add();
    return `${this.cacheService.debugNumber}`;
  }
}
