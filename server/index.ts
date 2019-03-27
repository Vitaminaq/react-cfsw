import express, { Request, Response } from "express";
import next from "next";
import routes from "../src/router/routes";
const address = require("ip").address();
const conf = require("../next.config");
// import { createStore } from "redux";
import { Provider } from "react-redux";
import store from "../src/store/index";
import { renderToString } from "react-dom/server";
import App from "../src/pages/_app";

const dev = process.env.NODE_ENV !== "production";
const port: string = process.env.PORT || "3000";

// dir根目录下打包文件的位置
const app = next({
  dev,
  dir: "./src",
  conf
});
const handle = app.getRequestHandler();
const handler = routes.getRequestHandler(app);

app.prepare().then(() => {
  const server = express();
  server.use(handler);
  server.get("*", (req: Request, res: Response) => {
    return handle(req, res);
  });
  const html = renderToString(
    `<Provider store={store}>
    <App />
  </Provider>`
  );
  server.listen(port, (err: any) => {
    if (err) throw err;
    console.log("App running at:");
    console.log(`  -network http://localhost:${port}`);
    console.log(`  -Local   http://${address}:${port}`);
  });
});
