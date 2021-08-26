const express = require('express')
const path = require('path')

const app = express()

app.get('/js', function (req, res) {
	res.sendFile(path.join(__dirname, '../index.js'))
})
app.get('/cs', function (req, res) {
	res.sendFile(path.join(__dirname, '../styles.css'))
})
app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname, '../index.html'))
})

const port = process.env.PORT || 4005

app.listen(port, () => {
	console.log(`Listening on port ${port}`)
})