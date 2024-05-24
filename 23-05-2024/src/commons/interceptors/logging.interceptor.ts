import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from "@nestjs/common";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { LogsService } from "../../logs/logs.service";
import { LogsDto } from "../../logs/dtos/logs.dto";

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  constructor(private readonly logsService: LogsService) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const req = context.switchToHttp().getRequest();
    const method = req.method;
    const url = req.url;

    return next.handle().pipe(
      tap((response) => {
        const res = context.switchToHttp().getResponse();

        const log: LogsDto = {
          statusCode: res.statusCode,
          method: method,
          route: url,
        };

        this.logsService.create(log);
      }),
    );
  }
}
