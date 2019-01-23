const req = require('request');
const cheerio = require('cheerio');
const express = require('express');
var https = require('https');
var http = require('http');
var bodyParser = require('body-parser');
var querystring = require('querystring'); 

const app = express();

// app.use(function(req, res, next){

//     res.header('Access-Control-Allow-Origin', "*");
//     res.header('Access-Control-Allow-Methods', 'GET', 'PUT', 'POST', 'DELETE');
//     res.header('Access-Control-Allow-Header','Content-Type');
//     next();
//   })
  
const PORT = process.env.PORT || 8000;

console.log("Now loading the site ...");


app.listen(PORT, () => {

    console.log("yay");
  
    // //// Requesting the site for response ///////

    // req('http://www.nrclitchi.org/', (error, response, html) => {


    // if (!error && response.statusCode == 200) {

    //     console.log("So far so good ...");

    //     ///// Using cheerio to fetch the site details//////

    //     const $ = cheerio.load(html);

    //     ///// '$' will be used as a reference to getting all website details ///////  

    //     const siteHeading = $('.header-row');
    //     console.log('\n\n');


    //     console.log("Getting Headers ..." + '\n\n\n');

    //     const site_header = siteHeading.text().replace(/\s\s+/g, ' ');
    //     console.log(site_header + '\n');
    //     console.log('\n\n');


    //     //// Looping over tags with id (notice)

    //     console.log("Getting Notices ..." + '\n\n\n');

    //     var notices_name = {} 
    //     var notices_url = {} 
    
    //     var key1 = 'notices_name';
    //     var key2 = 'notices_url';
     
    //     notices_name[key1] = [];
    //     notices_url[key2] = []; 

    //     $('#notice a').each((i, el) => {

    //         const notice_name = $(el).attr('title');
    //         const notice_url = $(el).attr('href');
            
    //         notices_name[key1].push(notice_name);          
    //         notices_url[key2].push(notice_url);

    //     })

    //     console.log(notices_name);
    //     console.log(notices_url);
    //     console.log('\n\n');


    //     /// News and events

    //     console.log("Getting News and Events ..." + '\n\n\n');

    //     var new_name = {} 
    //     var new_url = {} 
    
    //     var key1 = 'news_name';
    //     var key2 = 'news_url';
     
    //     new_name[key1] = [];
    //     new_url[key2] = []; 

    //     $('#news a').each((i, el) => {

    //         const news_name = $(el).attr('title');
    //         const news_url = $(el).attr('href');
            
    //         new_name[key1].push(news_name);          
    //         new_url[key2].push(news_url);

    //     })

    //     console.log(new_name);
    //     console.log(new_url);
    //     console.log('\n\n');


    //     /// Tenders

    //     console.log("Getting Tenders ..." + '\n\n\n');

    //     var tender_name = {} 
    //     var tender_url = {} 
    
    //     var key1 = 'tender_name';
    //     var key2 = 'tender_url';
     
    //     tender_name[key1] = [];
    //     tender_url[key2] = []; 

    //     $('#tenders a').each((i, el) => {

    //         const tenders_name = $(el).attr('title');
    //         const tenders_url = $(el).attr('href');
           
    //         tender_name[key1].push(tenders_name);          
    //         tender_url[key2].push(tenders_url);     

    //     })
       
    //     console.log(tender_name);
    //     console.log(tender_url);
    //     console.log('\n\n');

    //     /// Recruitments
        

    //     console.log("Getting Recruitment ..." + '\n\n\n');

    //     var recruit_name = {} 
    //     var recruit_url = {} 
    
    //     var key1 = 'recruit_name';
    //     var key2 = 'recruit_url';
     
    //     recruit_name[key1] = [];
    //     recruit_url[key2] = []; 

    //     $('#recruitment a').each((i, el) => {

    //         const recruitment_name = $(el).attr('title');
    //         const recruitment_url = $(el).attr('href');
        
    //         recruit_name[key1].push(recruitment_name);          
    //         recruit_url[key2].push(recruitment_url);      
 
    //     })

       
    //     console.log(recruit_name);
    //     console.log(recruit_url);
    //     console.log('\n\n');

    //     /// Upcoming Events

    //      console.log("Getting Upcoming Events ..." + '\n\n\n');

    //      $('#list list-icons a').each((i, el) => {
 
    //          const event_name = $(el).attr('title');
    //          const event_url = $(el).attr('href');
    //          console.log(event_name + '\n');
    //          console.log(event_url + '\n');
 
    //      })

     
    //     // res.send(weather_data);
    //     // Following console.log to be copnverted to res.send later to be
    //     // uploaded to the server later

    //     //console.log(site_header);

          
    // }

    
// });




//   }).on('error', (e) => {
  
//     console.error(`Got error: ${e.message}`);

});

app.get('/test1', (req, res) => { 
     

    res.send("recruit_url");
  
  
  }).on('error', (e) => {
  
    console.error(`Got error: ${e.message}`);
  });