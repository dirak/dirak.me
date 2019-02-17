const https = require('https')
const express = require('express')
const fs = require('fs')
const helmet = require('helmet')

require('dotenv').config()

const options = {
	key: fs.readFileSync(process.env.KEYPATH),
	cert: fs.readFileSync(process.env.CERTPATH)
}

const app = express()

app.use(helmet())
app.use(express.static(process.env.MODULEPATH))
app.get('/', (req, res) => {
	console.log(req.hostname)
})
app.listen(process.env.APPPORT)

https.createServer(options, app).listen(process.env.PORT)