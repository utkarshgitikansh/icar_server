const express = require('express');
var https = require('https');
var http = require('http');
var bodyParser = require('body-parser');
var multer = require('multer'); 
var querystring = require('querystring'); 
var upload = multer(); 
const req = require('request');
const cheerio = require('cheerio');


const app = express();


app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 


var map = new Array();
var m;
i = 0;


app.use(function(req, res, next){

  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods', 'GET', 'PUT', 'POST', 'DELETE');
  res.header('Access-Control-Allow-Header','Content-Type');
  next();
})

global.data = "data";
global.value = "value";
global.current = "current";
global.stats = "new";
global.playerPID = "x";
global.playerData = "dhoni";
global.weather = "clear";

const PORT = process.env.PORT || 8080;


  app.listen(PORT, () => {
  
  
    http.get('http://cricapi.com/api/matches/YQcxw12HpBMe1UaJ6TsKtZTC3Br2', (res) => {
    
  
    const { statusCode } = res;
    const contentType = res.headers['content-type'];
   
    let error;
    if (statusCode !== 200) {
      error = new Error('Request Failed.\n' +
                        `Status Code: ${statusCode}`);
    } else if (!/^application\/json/.test(contentType)) {
      error = new Error('Invalid content-type.\n' +
                        `Expected application/json but received ${contentType}`);
    }
    if (error) {
      console.error(error.message);
  
      res.resume();
      return;
    }
  

    let rawData = '';
    res.on('data', (chunk) => { rawData += chunk; });
    res.on('end', () => {
      try {
        const parsedData = JSON.parse(rawData);
        value = parsedData;
        console.log(parsedData);
        m = parsedData.matches.length;
  
      } catch (e) {
        console.error(e.message);
      }
  
  
   
  
    });
  }).on('error', (e) => {
  
    console.error(`Got error: ${e.message}`);
  });

});
 
app.get('/test', (req, res) => {
   

 

     }).on('error', (e) => {
     
       console.error(`Got error: ${e.message}`);
     
})
