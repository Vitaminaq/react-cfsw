const withTypescript = require("@zeit/next-typescript");
const path = require("path");

module.exports = withTypescript({
  // 禁用文件路由
  useFileSystemPublicRoutes: false,
  pageExtensions: ["jsx", "js", "ts", "tsx"],
  // distDir: "",
  assetPrefix: "",
  // 这个版本的next有bug，不能使用webpack别名只能用babel去设置
  // 详情请见: https://github.com/zeit/next.js/issues/6399
  // webpack(config, options) {
  //   config.resolve = {
  //     extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
  //     alias: {
  //       "@src": path.resolve(__dirname, "./src")
  //     }
  //   };
  //   return config;
  // },
  serverRuntimeConfig: {
    mySecret: "secret",
    secondSecret: process.env.SECOND_SECRET
  },
  publicRuntimeConfig: {
    staticFolder: "/static"
  }
});
