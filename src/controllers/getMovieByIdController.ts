import { FastifyReply, FastifyRequest } from "fastify"
import { GetMovieByIdUseCase } from "src/use-case/getMovieByIdUseCase"
import { LocalMovieRepository } from "src/repositories/movieRepository"

export class GetMovieByIdController {
  getMovieById(request: FastifyRequest, reply: FastifyReply) {
    const { id } = request.params as { id: string }

    const movieRepository = new LocalMovieRepository()
    const getMovieByIdUseCase = new GetMovieByIdUseCase(movieRepository)
    const movie = getMovieByIdUseCase.execute(id)

    if (!movie) {
      return reply.status(404).send({ message: "Movie not found" })
    }

    reply.send(movie)
  }
}
