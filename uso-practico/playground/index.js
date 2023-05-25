const express = require('express')
const parser = require('body-parser')
const services = require('./services')
const handlify = require('./handlers')
const app = express()
const port = 3000

const usersHandler = handlify('users')
const postsHandler = handlify('posts')
//parse app / x.form.url.encoded
app.use(parser.urlencoded({ extended: false }))

// parse app / application/json form
app.use(parser.json())

//Patrón concurrency
app.get('/', usersHandler(services).get)
app.post('/', usersHandler(services).post)
app.put('/:id', usersHandler(services).put)
app.delete('/:id', usersHandler(services).delete)

app.get('/posts', postsHandler(services).get)
app.post('/posts', postsHandler(services).post)
app.put('/posts/:id', postsHandler(services).put)
app.delete('/posts/:id', postsHandler(services).delete)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))