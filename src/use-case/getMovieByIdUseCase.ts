import { MovieDetail } from "src/entities/movieDetail"
import moviesData from "../data/moviesData"

export class GetMovieByIdUseCase {
  execute(imdbID: string): MovieDetail | undefined {
    return moviesData.movieDetails.find((movie) => movie.imdbID === imdbID)
  }
}
