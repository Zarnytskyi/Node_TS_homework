const fs = require('fs');

function logMessage (message){
    const logEntry = message + '\n';

    fs.appendFile('log.txt', logEntry, (err)=>{
        if (err) {
      console.error('Ошибка при записи в лог:', err);
    } else {
      console.log('Лог записан.');
    }
    })
}
module.exports={
    logMessage
}