import { Context } from '../../../../deps.ts'

export async function getAll(ctx: Context): Promise<void>{
  ctx.response.status = 200;
    ctx.response.body = { 
      message: "List all users",
  };
}