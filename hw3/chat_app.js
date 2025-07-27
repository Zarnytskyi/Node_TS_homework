const EventEmitter = require('events');

const emitter = new EventEmitter();

emitter.on('message', (username, message)=>{
    console.log(`${message}:${username}`)
});

function sendMessage(username, message) {
  emitter.emit('message', username, message);
};

sendMessage('Alice', 'Привет всем!');
sendMessage('Bob', 'Как дела?');
sendMessage('Charlie', 'Node.js — крутая штука!');