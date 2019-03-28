const express = require("express");
var https = require("https");
var http = require("http");
var bodyParser = require("body-parser");
var querystring = require("querystring");

const req = require("request");
var cheerio = require("cheerio");

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

global.research_paper_urls = [];
global.author_name = [];
global.books_urls = [];

const PORT = process.env.PORT || 9000;

var url_length = [];

app
  .listen(PORT, () => {
    // //// Requesting the site for response ///////

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

                var key1 = author_name;

                books_url[key1] = [];

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

app
  .get("/research_papers", (req, res) => {
    //console.log(books_urls);
    res.send(books_urls);
  })
  .on("error", e => {
    console.error(`Got error: ${e.message}`);
  });

exports.research_paper_urls;
