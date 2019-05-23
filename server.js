
// start up server with npm start
// read more: https://expressjs.com/
const express = require('express');
const app = express();
const port = 8080;
app.listen(port, () => {
  console.log(`listening on port: ${port}`)
})

// pg for interfacing to database
// read more: https://node-postgres.com/
const { Client } = require('pg')
const client = new Client({
  database: 'project3',
  user: 'bam',
  password: '12345'
})

client.connect()

// set the view directory to ./views
app.set("views", `./views`)

// express setting to use ejs as render engine
// read more: https://ejs.co/
app.set('view engine', 'ejs')

// middleware function to serve static files from public
// read more: https://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));






// ------- Routes -------
app.get('/', (req, res) => {
  res.render('index', {
    greeting: 'im mister',
    name: 'meeseeks'
  });
})


app.get('/glossary', (req, res) => {
  // client.connect()
  client.query('SELECT * FROM words', [], (err, dbresponse) => {
    // client.end()
    res.render('glossary', {
      words: dbresponse.rows
    })
  })
})


app.get('/game', (req, res) => {
  client.query('SELECT * FROM words', [], (err, dbresponse) => {
    res.render('game', {
      words: dbresponse.rows
    })
  })
})


app.get('/results', (req, res) => {
  res.render('results', {
    
  });
})

// https://node-postgres.com/


app.get('/allwords', (req, res) => {
  // database query
  // read more: https://expressjs.com/en/guide/database-integration.html
  client.connect()
  client.query('SELECT * FROM words', [], (err, dbresponse) => {
    // log dbresponse to server
    // dbresponse.rows.forEach(row => { console.log(row.word) })
    client.end()
    res.render('allwords', {
      words: dbresponse.rows
    })
  })
})