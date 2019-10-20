const express = require("express");
var https = require("https");
var http = require("http");
var bodyParser = require("body-parser");
var multer = require("multer");
var querystring = require("querystring");
var upload = multer();
const req = require("request");
var cheerio = require("cheerio");
//var research_page = require("./research_page");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var map = new Array();
var m;
i = 0;

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET", "PUT", "POST", "DELETE");
  res.header("Access-Control-Allow-Header", "Content-Type");
  next();
});

global.site_header_value = "site_header";
global.notices_name_value = [];
global.notices_url_value = [];
global.new_name_value = [];
global.new_url_value = [];
global.tender_name_value = [];
global.tender_url_value = [];
global.recruit_name_value = [];
global.recruit_url_value = [];

global.research_paper_urls = [];
global.author_name = [];
global.books_urls = [];
global.upcoming_name_value = [];
global.link_name_value =[];
global.corner_name_value =[];


const PORT = process.env.PORT || 8080;

app
  .listen(PORT, () => {
    // //// Requesting the site for response ///////
    // # for 'id'
    // . for 'class'

    req("http://www.nrclitchi.org/", (error, response, html) => {
      if (!error && response.statusCode == 200) {
        console.log("So far so good ...");

        ///// Using cheerio to fetch the site details//////

        const $ = cheerio.load(html);

        ///// '$' will be used as a reference to getting all website details ///////

        const siteHeading = $(".header-row");
        console.log("\n\n");

        console.log("Getting Headers ..." + "\n\n\n");

        const site_header = siteHeading.text().replace(/\s\s+/g, " ");

        site_header_value = site_header;
        console.log(site_header + "\n");
        console.log("\n\n");

        ///  Notices
        //// Looping over tags with id (notice)

        console.log("Getting Notices ..." + "\n\n\n");

        var notices_name = {};
        var notices_url = {};

        var key1 = "notices_name";
        var key2 = "notices_url";

        notices_name[key1] = [];
        notices_url[key2] = [];

        $("#notice a").each((i, el) => {
          const notice_name = $(el).attr("title");
          const notice_url = $(el).attr("href");

          notices_name[key1].push(notice_name, notice_url);
          //notices_url[key2].push(notice_url);
        });

        notices_name_value = notices_name;
        console.log(notices_name);
        notices_url_value = notices_url;
        console.log(notices_url);
        console.log("\n\n");

        /// News and events

        console.log("Getting News and Events ..." + "\n\n\n");

        var new_name = {};
        var new_url = {};

        var key1 = "news_name";
        var key2 = "news_url";

        new_name[key1] = [];
        new_url[key2] = [];

        $("#news a").each((i, el) => {
          const news_name = $(el).attr("title");
          const news_url = $(el).attr("href");

          new_name[key1].push(news_name, news_url);
          //new_url[key2].push(news_url);
        });

        new_name_value = new_name;
        console.log(new_name);
        //new_url_value = new_url;
        console.log(new_url);
        console.log("\n\n");

        /// Tenders

        console.log("Getting Tenders ..." + "\n\n\n");

        var tender_name = {};
        var tender_url = {};

        var key1 = "tender_name";
        var key2 = "tender_url";

        tender_name[key1] = [];
        tender_url[key2] = [];

        $("#tenders a").each((i, el) => {
          const tenders_name = $(el).attr("title");
          const tenders_url = $(el).attr("href");

          tender_name[key1].push(tenders_name, tenders_url);
          // tender_url[key2].push(tenders_url);
        });

        tender_name_value = tender_name;
        console.log(tender_name);
        //tender_url_value = tender_url;
        console.log(tender_url);
        console.log("\n\n");

        /// Recruitments

        console.log("Getting Recruitment ..." + "\n\n\n");

        var recruit_name = {};
        var recruit_url = {};

        var key1 = "recruit_name";
        var key2 = "recruit_url";

        recruit_name[key1] = [];
        recruit_url[key2] = [];

        $("#recruitment a").each((i, el) => {
          const recruitment_name = $(el).attr("title");
          const recruitment_url = $(el).attr("href");

          recruit_name[key1].push(recruitment_name, recruitment_url);
          //recruit_url[key2].push(recruitment_url);
        });

        recruit_name_value = recruit_name;
        console.log(recruit_name);
        //recruit_url_value = recruit_url;
        console.log(recruit_url);
        console.log("\n\n");

        /// Upcoming Events

        console.log("Getting Upcoming Events ..." + "\n\n\n");


        var upcoming_name = {};
        var upcoming_url = {};

        var key1 = "event_name";
        //var key2 = "recruit_url";

        upcoming_name[key1] = [];
        //recruit_url[key2] = [];

        
        $('[class="list list-icons"] li a').each((i, el) => {
          const event_name = $(el).attr("title");
          const event_url = $(el).attr("href");
          // console.log(event_name + "\n");
          // console.log(event_url + "\n");
          upcoming_name[key1].push(event_name, event_url);
        });

        upcoming_name_value = upcoming_name;
        console.log(upcoming_name_value);
        console.log("\n\n");

                /// Upcoming Events

        console.log("Getting Upcoming Events ..." + "\n\n\n");


        var upcoming_name = {};
        var upcoming_url = {};

        var key1 = "event_name";
        //var key2 = "recruit_url";

        upcoming_name[key1] = [];
        //recruit_url[key2] = [];

        
        $('[class="list list-icons"] li a').each((i, el) => {
          const event_name = $(el).attr("title");
          const event_url = $(el).attr("href");
          // console.log(event_name + "\n");
          // console.log(event_url + "\n");
          upcoming_name[key1].push(event_name, event_url);
        });

        upcoming_name_value = upcoming_name;
        console.log(upcoming_name_value);
        console.log("\n\n");



            /// Important Links

            console.log("Getting Important links ..." + "\n\n\n");


            var link_name = {};
            var upcoming_url = {};
    
            var key1 = "link_name";
            //var key2 = "recruit_url";
    
            link_name[key1] = [];
            //recruit_url[key2] = [];
    
            
            $('[class="nav nav-list mb-xl"] li a').each((i, el) => {
              const event_name = $(el).attr("title");
              const event_url = $(el).attr("href");
              // console.log(event_name + "\n");
              // console.log(event_url + "\n");
              link_name[key1].push(event_name, event_url);
            });
    
            link_name_value = link_name;
            console.log(link_name_value);
            console.log("\n\n");


             /// Farmer Corner

             console.log("Getting Farmer corner ..." + "\n\n\n");


             var corner_name = {};
             var upcoming_url = {};
     
             var key1 = "corner_name";
             //var key2 = "recruit_url";
     
             corner_name[key1] = [];
             //recruit_url[key2] = [];
     
             
             $('[class="nav nav-list text-blue mb-xl"] li a').each((i, el) => {
               const event_name = $(el).attr("title");
               const event_url = $(el).attr("href");
               // console.log(event_name + "\n");
               // console.log(event_url + "\n");
               corner_name[key1].push(event_name, event_url);
             });
     
             corner_name_value = corner_name;
             console.log(corner_name_value);
             console.log("\n\n");
      }
    });

    /////////////////

    req("http://www.nrclitchi.org/research-papers", (error, response, html) => {
      if (!error && response.statusCode == 200) {
        console.log("So far so good ...");

        ///// Using cheerio to fetch the site details//////

        const $ = cheerio.load(html);

        ///// '$' will be used as a reference to getting all website details ///////
        ///  Research Paper urls

        console.log("Getting Research Paper urls ..." + "\n\n\n");

        var research_url = {};

        var key1 = "research_papers";

        research_url[key1] = [];

        $(".list-icons-style-3 li a").each((i, el) => {
          const researchUrl = $(el).attr("href");

          research_url[key1].push(researchUrl);
        });

        research_paper_urls = research_url;
        var len = research_paper_urls.research_papers.length;

        ///// getting individual web scraping from each url

        for (let i = 0; i < len; i++) {
          //console.log(research_paper_urls["research_papers"][i]);

          req(
            `${research_paper_urls["research_papers"][i]}`,
            (error, response, html) => {
              if (!error && response.statusCode == 200) {
                //console.log(research_paper_urls);

                ///// Using cheerio to fetch the site details//////

                const $ = cheerio.load(html);

                var books_url = {};
                var author_name = [];

                ///// '$' will be used as a reference to getting all website details ///////
                ///  Research Paper urls
                $(".col-md-12 h1").each((i, el) => {
                  author_name = $(el).text();
                });

                var key1 = "research_papers";

                books_url[key1] = [];
                books_url[key1].push(author_name);

                $(".list-ordened-style-3 li").each((i, el) => {
                  const book_name = $(el)
                    .text()
                    .replace(/\s\s+/g, " ");

                  books_url[key1].push(book_name);
                });

                // books_urls = books_url;
                //console.log(books_urls);
                books_urls.push(books_url);
                console.log("\n\n");
              }
            }
          );
        }

        console.log("\n\n");
      }
    });
  })
  .on("error", e => {
    console.error(`Got error: ${e.message}`);
  });

/// Uploading on different routes

app
  .get("/", (req, res) => {
    res.send(site_header_value);
  })
  .on("error", e => {
    console.error(`Got error: ${e.message}`);
  });

app
  .get("/notices", (req, res) => {
    res.send(notices_name_value);
    // res.send(notices_url_value);
  })
  .on("error", e => {
    console.error(`Got error: ${e.message}`);
  });

app
  .get("/news", (req, res) => {
    res.send(new_name_value);
    // res.send(new_url_value);
  })
  .on("error", e => {
    console.error(`Got error: ${e.message}`);
  });

app
  .get("/tenders", (req, res) => {
    res.send(tender_name_value);
    // res.send(tender_url_value + '\n\n');
  })
  .on("error", e => {
    console.error(`Got error: ${e.message}`);
  });

app
  .get("/recruitments", (req, res) => {
    res.send(recruit_name_value);
    // res.send(recruit_url_value + '\n\n');
  })
  .on("error", e => {
    console.error(`Got error: ${e.message}`);
  });

  app
  .get("/upcoming", (req, res) => {
    res.send(upcoming_name_value);
    // res.send(recruit_url_value + '\n\n');
  })
  .on("error", e => {
    console.error(`Got error: ${e.message}`);
  });

  app
  .get("/links", (req, res) => {
    res.send(link_name_value);
    // res.send(tender_url_value + '\n\n');
  })
  .on("error", e => {
    console.error(`Got error: ${e.message}`);
  }); //corner_name_value

  app
  .get("/corners", (req, res) => {
    res.send(corner_name_value);
    // res.send(tender_url_value + '\n\n');
  })
  .on("error", e => {
    console.error(`Got error: ${e.message}`);
  }); 

app
  .get("/test1", (req, res) => {
    res.send(data);
  })
  .on("error", e => {
    console.error(`Got error: ${e.message}`);
  });

app
  .get("/research_papers", (req, res) => {
    res.send(books_urls);
  })
  .on("error", e => {
    console.error(`Got error: ${e.message}`);
  });
