import { Context } from '../../../../deps.ts'

export async function deleteRouter(ctx: Context): Promise<void>{
  ctx.response.status = 200;
    ctx.response.body = { 
      message: "Delete user by id",
  };
}