import { Hono } from 'hono'
import { default as index } from "./pages/index.marko"

const app = new Hono();

app.get('/', (c) => {
  return new Response(
    index.stream(c.req), {
      status: 200,
      headers: { "content-type": "text/html;charset=UTF-8" },
    }
  )
});

export default app;