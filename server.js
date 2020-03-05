const express = require('express') 
const routes = require('./routes')
const db = require('./db')
const bodyParser = require('body-parser')
var morgan = require('morgan')

const PORT = process.env.PORT || 3000 
const app = express() 

app.use(morgan('dev'))
app.use(bodyParser.json()) 
app.use('/', routes)

// don't put routes here, routes only in the app.use('/api', routes)

// just app.use stuff 
 

app.listen(PORT, () => console.log('listinig on port: ', PORT))