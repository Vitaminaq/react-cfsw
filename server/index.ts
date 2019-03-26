import express, { Request, Response, NextFunction } from "express";
import next from "next";
import routes from "../src/router/routes";
const address = require("ip").address();
const conf = require("../next.config");

const dev = process.env.NODE_ENV !== "production";
const port: string = process.env.PORT || "3000";

// dir根目录下打包文件的位置
const app = next({
  dev,
  dir: "./dist",
  conf
});
const handler = routes.getRequestHandler(app);

app.prepare().then(() => {
  const server = express();
  server.use(handler);
  server.listen(port, (err: any) => {
    if (err) throw err;
    console.log("App running at:");
    console.log(`  -network http://localhost:${port}`);
    console.log(`  -Local   http://${address}:${port}`);
  });
});
