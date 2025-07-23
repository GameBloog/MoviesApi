import { FastifyReply, FastifyRequest } from "fastify"
import { ListMoviesUseCase } from "src/use-case/listMoviesUseCase"
import { LocalMovieRepository } from "src/repositories/movieRepository"

export class ListMoviesController {
  listMovies(request: FastifyRequest, reply: FastifyReply) {
    const { search } = request.query as { search?: string }

    const movieRepository = new LocalMovieRepository()
    const listMoviesUseCase = new ListMoviesUseCase(movieRepository)
    const movies = listMoviesUseCase.execute(search)

    reply.send(movies)
  }
}
