import { AWS } from "@serverless/typescript";
import { handlerPath } from "../../utils";

const handler: AWS["functions"] = {
  hello: {
    handler: `${handlerPath(import.meta.url)}/handler.main`,
    events: [
      {
        http: {
          path: "hello",
          method: "get",
        },
      },
    ],
  },
};

export default handler;
