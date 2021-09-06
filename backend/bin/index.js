#!/usr/bin/env node

const fs = require('fs');                       // File system

Init();

function Init()
{
    SaveToFile();
}

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
