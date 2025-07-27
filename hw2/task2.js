const fs = require('fs');

fs.writeFile('info.txt', 'I love Node.js' , (err)=>{
    if (err) return console.error('Ошибка при записи файла:', err);
  console.log('Файл успешно записан.');
  fs.readFile('info.txt', 'utf8', (err, data)=>{
    if (err) return console.error('Ошибка при чтении файла:', err);
  console.log('Содержимое файла:', data);
  });
});