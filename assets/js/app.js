/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you require will output into a single css file (app.css in this case)
global.$ = global.jQuery = $;
require('../css/app.css');
require('select2');
$('select').select2();

let $contactButton = $('#contactButton');
$contactButton.click(e =>{
    e.preventDefault();
    $('#contactForm').slideDown();
    $contactButton.slideUp();
});

// Need jQuery? Install it with "yarn add jquery", then uncomment to require it.
// const $ = require('jquery');

console.log('Hello Webpack Encore! Edit me in assets/js/app.js');
