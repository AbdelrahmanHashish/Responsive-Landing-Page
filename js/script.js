// JavaScript Document

$(document).ready(function(){
	
	/****** Start Header Section ******/
	
	// Show Navbar When Click on icon (Note: this event special for Extra Small Screens => xs )
	$("header i.icon").click(function(){
		$("header nav ul.nav_list").slideToggle();
	});
	
	// When scroll body .. sticky navbar
	$(window).scroll(function(){
		var sc = $(this).scrollTop();
		
		if(sc > 50){
			$("header").addClass("sticky");
		}else{
			$("header").removeClass("sticky");
		}
		
	});
	
	/****** End Header Section ******/
	
	/****** Start Stat Section ******/
	$(window).scroll(function(){
		var the_scrollTop = $(this).scrollTop();
		var the_stat_top = $(".stat").offset().top - 150;
		if(the_scrollTop >= the_stat_top){
			$('.timer').countTo();
			$(window).off("scroll");
		}
	});
	/****** End Stat Section ******/
	
	/****** Start Portfolio Section ******/
	$("section.portfolio div.buttons button").click(function(){
		$(this).addClass("active_btn").siblings().removeClass("active_btn");
		
		var CSSFilter = $(this).attr("id");
		
		if(CSSFilter === "all"){
			$("section.portfolio div.images > div").fadeIn();
			
		}else{
			$("section.portfolio div.images > div").fadeOut();
			$("section.portfolio div.images").contents().filter("."+CSSFilter).fadeIn();
		}
		
	});
	/****** End Portfolio Section ******/
	
	/****** Start Team Section ******/
	$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
	dots:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});
	/****** End Team Section ******/
	
	/****** Start Choose Section ******/
	$("section.choose div.c_panel ul li").click(function(){
		$(this).addClass("active_btn").siblings().removeClass("active_btn");
		var p = $(this).data("role");
		$("div.content > div.c_info").hide();
		$("div.content").contents().filter("#"+p).fadeIn();
	});
	
	// Magnific Popup
	$(".pop").magnificPopup({
		type:'iframe'
	});
	/****** End Choose Section ******/
	
	/****** Start Pleasure Section ******/
	
	// slick slider jquery ===> ( this is a library)
	$('.slick').slick({
		nextArrow:false,
		prevArrow:false
	});
	/****** End Pleasure Section ******/
	
	/****** Start Scroll Top Section ******/
	$(window).scroll(function(){
		var scroll_top = $(this).scrollTop();
		if(scroll_top > 500){
			$("div.scrollTop").fadeIn();
		}else{
			$("div.scrollTop").fadeOut();
		}
	});
	
	// Scroll to Top
	$("div.scrollTop").click(function(){
		$("body,html").animate({
			scrollTop:0
		},500);
	});
	
	/****** End Scroll Top Section ******/
	
	
	// Smooth Scroll
	$("header nav ul.nav_list li.list a").click(function(){
		$("body,html").animate({
			scrollTop: $("#"+$(this).data("value")).offset().top - 75,
		},500);
	});
});