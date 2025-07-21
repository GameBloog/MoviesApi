import { SearchMovie } from "src/entities/searchMovie";
import moviesData from "src/data/moviesData";

export class ListMoviesUseCase{
  execute(): SearchMovie[]{
    return moviesData.searchResults
  }
}