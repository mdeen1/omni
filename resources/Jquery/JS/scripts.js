$(function() {
    
    $('.js--section-feautures').waypoints(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky')
        }
    });

});