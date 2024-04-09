import { FormModule } from './modules/form/form.module';
import { FormController } from './modules/form/form.controller';
import { Module, RequestMethod, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersController } from './modules/users/users.controller';
import { UsersService } from './modules/users/users.service';
import { UsersModule } from './modules/users/users.module';
import { ConfigModule } from '@nestjs/config';
import { ApiTockenMiddleware } from './common/middleware/apitocken.middleware';
import configuration from './config/config';
import { FormService } from './modules/form/form.service';

/** Model  */
import { User } from './modules/users/users.model';
import { Form } from './modules/form/form.model';

@Module({
  imports: [
    FormModule,
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'test',
      models: [User, Form],
      autoLoadModels: true,
      synchronize: true,
    }),
    ConfigModule.forRoot(),
    ConfigModule.forRoot({
      load: [configuration],
    }),
    UsersModule,
  ],
  controllers: [FormController, AppController, UsersController],
  providers: [AppService, UsersService, FormService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer
      .apply(ApiTockenMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
