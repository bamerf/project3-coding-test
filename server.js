const _ = require('lodash')

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
  database: 'project3'
})

// Database Parameters.
// Data Table names, etc.
const dt_words = "words"
const dt_tags = "tags"
const dt_leaderboard = "leaderboard"

const getRandomWords = (words, num) => _.sampleSize(words, num) 


// Connect to client
function connect() {
  // check client is not connected
  if(!client.connection.stream.connecting){
      client.connect()
  }
  console.log(`Connection Status: ${client.connection.stream.connecting}`)
}

// theres a bug in the connect function - ask dave and dt
// connect();

function getWords() {
  connect()
  client.query(`SELECT * FROM ${dt_words}`)
  .then(res => {
      return ((res.rows))
  })
  .catch(e => console.log(e))
}

// set the view directory to ./views
app.set("views", `./views`)

// express setting to use ejs as render engine
// read more: https://ejs.co/
app.set('view engine', 'ejs')

// middleware function to serve static files from public
// read more: https://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// body parsing
// read more: https://github.com/expressjs/body-parser#readme
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));




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
    res.render('glossary', {
      words: dbresponse.rows
    })
  })
})


app.get('/api/words', (req, res) => {
  connect()
  client.query(`SELECT * FROM ${dt_words}`)
    .then(db_res => {
        res.send(getRandomWords(db_res.rows, 10))
    })
    .catch(e => console.log(e))
})


app.get('/game', (req, res) => {
  res.render('game', {
    name: userName
  });
})


app.post('/game', (req, res) => {
  userName = req.body.name
  res.render('game', {
    name: userName
  });
})

app.get('/results', (req, res) => {
  res.render('results', {
  });
})

app.get('/main', (req, res) => {
  res.render('main', {
  });
})