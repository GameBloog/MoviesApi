import { SearchMovie } from "src/entities/movie"
import { MovieRepository } from "src/repositories/movieRepository"

export class ListMoviesUseCase {
  constructor(private movieRepository: MovieRepository) {}

  execute(search?: string): SearchMovie[] {
    return this.movieRepository.searchMovies(search)
  }
}
