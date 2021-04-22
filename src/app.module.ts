import { Module } from '@nestjs/common';
import { MoviesController } from './movies/movies.controller';

@Module({
  imports: [],
  controllers: [MoviesController], // take URl, and execute fn
  providers: [],
})
// Everything must be in AppModule
export class AppModule {}
