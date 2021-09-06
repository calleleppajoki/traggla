// don't need this if it's a backend thingy #!/usr/bin/env node

const fs = require('fs');                       // File system
const express = require('express')              // Why webdev, why

const app = express()

app.get('/', (req, res) => {
  res.send('Hi!')
  console.log('Got got')
})

app.post('/', function (req, res) {
    res.send('Got a POST request')
    console.log('postpost')
  })

const server = app.listen(3000, () => console.log('Server ready'))

process.on('SIGTERM', () => {
  server.close(() => {
    console.log('Process terminated')
  })
})

function GetWritePath()
{
    return "../../docs/"
}

function SaveToFile()
{
    var writePath = GetWritePath();
    var exampleJson = '{"name":"John", "age":30, "car":null}'

    fs.writeFileSync(writePath + "test.json", JSON.stringify(exampleJson));
}

function ReadFromFiles()
{
    var readPath = "../content-raw/news";
    var files = fs.readdirSync(readPath); 

    files.forEach(function (file) {
        var contents = fs.readFileSync(readPath + "/" + file, 'utf8');
    });
}
