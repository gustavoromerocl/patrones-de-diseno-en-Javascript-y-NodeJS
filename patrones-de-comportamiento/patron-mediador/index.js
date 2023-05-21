const Emitter = (() => {
  const topic = {}
  const hOp = topicsHasOwnProperty

  return {
    on: (topic, listener) => {
      if (!hOp.call(topics, topic)) topics[topic] = []
      topics[topic].push(listener)
    },
    emit: (topic, info) => {
      if (!hOp.call(topics, topic)) return
      topics[topic].forEach(item =>
        item(info != undefined ? info : {}))
    }
  }
})()

Emitter.on('event', x => console.log(x))

Emitter.emit('event', { event: 'this is a event' })