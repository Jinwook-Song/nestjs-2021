import { Injectable, NotFoundException } from '@nestjs/common';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
  private movies: Movie[] = [];

  getAllMovies(): Movie[] {
    return this.movies;
  }

  getOneMovie(id: string): Movie {
    const movie = this.movies.find((movie) => movie.id === +id);
    if (!movie) {
      throw new NotFoundException(`Movie with ID ${id} not found.`);
    }
    return movie;
  }

  createMovie(movieData) {
    this.movies.push({
      id: this.movies.length + 1,
      ...movieData,
    });
  }

  deleteMovie(id: string) {
    this.getOneMovie(id);
    this.movies = this.movies.filter((movie) => movie.id !== +id);
  }

  editMovie(id: string, updateData) {
    const movie = this.getOneMovie(id);
    this.deleteMovie(id);
    this.movies.push({ ...movie, ...updateData });
  }
}
