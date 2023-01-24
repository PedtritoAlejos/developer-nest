/* eslint-disable prettier/prettier */
import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class ScoreInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const rq = context.switchToHttp().getRequest();

    if (rq.params.hasOwnProperty('score')) {
        const min = 0 ;
        const max = 5500;
        const clamp = (num, min, max) => Math.min(Math.max(num, min), max)

        rq.params.score = clamp(rq.params.score,min,max);
    }
   
    return next.handle();
  }
}
