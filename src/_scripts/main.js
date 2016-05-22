// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

//var $ = require('jquery');
//require('bootstrap');
//require('magnific-popup');
var Link = require('../_modules/link/link');

//require('slick-carousel');
require('wow');


$(function() {
    new Link(); // Activate Link modules logic
    new WOW().init();
    console.log('All systems functional.');
});