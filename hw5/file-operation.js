import dotenv from 'dotenv';
dotenv.config();
import fs from 'fs';

const FILENAME = process.env.FILENAME;

fs.writeFile(FILENAME, 'I love Node.js' , (err)=>{
    if (err) return console.error('Ошибка при записи файла:', err);
  console.log('Файл успешно записан.');
  fs.readFile(FILENAME, 'utf8', (err, data)=>{
    if (err) return console.error('Ошибка при чтении файла:', err);
  console.log('Содержимое файла:', data);
  });
});