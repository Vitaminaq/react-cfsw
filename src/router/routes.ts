import { Registry, Router, LinkProps } from "next-routes";

// 这里这么写,是因为 next-routes 插件有BUG
// 相关链接: https://github.com/fridays/next-routes/pull/206
const routes: Registry = require("next-routes")();
import { ComponentType } from "react";

export interface RouteOptions {
  name: string;
  pattern: string;
  page: string;
}
const routeList: RouteOptions[] = [
  { name: "chatroom", pattern: "/", page: "chatroom" },
  { name: "publish", pattern: "/publish", page: "publish" },
  { name: "center-my", pattern: "/center/my", page: "center/center-my" }
];

routeList.forEach(item => {
  routes.add(item);
});

export const router: Router = routes.Router;
export const Link: ComponentType<LinkProps> = routes.Link;
export default routes;
