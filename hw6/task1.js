import http from 'http';

const server = http.createServer((req, res)=>{
    const { authorization } = req.headers;

    res.setHeader('Content-Type', 'text/plain');

  if (!authorization) {
    res.statusCode = 401;
    res.end('Unauthorized');
  } else {
    res.statusCode = 200;
    res.end('Authorization header received');
  }
});
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});