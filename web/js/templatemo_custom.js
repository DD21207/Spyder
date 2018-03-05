"use strict";

jQuery(document).ready(function($){

	

	/************** Menu Content Opening *********************/
	$("#nav a").click(function(){
		var id =  $(this).attr('class');
		id = id.split('-');
		$("#menu-container .content").hide();
		$("#menu-container #menu-"+id[1]).addClass("animated fadeInDown").show();
		$("#menu-container .homepage").hide();
		$(".support").hide();
		$(".testimonials").hide();
		return false;
	});

	$( window ).load(function() {
	  $("#menu-container .products").hide();
	});



	$("a.templatemo_home,a.templatemo_home").click(function(){
		$("#menu-container .homepage").addClass("animated fadeInDown").show();
		var Name = $(this).attr("id").toUpperCase();
		
		$("#name").text(Name);
		return false;
	});

	$("a.templatemo_page2,a.templatemo_page2").click(function(){
		$("#menu-container .products").addClass("animated fadeInDown").show();
		var Name = $(this).attr("id").toUpperCase();
		
		$("#name").text(Name);
		return false;
	});

	$("a.templatemo_page3,a.templatemo_page3").click(function(){
		$("#menu-container .services").addClass("animated fadeInDown").show();
		var Name = $(this).attr("id").toUpperCase();
		$("#name").text(Name);
		return false;
	});

	$("a.templatemo_page4,a.templatemo_page4").click(function(){
		$("#menu-container .about").addClass("animated fadeInDown").show();
		var Name = $(this).attr("id").toUpperCase();
		$("#name").text(Name);
		return false;
	});

	$("a.templatemo_page5,a.templatemo_page5").click(function(){
		$("#menu-container .contact").addClass("animated fadeInDown").show();
		var Name = $(this).attr("id").toUpperCase();
		$("#name").text(Name);
		return false;
	});
	$("a.templatemo_page6,a.templatemo_page6").click(function(){
		$("#menu-container .yhdmb").addClass("animated fadeInDown").show();
		var Name = $(this).attr("id").toUpperCase();
		$("#name").text(Name);
		return false;
	});

	$("a.templatemo_page7,a.templatemo_page7").click(function(){
			$("#menu-container .SUNINGMB").addClass("animated fadeInDown").show();
			var Name = $(this).attr("id").toUpperCase();
		$("#name").text(Name);
			return false;
	});

	$("a.templatemo_page8,a.templatemo_page8").click(function(){
			$("#menu-container .TMALL").addClass("animated fadeInDown").show();
			var Name = $(this).attr("id").toUpperCase();
		$("#name").text(Name);
			return false;
	});



	/************** Gallery Hover Effect *********************/
	$(".overlay").hide();

	$('.gallery-item').hover(
	  function() {
	    $(this).find('.overlay').addClass('animated fadeIn').show();
	  },
	  function() {
	    $(this).find('.overlay').removeClass('animated fadeIn').hide();
	  }
	);


	/************** LightBox *********************/
	$(function(){
		$('[data-rel="lightbox"]').lightbox();
	});


});


function loadScript() {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&' +
      'callback=initialize';
  document.body.appendChild(script);
}

function initialize() {
    var mapOptions = {
      zoom: 12,
      center: new google.maps.LatLng(16.8251789,96.1439764)
    };
    var map = new google.maps.Map(document.getElementById('templatemo_map'),  mapOptions);
}