/*
https://docs.nestjs.com/middleware#middleware
*/

import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class ApiTockenMiddleware implements NestMiddleware {
  constructor() {}
  use(req: Request, res: Response, next: (error?: any) => void) {
    next();
  }
}
