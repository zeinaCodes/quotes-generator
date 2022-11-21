const API_BASE_URL = process.env.API_BASE_URL; // api url
const needle = require('needle') // HTTP client package 
var data;

  module.exports.getQuote = async (req, res) => { 
    // Proxy 
        needle('get', `${API_BASE_URL}?method=getQuote&lang=en&format=json`)
  .then(function(resp) {
    data = resp.body;
    res.render('home', {data})
  })
  .catch(function(err) {
    console.log(err)
  });
}

module.exports.tweet = async (req, res) => {
const quote = data.quoteText;
const author = data.quoteAuthor;
const twitterUrl = `https://twitter.com/intent/tweet?text=${quote} - ${author}`;
res.redirect(twitterUrl);
}