// Preview server for the Astro build output (dist/), on a separate port so it
// can be compared side by side with the original static build on 5173.
const http=require('http'),fs=require('fs'),path=require('path');
const ROOT=path.join(__dirname,'ricksite-astro','dist');
const PORT=5174;
const TYPES={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.svg':'image/svg+xml','.png':'image/png','.jpg':'image/jpeg','.woff':'font/woff','.woff2':'font/woff2','.ttf':'font/ttf','.eot':'application/vnd.ms-fontobject'};
http.createServer((req,res)=>{
  let p=decodeURIComponent(req.url.split('?')[0]);
  if(p==='/'||p==='')p='/index.html';
  const file=path.join(ROOT,p);
  if(!file.startsWith(ROOT)){res.writeHead(403).end();return;}
  fs.readFile(file,(err,data)=>{
    if(err){console.log('404',p);res.writeHead(404).end('Not found: '+p);return;}
    res.writeHead(200,{'Content-Type':TYPES[path.extname(file).toLowerCase()]||'application/octet-stream'});
    res.end(data);
  });
}).listen(PORT,()=>console.log('astro dist on http://localhost:'+PORT));
