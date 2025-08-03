import http from 'http';
import fs from 'fs';
import moment from 'moment';
import { error } from 'console';
const now = moment();

const server = http.createServer((req, res)=>{
  res.setHeader('Content-Type', 'text/plain');

  try{
    throw new Error('Text error')
  }catch(err){
    const timestamp = now.format('MMM-Do-dddd-YY')
    const errorLog = `${timestamp}  ${err.message}\n` 

        fs.appendFile('errors.log', errorLog, (fileErr) => {
      if (fileErr) {
        console.error('Ошибка записи в лог:', fileErr);
      }
    });

    res.statusCode = 500;
    res.end('Internal Server Error');
  }
});
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});