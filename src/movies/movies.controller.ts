import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
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
  getOneMovie(@Param('id') movieId: number): Movie {
    return this.moviesService.getOneMovie(movieId);
  }

  @Post()
  createMovie(@Body() movieData: CreateMovieDto) {
    return this.moviesService.createMovie(movieData);
  }

  @Delete(':id')
  deleteMovie(@Param('id') movieId: number) {
    return this.moviesService.deleteMovie(movieId);
  }

  @Patch(':id')
  editMovie(@Param('id') movieId: number, @Body() updateData: UpdateMovieDto) {
    return this.moviesService.editMovie(movieId, updateData);
  }
}
