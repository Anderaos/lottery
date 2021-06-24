const express = require('express');
const http = require('http');
const https = require('https');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static('views'))

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/views/index.html")
})

app.listen(process.env.PORT || 3000, function () {
    console.log("Server is runnning on port 3000")
})