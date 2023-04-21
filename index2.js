let request = require("request");
const cheerio = require("cheerio");
const chalk = require("chalk");
console.log("hi");

request('https://www.espncricinfo.com/series/indian-premier-league-2023-1345038/chennai-super-kings-vs-rajasthan-royals-17th-match-1359491/ball-by-ball-commentary', function (error, response, body) {
  console.error('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   console.log('body:', body); // Print the HTML for the Google homepage.

  let tmp = cheerio.load(body);
  let tmparr = tmp("p");
  // console.log(tmparr)

  for(let i = 0; i < tmparr.length; i++){
    let data = tmp(tmparr[i]).text();
    console.log(chalk.red(data));

    // console.log("hi", data);
  }
});
console.log("hi");
