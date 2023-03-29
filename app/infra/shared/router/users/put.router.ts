import { Context } from '../../../../deps.ts'

export async function putRouter(ctx: Context): Promise<void>{
  ctx.response.status = 200;
    ctx.response.body = { 
      message: "Edit user exemple",
  };
}