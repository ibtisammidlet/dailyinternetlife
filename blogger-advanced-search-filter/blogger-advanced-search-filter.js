function dosearch() {
/** define vars firstly **/
var sf               = document.searchform;
var siteurl          = sf.adder3.options[sf.adder3.selectedIndex].value
var durationvalue    = sf.duration.options[sf.duration.selectedIndex].value
var attractionvalue  = sf.attraction.options[sf.attraction.selectedIndex].value
var categoryvalue    = sf.category.options[sf.category.selectedIndex].value
var searchtermsvalue = encodeURIComponent(sf.searchterms.value)
var sortvalue        = sf.sort.options[sf.sort.selectedIndex].value


/** make var for adder2 before attraction **/
if($("#search_form .duration option:selected").text() != "any duration" && $("#search_form .attraction option:selected").text() != "any sexual attraction"){
var adder2beforeattraction = sf.adder2.options[sf.adder2.selectedIndex].value
} else {
var adder2beforeattraction = sf.adder5.options[sf.adder5.selectedIndex].value
}

/** make var for adder2 before category **/
if($("#search_form .category option:selected").text() != "any category" && $("#search_form .duration option:selected").text() != "any duration" || $("#search_form .category option:selected").text() != "any category" && $("#search_form .attraction option:selected").text() != "any sexual attraction"){
var adder2beforecategory = sf.adder2.options[sf.adder2.selectedIndex].value
} else {
var adder2beforecategory = sf.adder5.options[sf.adder5.selectedIndex].value
}

/** make var for lable **/
if($("#search_form .duration option:selected").text() != "any duration" || $("#search_form .attraction option:selected").text() != "any sexual attraction" || $("#search_form .category option:selected").text() != "any category"){
var lable = sf.adder4.options[sf.adder4.selectedIndex].value
} else {
var lable = sf.adder5.options[sf.adder5.selectedIndex].value
}  // completed..

/** make var for adder before searchterms **/
if( $("#search_form #searchterms").val().length == 0 ) {
var adderbeforesearchterms = sf.adder5.options[sf.adder5.selectedIndex].value
} else {
var adderbeforesearchterms = sf.adder.options[sf.adder.selectedIndex].value
}  // completed..



/** finally define search url **/
location.href = siteurl + lable + durationvalue + adder2beforeattraction + attractionvalue + adder2beforecategory + categoryvalue + adderbeforesearchterms + searchtermsvalue + sortvalue
return false;
}
