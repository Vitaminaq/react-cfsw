const withTypescript = require("@zeit/next-typescript");
const path = require("path");

module.exports = withTypescript({
  // 禁用文件路由
  useFileSystemPublicRoutes: false,
  pageExtensions: ["jsx", "js", "ts", "tsx"],
  // 相对于page目录生成打包文件
  distDir: "../dist/src/.next",
  webpack(config, options) {
    config.resolve = {
      extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
      alias: {
        "@src": path.resolve(__dirname, "./src")
      }
    };
    return config;
  },
  serverRuntimeConfig: {
    mySecret: "secret",
    secondSecret: process.env.SECOND_SECRET
  },
  publicRuntimeConfig: {
    staticFolder: "/static"
  }
});
