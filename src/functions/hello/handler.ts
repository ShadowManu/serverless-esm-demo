import { APIGatewayProxyHandler } from "aws-lambda";

const handler: APIGatewayProxyHandler = async () => {
  const message = "Hello, world!";

  console.log(message);

  return { statusCode: 200, body: JSON.stringify({ message }) };
};

export const main = handler;