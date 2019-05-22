
// start up server
const express = require('express');
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

// set the view directory to ./pages
app.set("views", `./pages`)

// express setting to use ejs as render engine
app.set('view engine', 'ejs')






// routes

app.get('/', (req, res) => {
  res.send('Hello World!')
  res.render('index', { message: 'im mister meeseeks'});
})



app.get('/allwords', (req, res) => {
  // database query
  client.connect()
  client.query('SELECT * FROM words', [], (err, dbresponse) => {
    // dbresponse.rows.forEach(row => console.log(row.word))

    res.send(dbresponse.rows);

    client.end()
  })
  
})