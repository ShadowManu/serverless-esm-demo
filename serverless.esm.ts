export const config = {
  service: "esm",
  plugins: ["serverless-offline"],
  provider: {
    name: "aws",
  },
  functions: {
    hello: {
      handler: "./handler.handler",
      events: [
        {
          http: {
            path: "hello",
            method: "get",
          },
        },
      ],
    },
  },
};
