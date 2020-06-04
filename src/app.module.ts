import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CacheInterceptor } from './cache.interceptor';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, CacheInterceptor],
})
export class AppModule {}
