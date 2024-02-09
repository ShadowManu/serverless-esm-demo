import { fileURLToPath } from 'url'
import path from 'path'

const handlerPath = (context: string) => {
  const dirname = path.dirname(fileURLToPath(context));
  const handlerPath = `${dirname.split(process.cwd())[1].substring(1).replace(/\\/g, '/')}`;
  return handlerPath;
};

export { handlerPath }