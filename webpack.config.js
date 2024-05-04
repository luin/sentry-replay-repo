const config = {
  entry: "./src/index.js",
  mode: "production",
  module: {
    rules: [{ test: /\.js$/i, loader: "babel-loader" }],
  },
};

export default config;
