import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getAllMovies(): string {
    return 'This will return all movies';
  }

  @Get('search')
  searchMovie(@Query('title') title) {
    return `We are searching for a movie with a title: ${title}`;
  }

  @Get(':id')
  getOneMovie(@Param('id') movieId: string): string {
    return `This will return '${movieId}' movie `;
  }

  @Post()
  createMovie(@Body() movieData: string): string {
    return movieData;
  }

  @Delete(':id')
  deleteMovie(@Param('id') movieId: string): string {
    return `This will delete '${movieId}' movie`;
  }

  @Patch(':id')
  editMovie(@Param('id') movieId: string, @Body() updateData) {
    return {
      updatedMovie: movieId,
      ...updateData,
    };
  }
}
