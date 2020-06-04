import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { isNullOrUndefined } from 'util';

@Injectable()
export class CacheInterceptor implements NestInterceptor {
  private debugNumber: number;

  getDebugNumber(): number {
    return this.debugNumber;
  }

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log(`Debug Number before: ${this.debugNumber}`);
    if (isNullOrUndefined(this.debugNumber)) {
      this.debugNumber = 0;
    } else {
      this.debugNumber++;
    }
    console.log(`Debug Number after: ${this.debugNumber}`);
    return next.handle();
  }
}
