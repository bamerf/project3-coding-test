
// start up server with npm start
// read more: https://expressjs.com/
const express = require('express');
const app = express();
const port = 8080;

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

function connect(){
    if(!client.connection.stream.connecting){
        client.connect()
    }
    console.log(`Connection Status:  ${client.connection.stream.connecting}`)
}

function disconnect(){
    client.end()
    console.log(`Connection Status:  ${client.connection.stream.connecting}`)
}


// Get all words
function getWords(){
    connect()
    client.query(`SELECT * FROM ${dt_words}`)
    .then(res => {
        return ((res.rows))
    })
    .catch(e => console.log(e))
}

// Get all words
function getWord(word){
    connect()
    client.query(`SELECT * FROM ${dt_words} WHERE word = '${word}'`)
    .then(res => {
        return(res.rows[0])
    })
    .catch(e => console.log(e))
}

module.exports = {
    getWords: getWords, 
    getWord: getWord
}