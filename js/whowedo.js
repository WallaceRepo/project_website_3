"use strict";

jQuery(document).ready(function($){
	/************** FlexSlider Plugin *********************/
	$('.flexslider').flexslider({
		animation : 'fade',
		controlNav : false,
		nextText : '',
		prevText : '',
	});

	$('.flex-caption').addClass('animated pulse');

	$('.flex-direction-nav a').on('click', function() {
    $('.flex-caption').removeClass('animated pulse');
    $('.flex-caption').fadeIn(0).addClass('animated pulse');
    });
	
 //Add slideDown animation to Bootstrap dropdown when expanding.
   $('.dropdown').on('show.bs.dropdown', function() {
		$(this).find('.dropdown-menu').first().stop(true, true).fadeIn();
		$('#dimScreen').show();
		$('#menu-wrapper #hamburger-menu').addClass('open');
  }); 

  // Add slideUp animation to Bootstrap dropdown when collapsing.
  $('.dropdown').on('hide.bs.dropdown', function() {
		$(this).find('.dropdown-menu').first().stop(true, true).fadeOut();
		$('#dimScreen').hide();
		$('#menu-wrapper #hamburger-menu').removeClass('open');
	});
  $('.mega-dropdown-menu').mouseleave(function() {
		$(this).fadeOut();
		$('#dimScreen').hide();
		$('.dropdown').removeClass('open');
		$('#menu-wrapper #hamburger-menu').removeClass('open');
	});
	//on hover opens dropdown
	/*$('.dropdown').hover(
        function() {
			$(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn();
		//	
        },
        function() {
			$(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut();
		//	
        }
    );

    $('.dropdown-menu').hover(
        function() {
            $(this).stop(true, true);
        },
        function() {
            $(this).stop(true, true).delay(200).fadeOut();
        }
    );*/
/*	$("#menu-wrapper").click(function(e) {
    event.stopPropagation();
    $("#hamburger-menu").toggleClass("open");
    $("#menu-container").toggleClass("active");
    slideMenu();

    $("body").toggleClass("overflow-hidden");
	e.preventDefault();
  }); */
 /* NAV PILLS */
 $('.nav-pills > li > a').hover(function() {
  $(this).tab('show');
});

 $('.nav-pills > li > a').click(function() {
  $(this).tab('show');
});

 /*NAV PILLS EXTRA */
$('.nav-pills > li ').hover(function() {
  if ($(this).hasClass('hoverblock'))
    return;
  else
    $(this).find('a').tab('show');
});

$('.nav-pills > li').find('a').click(function() {
  $(this).parent()
    .siblings().addClass('hoverblock');
});
});
 	  /*My try for menu click event triggering on target page */
	  
  /*Pool = {
	  whatwedopage : {
		  
	  },
	  whowedopage : {
		 
	  },
	  whatitlookspage : {
		  
	  }
  }
   UTIL = {
	   fire : function(){},
	   loadEvents : function(){}
   };
$(document).ready(UTIL.loadEvents); */
 /*$("document").ready(function() {
      var lists = $('#og-grid').children(li);
        list.index(0).trigger('click');
		alert(list);
    }, 5);
});
	 $("document").ready(function() {
    setTimeout(function() {
		var lists = $('#og-grid').children(li);
        list.index(0).trigger('click');
    }, 5);
}); */


	
	/*addEventListener('load', function(){myWindow.foo("red");}, true);
	/*myWindow.document.getElementById("og-grid").style.color="red";*/
	
	
	/*newElement = $(myWindow);
	yess = $(newElement).find('.wwdgrid > li:first-child a');
	
	var lastry = $(yess).children('span:last-of-type');
	
	alert(lastry);
	
	    
     return false; */
  


	
    

 

 /*End for the above event triggering */
 
 
   $(function() {
				/**
				* for each menu element, on mouseenter, 
				* we enlarge the image, and show both sdt_active span and 
				* sdt_wrap span. If the element has a sub menu (sdt_box),
				* then we slide it - if the element is the last one in the menu
				* we slide it to the left, otherwise to the right
				*/
				//var b = $('#og-grid > li').height();
				$('.gre').bind('mouseenter',function(){
					var $elem = $(this);
						$elem.find('.exp')
						 .stop(true)
						 //.show().animate({ 'height' : $('.og-grid li > a').height()},300,'easeOutSine')
						 .show().animate({ 'height' : '100%' },300,'easeOutSine')
				 }).bind('mouseleave',function(){
					var $elem = $(this);
					$elem.find('.exp')
						 .stop(true)
						 .hide().animate({'height':'0px'},300,'easeOutSine');
				});
		   
            });
 

		/*	$(document).ready(function(){
				$("#sdt_menu > li").bind('mouseenter',function(){
					var $elem = $(this);
					$elem.find('.exp')
					     .fadeIn()
						 
						 .find('a')
						 .fadeOut()
						
			});
			}).bind('mouseleave',function(){
					var $elem = $(this);
					$elem.find('.exp')
					     .fadeOut()
						
						 .find('a')
						 .fadeIn()
						 
			});*/
