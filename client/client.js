///*jslint browser: true*/
///*global $, jQuery, alert*/

$(document).ready(function () {

    $( ".signUp" ).click(function() {
        location.assign("signUp.html");
    });
    
    $( ".logIn" ).click(function() {
        location.assign("logIn.html");
    });
    $( ".start" ).click(function() {
        location.assign("welcome.html");
    });
    
    $( ".logo" ).click(function() {
        location.assign("client.html");
    });
    
    $( ".question" ).click(function() {
        location.assign("question.html");
    });
});
	
