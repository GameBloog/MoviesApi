import { MovieDetail } from "src/entities/movie"
import moviesData from "../data/moviesData"
import { SearchMovie } from "src/entities/movie"

export interface MovieRepository {
  findMovieById(imdbID: string): MovieDetail | undefined
  searchMovies(search?: string): SearchMovie[]
}

export class LocalMovieRepository implements MovieRepository {
  findMovieById(imdbID: string): MovieDetail | undefined {
    return moviesData.movieDetails.find((movie) => movie.imdbID === imdbID)
  }

  searchMovies(search?: string): SearchMovie[] {
    const results = moviesData.searchResults

    if (!search) return results

    const lowerSearch = search.toLowerCase()

    return results.filter((movie) =>
      movie.Title.toLowerCase().includes(lowerSearch)
    )
  }
}
