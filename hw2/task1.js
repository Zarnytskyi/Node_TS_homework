const fs = require('fs');

fs.mkdir('hwFolder', (err)=>{
    if(err){
        return console.error('Ошибка при создании каталога:', err);
    }
    console.log('Каталог "hwFolder" успешно создан.');
    fs.rmdir('hwFolder', (err)=>{
    if(err){
        return console.error('Ошибка при удалении каталога:', err);
    }
    console.log('Каталог "hwFolder" успешно удален.');
});
});