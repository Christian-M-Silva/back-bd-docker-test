import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'

export default class UsersController {
  async index({ response }: HttpContext) {
    const users = await User.all()
    return response.status(200).send(users)
  }

  async store({ request, response }: HttpContext) {
    const { name } = request.all()
    const user = await User.create({
      name,
    })
    response.status(201).send(user)
  }
}
