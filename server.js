const express = require ('express');
const app = express();
const port = 8080;


app.listen(port, () => {
  console.log(`listening on port: ${port}`)
})


// pg for interfacing to database
const { Client } = require('pg')
const client = new Client({
  database: 'project3'
})

client.connect()

client.query('SELECT * FROM words', [], (err, res) => {
  res.rows.forEach(row => console.log(row.word))
  client.end()
})


