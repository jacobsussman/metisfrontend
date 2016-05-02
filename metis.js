/*jslint browser: true*/
/*global $, jQuery, alert*/

$(document).ready(function () {

    $( ".blue" ).hover(function() {
		$( this ).css("text-decoration", "underline");
	}, function() {
    	$( this ).css("text-decoration", "none");
	});
    
    $( ".settings" ).hover(function() {
		$( this ).css("text-decoration", "underline");
	}, function() {
    	$( this ).css("text-decoration", "none");
	});
    
    
    $( ".homeLink" ).click(function() {
        location.assign("homepage/homepage.html");
    });
    $( ".clientLink" ).click(function() {
        location.assign("client/client.html");
    });
    $( ".adminLink" ).click(function() {
        location.assign("admin/admin.html");
    });
    
//    $( ".signUp" ).click(function() {
//        location.assign("signUp.html");
//    });

	
	
});