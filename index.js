#!/usr/bin/env node
'use strict';

var cheerio = require('cheerio');
var request = require('request');

var TPB_URL = 'https://thepiratebay.la/top/207';

request(TPB_URL, function(err, resp, body) {
  if (err || resp.statusCode !== 200) {
    throw new Error("Couldn't reach The Pirate Bay... It might be down :(");
  }

  console.log('Top 100 Movies from The Pirate Bay');
  console.log('----------------------------------\n');

  var $ = cheerio.load(body);
  $('#content .detName a').each(function(index, element) {
    console.log(index, $(this).text());
  });
});
