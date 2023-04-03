import { Router } from '../../../../deps.ts'
import { getAll } from './get.router.ts'
import { createUsers } from './create.ts'
import { putRouter } from './put.router.ts'
import { deleteRouter } from './delete.router.ts'
import { createSchema, getIdSchema } from '../../../zod/user.schema.ts'
import validate from '../../../middleware/validate.ts'

const router = new Router();

router
  .get<string>('/', getAll)
  .post<string>('/', validate(createSchema), createUsers)
  .put<string>('/:id', validate(getIdSchema), putRouter)
  .delete<string>('/:id', deleteRouter)

export default router;