const express = require('express')
const path = require('path')

const app = express()

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../index.html'))
})

app.get('/index.css', function (req,res) {
  res.sendFile(path.join(__dirname, "../index.css"))
})

app.get('/js', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.js'))
})

const port = process.env.PORT || 4000

app.listen(port, () => (console.log(`Running on port ${port}`)))