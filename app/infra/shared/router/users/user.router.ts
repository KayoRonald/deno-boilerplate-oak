import { Router } from '../../../../deps.ts'
import { getAll } from './get.router.ts'
import { createUsers } from './create.ts'
import { putRouter } from './put.router.ts'
import { deleteRouter } from './delete.router.ts'


const router = new Router();

router
  .get('/', getAll)
  .post('/', createUsers)
  .put('/', putRouter)
  .delete('/', deleteRouter)

export default router;