import { Hono } from "hono";

const app = new Hono();

app.use("/api/*", async (c) => {
    return c.json({name: "Cloudflare"});
});

export default app;