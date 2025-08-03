import http from 'http';

const server = http.createServer((req, res) => {
  const { method } = req;

  res.setHeader('Content-Type', 'text/plain; charset=utf8');

  if (method === 'PUT') {
    res.statusCode = 200;
    res.end('PUT-запрос обработан');
  } else if (method === 'DELETE') {
    res.statusCode = 200;
    res.end('DELETE-запрос обработан');
  } else {
    res.statusCode = 405;
    res.end(`Метод ${method} не поддерживается`);
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Сервер PUT/DELETE запущен на http://localhost:${PORT}`);
});