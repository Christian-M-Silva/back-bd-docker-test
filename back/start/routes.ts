/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

router.get('/', () => {
  return 'Hello world!!!'
})

router
  .group(() => {
    router.post('', '#controllers/users_controller.store')
    router.get('', '#controllers/users_controller.index')
  })
  .prefix('api/users')
