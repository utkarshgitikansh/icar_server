const express = require('express');
var https = require('https');
var http = require('http');
var bodyParser = require('body-parser');
var multer = require('multer'); 
var querystring = require('querystring'); 
var upload = multer(); 
const req = require('request');
var cheerio = require('cheerio');


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


global.site_header_value = "site_header";
global.notices_name_value = [];
global.notices_url_value = [];
global.new_name_value = [];
global.new_url_value = [];
global.tender_name_value = [];
global.tender_url_value = [];
global.recruit_name_value = [];
global.recruit_url_value = [];


  app.listen('8000', () => { 
     
    https.get(`https://icarserver.herokuapp.com/notices`, (res) => {



    let rawData = '';
    res.on('data', (chunk) => { rawData += chunk; });
    res.on('end', () => {
      try {
        const parsedData = JSON.parse(rawData);
        value = parsedData;
        console.log(parsedData.notices_name[0]);  
      } catch (e) {
        console.error(e.message);
      }
  
  
    });

  })

  })
