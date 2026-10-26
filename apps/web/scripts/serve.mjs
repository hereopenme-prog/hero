import http from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { resolve, extname, sep, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '../out');
const port = Number(process.env.PORT || 3000);
const mime = { '.html':'text/html; charset=utf-8', '.js':'text/javascript; charset=utf-8', '.css':'text/css; charset=utf-8', '.svg':'image/svg+xml', '.png':'image/png', '.webp':'image/webp', '.ico':'image/x-icon', '.txt':'text/plain; charset=utf-8', '.json':'application/json', '.woff2':'font/woff2' };
try { await stat(resolve(root,'index.html')); } catch { console.error('Build the website first: npm run build'); process.exit(1); }
const server = http.createServer(async (req,res) => {
  if (!['GET','HEAD'].includes(req.method)) {res.writeHead(405);res.end('Method not allowed');return;}
  try {
    const pathname = decodeURIComponent(new URL(req.url,'http://localhost').pathname);
    let target = resolve(root, '.' + pathname);
    if (target !== root && !target.startsWith(root + sep)) {res.writeHead(403);res.end('Forbidden');return;}
    let info = await stat(target);
    if(info.isDirectory()) target=resolve(target,'index.html');
    const body=await readFile(target);
    res.writeHead(200,{'Content-Type':mime[extname(target)]||'application/octet-stream','X-Content-Type-Options':'nosniff'});
    res.end(req.method==='HEAD'?undefined:body);
  } catch {res.writeHead(404,{'Content-Type':'text/plain'});res.end('Not found');}
});
server.listen(port,'127.0.0.1',()=>console.log(`Here Open preview: http://127.0.0.1:${port}`));
