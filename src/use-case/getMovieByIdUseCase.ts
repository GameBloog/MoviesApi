import { MovieDetail } from "src/entities/movie"
import { MovieRepository } from "src/repositories/movieRepository"

export class GetMovieByIdUseCase {
  constructor(private movieRepository: MovieRepository) {}

  execute(imdbID: string): MovieDetail | undefined {
    return this.movieRepository.findMovieById(imdbID)
  }
}
