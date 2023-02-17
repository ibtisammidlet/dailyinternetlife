// ==UserScript==
// @name         facebook none active friends scraper
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  like the name
// @author       ibtisam midlet
// @match        https://m.facebook.com/ossama.abunada.5/friends?lst=*
// @icon         https://www.google.com/s2/favicons?domain=facebook.com
// @require      https://code.jquery.com/jquery-3.6.0.min.js
// @grant        none
// ==/UserScript==

$( ".friendSearch" ).append('<input id="clickMe" type="button" value="start"  /><table  id="tableofids" style="width:100%"><tr><th colspan="1">users id</th></tr></table><style>#tableofscraption {margin-top: 3px;} table {  font-family: arial, sans-serif;  border-collapse: collapse;  width: 100%;}td, th {  border: 1px solid #dddddd; text-align: center;  padding: 0px;}tr:nth-child(even) {  background-color: #dddddd;}table * {    font-size: 9px;} #clickMe {font-size: 10px; padding: 0px 2px; cursor: pointer;}</style>');

document.getElementById("clickMe").onclick = function () {
$( ".touchable.right._58x3" ).each(function () {
var idwithmbuddy = $(this).parent().html();
var id = idwithmbuddy.split('<a class="touchable right _58x3" id="" role="button" aria-label="Undo" data-store="{&quot;id&quot;:');
$(this).parent().parent().parent().parent().parent().parent().parent().parent().parent().parent().find("#tableofids tbody").append('<tr ><td id="userid">'+id+'</td></tr>')
$('#clickMe').remove();
})
};


