$(document).ready(function(){
	
	/*
	    Navigation
    */
    $('#btn_next').click(function () {
        $('#carousel-example').carousel('next');
        return false;
    });
    $('#btn_prev').click(function () {
        $('#carousel-example').carousel('prev');
        return false;
    });
	$('a.scroll-link').on('click', function(e) {
		e.preventDefault();
		scroll_to($(this), $('nav').outerHeight());
	});
	
    
    /*
	    Wow
	*/
	new WOW().init();
	
	/*
	    Carousel
	*/
	$('#carousel-example').on('slide.bs.carousel', function (e) {

	    /*
	        CC 2.0 License Iatek LLC 2018
	        Attribution required
	    */
	    var $e = $(e.relatedTarget);
	    var idx = $e.index();
	    var itemsPerSlide = 5;
	    var totalItems = $('.carousel-item').length;
	    
	    if (idx >= totalItems-(itemsPerSlide-1)) {
	        var it = itemsPerSlide - (totalItems - idx);
	        for (var i=0; i<it; i++) {
	            // append slides to end
	            if (e.direction=="left") {
	                $('.estrategias-carousel .carousel-item').eq(i).appendTo('.estrategias-carousel');
	            }
	            else {
	                $('.estrategias-carousel .carousel-item').eq(0).appendTo('.estrategias-carousel');
	            }
	        }
	    }
	});
	
});