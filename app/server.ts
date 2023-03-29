import { Application, oakCors, Context } from './deps.ts'
import router from "./infra/shared/router.ts";
import activityMiddleware from "./infra/middleware/activityMiddleware.ts";
import notfoundMiddleware from "./infra/middleware/notfoundMiddleware.ts";
import config from "./config/env.ts";
// import logger  from "./config/logger.ts";

const app = new Application();
// Logger
app.use(async (ctx: Context, next: Function) => {
  await next();
  const rt = ctx.response.headers.get("X-Response-Time");
  console.log(`${ctx.request.method} ${ctx.request.url} - ${rt}`);
});

app.use(oakCors());
app.use(activityMiddleware);
app.use(notfoundMiddleware);
app.use(router.routes());
app.use(router.allowedMethods());

app.addEventListener('listen', ({ port, secure }) => {
  console.log(`Server started on ${secure ? 'https://' : 'http://'}localhost:${port}`);
});

const port = config.port;
app.listen({ port });