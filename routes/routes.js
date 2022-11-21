const express = require('express');
const router = express.Router();
const controller = require('../controllers/functions');

router.route('/')
.get(controller.getQuote) // to fetch a quote on page load
.post(controller.getQuote) // to fetch a quote on newQuoteBtn click

router.route('/tweet')
.post(controller.tweet) // to tweet the quote on twitter click

module.exports = router;