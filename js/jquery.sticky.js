var alturaBarra = 0;
jQuery.stickyBar = function(el){
	var elem = el?$(el):false;
	if(elem){	
	var stickyNavTop = elem.offset().top; 
	var stickyNav = function(){  
		var scrollTop = $(window).scrollTop();  
		if (scrollTop > stickyNavTop) { 
			elem.css({width: "100%", top:"0", left:"0", position:'fixed'})
		} else {  
			elem.css({width: "", top:"", left:"", position:'' })	
		} 

		alturaBarra = parseInt(elem.css("height"));
	};
	stickyNav();  
	$(window).scroll(function() {  
		stickyNav(); 
	}); 
	}
};

jQuery.scroll = function(time){

	 $('a[href*=#]').click(function() {

    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var $target = $(this.hash);
      $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');

      if ($target.length) {
        var targetOffset = $target.offset().top;
       var desde = $(window).scrollTop();
        var hasta = targetOffset;
	 var tiempo = 0;
	 if(desde > hasta){
	 	tiempo = desde - hasta;
	 }else{
	 	tiempo = hasta-desde;
	 }
	 console.log(alturaBarra);
        $('html,body').stop().animate({scrollTop: targetOffset-alturaBarra}, time?time:tiempo);
       return false;
      }
    }
  });
}