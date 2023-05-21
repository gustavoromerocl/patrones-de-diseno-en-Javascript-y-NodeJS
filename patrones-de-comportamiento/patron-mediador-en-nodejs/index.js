const Emitter = require('events')

const emitter = new Emitter()

emitter.on('login', x => console.log(x))

emiiter.emit('login', { event: 'This is a login event' })