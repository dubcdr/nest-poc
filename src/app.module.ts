import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CacheInterceptor } from './cache.interceptor';
import { CacheService } from './cache/cache.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, CacheInterceptor, CacheService],
})
export class AppModule {}
