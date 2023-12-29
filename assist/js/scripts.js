jQuery(document).ready(function(){

	// humbar icon js start hare

	 var forEach=function(t,o,r){if("[object Object]"===Object.prototype.toString.call(t))for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&o.call(r,t[c],c,t);else for(var e=0,l=t.length;l>e;e++)o.call(r,t[e],e,t)};

    var hamburgers = document.querySelectorAll(".hamburger");
    if (hamburgers.length > 0) {
      forEach(hamburgers, function(hamburger) {
        hamburger.addEventListener("click", function() {
          this.classList.toggle("is-active");
        }, false);
      });
    }
	// humbar icon js end hare


    // navbar js start hare

    jQuery(".navbarr ul li a").click(function(){
    	jQuery(".navbarr li a").removeClass("active")
    	jQuery(this).addClass("active")
    })

    jQuery(".humabar-icon").click(function(){
    	jQuery(".navbar-area").slideToggle()
    })

  	// navbar js end hare
  	// accordion js start hare
  	
    jQuery(".Treatment-btn").click(function(){
    	jQuery(this).next().slideToggle('slow').siblings(".hidden-content").slideUp('slow');
    	jQuery(this).toggleClass("activee").siblings(".Treatment-btn").removeClass("activee");
    })

 	// accordion js end hare
    // owl carousel js
     $(".owl-carousel").owlCarousel({
      autoplay:true,
      items: 4,
      nav:true,
       responsive: {
	        0:{
	          items: 1
	        },
	        480:{
	          items: 1
	        },
	        769:{
	          items: 2
	        },
	        999:{
	        	items: 4
	        },
	    }
    });




})