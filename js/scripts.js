$(document).ready(function (){



//Sticky nav
$('#intro-para').waypoint(function (direction) {
        if (direction == "down"){
            $('.nav-bar').addClass('sticky-nav');

        }
	
        else {
				
            $('.nav-bar').removeClass('sticky-nav');
		
			
        }
    }, 
    {
  offset: '60px;'
    });





/* Mobile Navigation */

      
    $('i.mobile-nav').click(function(){
        var nav = $('#nav');
        var icon = $(this);
    
        nav.slideToggle(200);
        if (icon.hasClass('ion-navicon-round')){
            icon.removeClass('ion-navicon-round');
			icon.addClass('ion-close-round');
            
        }
        else {
            icon.removeClass('ion-close-round');
            icon.addClass('ion-navicon-round');
        };
    });
    
	
});

