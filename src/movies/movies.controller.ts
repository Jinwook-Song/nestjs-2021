import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getAllMovies(): string {
    return 'This will return all movies';
  }

  @Get('/:id')
  getOneMovie(@Param('id') movieId: string): string {
    return `This will return '${movieId}' movie `;
  }

  @Post()
  createMovie(): string {
    return 'This will create a movie';
  }

  @Delete('/:id')
  deleteMovie(@Param('id') movieId: string): string {
    return `This will delete '${movieId}' movie`;
  }

  @Patch('/:id')
  editMovie(@Param('id') movieId: string): string {
    return `This will update '${movieId}' movie`;
  }
}
