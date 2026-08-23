// Local preview server: / -> ricksite build, /agenko/ -> original template (for comparison).
const http = require('http'), fs = require('fs'), path = require('path');
const RICK = path.join(__dirname, 'ricksite');
const AGENKO = path.join(__dirname, 'agenko-creative-digital-agency-html-template-2025-07-17-08-47-52-utc/Agenko_Main_File/Agenko_v1.0.0');
const PORT = 5173;
const TYPES = {'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.svg':'image/svg+xml','.png':'image/png','.jpg':'image/jpeg','.woff':'font/woff','.woff2':'font/woff2','.ttf':'font/ttf','.eot':'application/vnd.ms-fontobject'};

http.createServer((req,res)=>{
  let p = decodeURIComponent(req.url.split('?')[0]);
  let root = RICK;
  if (p.startsWith('/agenko/')) { root = AGENKO; p = p.slice(7); }
  if (p === '/' || p === '') p = '/index.html';
  const file = path.join(root, p);
  if (!file.startsWith(root)) { res.writeHead(403).end(); return; }
  fs.readFile(file,(err,data)=>{
    if (err) { console.log('404', req.url); res.writeHead(404).end('Not found: '+p); return; }
    res.writeHead(200,{'Content-Type':TYPES[path.extname(file).toLowerCase()]||'application/octet-stream'});
    res.end(data);
  });
}).listen(PORT,()=>console.log('serving on http://localhost:'+PORT+'  (original at /agenko/index-2.html)'));
