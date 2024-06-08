const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

// Proxy middleware
app.use(
  "/api",
  createProxyMiddleware({
    target: "https://api.steampowered.com",
    changeOrigin: true,
    pathRewrite: {
      "^/api": "/", // remove base path
    },
  })
);

// Start server .
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Proxy server is running on port ${PORT}`);
});
