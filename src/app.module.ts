import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController], // take URl, and execute fn
  providers: [AppService],
})
// Everything must be in AppModule
export class AppModule {}
