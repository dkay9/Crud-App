console.log('May Node be with you');

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient
const connectionString = 'mongodb+srv://kaludavid411:Chooseme9@cluster0.xaxdq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

MongoClient.connect(connectionString)
.then(client => {
    // ...
    const db = client.db('star-wars-quotes')
    app.use(bodyParser.urlencoded({extended: true}))
    app.get('/', (req, res) => {
        res.sendFile(__dirname + '/index.html')
    })
    app.post('/quotes', (req, res) => {
        console.log(req.body); 
    })
    app.listen(3000, function(){
        console.log('listening on 3000');
    })
  })
  .catch(console.error)
