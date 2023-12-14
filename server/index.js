  
const express = require('express')
const cors = require('cors')
const db = require('./db')
const path=require('path')
const app = express()
const port = 3000
app.use(express.json())
app.use(cors())

app.get('/api/links', db.getLinks)
app.post('/api/links', db.createLink);
app.put('/api/links/:id', db.updateLink);
app.delete('/api/links/:id', db.deleteLink);

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})