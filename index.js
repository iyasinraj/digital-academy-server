const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000

const category = require('./api/category.json')
const courses = require('./api/courses.json')
const blog = require('./api/blog.json')

app.use(cors())

app.get('/', (req, res) => {
    res.send('server is start')
})

app.get('/category', (req, res) => {
    res.send(category)
})

app.get('/courses', (req, res) => {
    res.send(courses)
})

app.get('/blog', (req, res) => {
    res.send(blog)
})


app.listen(port, () => {
    console.log('server is running on', port)
})