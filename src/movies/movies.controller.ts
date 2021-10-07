import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  getAllMovies(): Movie[] {
    return this.moviesService.getAllMovies();
  }

  @Get(':id')
  getOneMovie(@Param('id') movieId: string): Movie {
    return this.moviesService.getOneMovie(movieId);
  }

  @Post()
  createMovie(@Body() movieData) {
    return this.moviesService.createMovie(movieData);
  }

  @Delete(':id')
  deleteMovie(@Param('id') movieId: string) {
    return this.moviesService.deleteMovie(movieId);
  }

  @Patch(':id')
  editMovie(@Param('id') movieId: string, @Body() updateData) {
    return this.moviesService.editMovie(movieId, updateData);
  }
}
