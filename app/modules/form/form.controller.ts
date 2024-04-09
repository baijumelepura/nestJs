/*
https://docs.nestjs.com/controllers#controllers
*/

import { FormService } from './form.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Form } from './form.model';
import { ApiTags, ApiParam } from '@nestjs/swagger';
@ApiTags('form')
@Controller('form')
export class FormController {
  constructor(private formService: FormService) {}
  /** get All */
  @Get()
  findAll(): Promise<Form[]> {
    return this.formService.findAll();
  }
  /** Create */
  @Post()
  create(@Body() form: Form): Promise<Form> {
    return this.formService.create(form);
  }

  /** get single data */
  @Get(':title')
  @ApiParam({ name: 'title' })
  findOne(@Param() params): Promise<Form> {
    return this.formService.findOne(params.title);
  }

  /** Create */
  @Post('fill_data:title')
  @ApiParam({ name: 'title' })
  fillData(@Param() params: any, @Body() form: Form): Promise<Form> {
    return this.formService.findOne(params.title);
    return this.formService.create(form);
  }
}
