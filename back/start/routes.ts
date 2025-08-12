/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
const UsersController = () => import('#controllers/users_controller')

router
  .group(() => {
    router.post('', [UsersController, 'store'])
    router.get('', [UsersController, 'index'])
  })
  .prefix('api/users')
