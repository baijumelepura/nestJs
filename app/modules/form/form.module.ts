/*
https://docs.nestjs.com/modules
*/
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Form } from './form.model';
import { FormController } from './form.controller';
import { FormService } from './form.service';

@Module({
  imports: [SequelizeModule.forFeature([Form])],
  providers: [FormService],
  controllers: [FormController],
  exports: [SequelizeModule],
})
export class FormModule {}
