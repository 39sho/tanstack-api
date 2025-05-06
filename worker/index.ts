import { Hono } from "hono";

const app = new Hono();

const route = app.get("/api/name", async (c) => {
  await new Promise<void>(resolve=> setTimeout(resolve, 1000));
    return c.json({name: "Cloudflare"});
});

export type AppType = typeof route;
export default app;