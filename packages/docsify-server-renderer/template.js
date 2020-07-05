import fs from 'fs';
import path from 'path';

const tmplPath = path.resolve(__dirname, 'template.html');

export function getServerHTMLTemplate() {
  return fs.readFileSync(tmplPath).toString();
}
