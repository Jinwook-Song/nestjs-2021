import { Module } from '@nestjs/common';
import { MoviesController } from './movies/movies.controller';
import { MoviesService } from './movies/movies.service';

@Module({
  imports: [],
  controllers: [MoviesController], // take URl, and execute fn
  providers: [MoviesService],
})
// Everything must be in AppModule
export class AppModule {}
