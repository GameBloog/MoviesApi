import { FastifyReply, FastifyRequest } from "fastify"
import { ListMoviesUseCase } from "src/use-case/listMoviesUseCase"
import { GetMovieByIdUseCase } from "src/use-case/getMovieByIdUseCase"

export class MovieController {
  listMovies(request: FastifyRequest, reply: FastifyReply) {
    const { q } = request.query as { q?: string }

    const listMoviesUseCase = new ListMoviesUseCase()
    const movies = listMoviesUseCase.execute(q)
    reply.send(movies)
  }

  getMovieById(request: FastifyRequest, reply: FastifyReply) {
    const { id } = request.params as { id: string }
    const getMovieByIdUseCase = new GetMovieByIdUseCase()
    const movie = getMovieByIdUseCase.execute(id)

    if (!movie) {
      return reply.status(404).send({ message: "Movie not found" })
    }
    reply.send(movie)
  }
}
