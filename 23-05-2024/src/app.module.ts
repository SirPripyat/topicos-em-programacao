import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { AuthModule } from "./auth/auth.module";
import { UsersModule } from "./users/users.module";
import { LoggerMiddleware } from "./commons/middleware/logger.middleware";
import { APP_INTERCEPTOR } from "@nestjs/core";
import { LoggingInterceptor } from "./commons/interceptors/logging.interceptor";

@Module({
  imports: [
    MongooseModule.forRoot("mongodb://0.0.0.0/store-project"),
    AuthModule,
    UsersModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes({ path: "*", method: RequestMethod.POST });
  }
}
