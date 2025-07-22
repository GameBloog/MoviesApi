import { SearchMovie } from "src/entities/searchMovie"
import moviesData from "src/data/moviesData"

export class ListMoviesUseCase {
  execute(query?: string): SearchMovie[] {
    const results = moviesData.searchResults

    if (!query) return results

    const lowerQuery = query.toLowerCase()

    return results.filter((movie) =>
      movie.Title.toLowerCase().includes(lowerQuery)
    )
  }
}
