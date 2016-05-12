/*jslint browser: true*/
/*global $, jQuery, alert*/

$(document).ready(function () {
	"use strict";
	

	$( ".topBox h5" ).hover(function() {
    	$( this ).css("text-decoration", "underline");
	}, function() {
    	$( this ).css("text-decoration", "none");
	});
	$( ".numTxt1" ).hover(function() {
    	$( this ).css("text-decoration", "underline");
	}, function() {
    	$( this ).css("text-decoration", "none");
	});
	$( ".numTxt2" ).hover(function() {
    	$( this ).css("text-decoration", "underline");
	}, function() {
    	$( this ).css("text-decoration", "none");
	});
	$( ".numTxt3" ).hover(function() {
    	$( this ).css("text-decoration", "underline");
	}, function() {
    	$( this ).css("text-decoration", "none");
	});
	$( ".numTxt4" ).hover(function() {
    	$( this ).css("text-decoration", "underline");
	}, function() {
    	$( this ).css("text-decoration", "none");
	});
    
    $( ".coach1" ).hover(function() {
    	$( this ).css("text-decoration", "underline");
	}, function() {
    	$( this ).css("text-decoration", "none");
	});
    
    $( ".coach2" ).hover(function() {
    	$( this ).css("text-decoration", "underline");
	}, function() {
    	$( this ).css("text-decoration", "none");
	});
    
    $( ".coach3" ).hover(function() {
    	$( this ).css("text-decoration", "underline");
	}, function() {
    	$( this ).css("text-decoration", "none");
	});
    
    $( ".coach4" ).hover(function() {
    	$( this ).css("text-decoration", "underline");
	}, function() {
    	$( this ).css("text-decoration", "none");
	});
    
    $(".back").hover(function () {
		$(this).attr("src", "../media/img/backToDashBlack.svg");
	}, function () {
		$(this).attr("src", "../media/img/backToDashGrey.svg");
	});
    
    
    $( ".back" ).hover(function() {
    	$( this ).css("opacity", "1");
	}, function() {
    	$( this ).css("opacity", "0.5");
	});
    
    
	
//	$(".navIcon").hover(function () {
//		$(this).toggleClass("navHover");
//	});
//	
//	
	
	
//    $("img")
//        .mouseover(function () {
//            var src = $(this).attr("src").match(/[^\.]+/) + "over.svg";
//            $(this).attr("src", src);
//        })
//        .mouseout(function () {
//            var src = $(this).attr("src").replace("over.svg", ".svg");
//            $(this).attr("src", src);
//        });

	
});