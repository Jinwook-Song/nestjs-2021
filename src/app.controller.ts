import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get() // express: get Router
  getHello(): string {
    return this.appService.getHello();
  }

  // sayHell() & getHi doesn't have to be same but encourage same name
  @Get('/hello')
  sayHello(): string {
    return this.appService.getHi();
  }
}
