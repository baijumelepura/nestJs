/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Form } from './form.model';

@Injectable()
export class FormService {
  constructor(@InjectModel(Form) private formModel: typeof Form) {}

  async findAll(): Promise<Form[]> {
    return this.formModel.findAll();
  }

  async create(userData: any): Promise<Form> {
    const user = await this.formModel.create(userData);
    return user;
  }
  async findOne(title: string): Promise<Form> {
    return this.formModel.findOne({
      where: {
        title,
      },
    });
  }
}
