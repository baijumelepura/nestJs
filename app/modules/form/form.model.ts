import { Column, Table, Model } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';

@Table
export class Form extends Model {
  @Column
  @ApiProperty()
  uuid: string;
  @Column
  @ApiProperty()
  title: string;
  @Column
  @ApiProperty()
  name: string;
  @Column
  @ApiProperty()
  email: string;
  @Column
  @ApiProperty()
  phonenumber: number;
}
