const express = require('express')
const app = express()
const port = process.env.PORT || 5000

const category = require('./api/category.json')


app.get('/', (req, res) => {
    res.send('server is start')
})

app.get('/category', (req, res) => {
    res.send(category)
})


app.listen(port, () => {
    console.log('server is running on', port)
})