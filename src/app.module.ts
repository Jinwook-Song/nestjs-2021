import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';
import { AppController } from './app.controller';

@Module({
  imports: [MoviesModule],
  controllers: [AppController], // take URl, and execute fn
  providers: [],
})
// Everything must be in AppModule
export class AppModule {}
