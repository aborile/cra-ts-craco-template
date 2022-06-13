const CracoAlias = require("craco-alias");
const path = require("path");
const webpack = require("webpack");

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: "tsconfig",
        baseUrl: "./src",
        tsConfigPath: "./tsconfig.json",
      },
    },
  ],
  webpack: {
    alias: {
      "@": path.resolve("src"),
    },
    plugins: [
      new webpack.ProvidePlugin({
        process: "process/browser",
        // Work around for Buffer is undefined:
        // https://github.com/webpack/changelog-v5/issues/10
        Buffer: ["buffer", "Buffer"],
      }),
    ].filter(Boolean),
    configure: {
      resolve: {
        fallback: {
          fs: false,
          path: require.resolve("path-browserify"),
        },
      },
      ignoreWarnings: [/Failed to parse source map/],
    },
  },
  jest: {
    configure: {
      moduleNameMapper: {
        "^@/(.*)$": "<rootDir>/src/$1",
      },
    },
  },
};
