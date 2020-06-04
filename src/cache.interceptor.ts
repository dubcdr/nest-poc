import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';

import { CacheService } from './cache/cache.service';

@Injectable()
export class CacheInterceptor implements NestInterceptor {
  constructor(private readonly cache: CacheService) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log(`Debug Number before: ${this.cache.debugNumber}`);
    return next.handle();
  }
}
