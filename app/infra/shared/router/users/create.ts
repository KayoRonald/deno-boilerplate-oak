import { Context } from '../../../../deps.ts'

export async function createUsers(ctx: Context): Promise<void>{
  ctx.response.status = 200;
    ctx.response.body = { 
      message: "Create users exemple",
  };
}