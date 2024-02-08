import { hello } from "./src/functions";

const functions = {
  ...hello,
};

export default {
  service: "esm",
  plugins: [
    "serverless-better-credentials",
    "serverless-esbuild",
    "serverless-offline",
  ],
  provider: {
    name: "aws",
    region: "eu-central-1",
    runtime: "nodejs20.x",
  },
  custom: {
    esbuild: {
      packager: "npm",
      bundle: true,
      minify: false,
      concurrency: 10,
      platform: "neutral",
      target: "node20",
    },
  },
  functions,
};
