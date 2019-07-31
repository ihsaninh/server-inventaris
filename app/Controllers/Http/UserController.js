'use strict'

const User = use('App/Models/User')

class UserController {
	async login({ request, response, auth }) {
	    const { user_id, password } = request.all()
	    try {
	      if (await auth.attempt(user_id, password)) {
	        const user = await User.findBy('user_id', user_id)
	        const token = await auth.generate(user)

	        Object.assign(token)
	        return response.json(user, token)
	      }
	    } catch (e) {
	    console.log(e)
	      return response.json({ message: 'You are not registered!' })
	    }
  	}
}

module.exports = UserController
