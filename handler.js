// I'm writing this in ESM JS instead of ESM TS but plugins like
// serverless-webpack and serverless-esbuild help with this
export async function handler() {
  const message = "Hello, world!";

  console.log(message);

  return { statusCode: 200, body: JSON.stringify({ message }) };
}
