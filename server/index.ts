import express from "express";
import next from "next";

const dev = process.env.NODE_ENV !== "production";

const app = next({
  dev,
  dir: "./src"
});
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  server
    .get("*", (req: any, res: any) => {
      console.log(req.url);
      handle(req, res);
    })
    .listen(3000, (err: any) => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${3000}`);
    });
});
