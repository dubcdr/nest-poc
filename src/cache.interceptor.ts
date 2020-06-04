import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { isNullOrUndefined } from 'util';

@Injectable()
export class CacheInterceptor implements NestInterceptor {
  private debugNumber: number;
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log(`Debug Number: ${this.debugNumber}`);
    if (isNullOrUndefined(this.debugNumber)) {
      this.debugNumber = 0;
    } else {
      this.debugNumber++;
    }
    return next.handle();
  }
}
