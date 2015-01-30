$(document).ready(function() {
    function getMarkerOffset($el, $marker){
        return ($el.outerWidth() / 2) - ($marker.outerWidth() / 2);
    }

    //Moving marker on top navigation
    var $nav = $('nav');

    if ($('nav a').hasClass('active')){
        $nav.prepend('<div id="marker"></div>');
    };

    function placeMarker(){
        if ($('nav a').hasClass('active')){
            $(function() {
                var $marker = $('#marker'),
                    markerOffset = getMarkerOffset($('.active'), $marker),
                    leftPos,
                    $el;

                $marker
                    .css('left', $('.active').position().left + markerOffset)
                    .data('origLeft', $marker.position().left)

                $('nav a').hover(function() {
                    $el = $(this);
                    markerOffset = getMarkerOffset($(this), $marker);
                    leftPos = ($el.position().left) + markerOffset;
                    $marker.stop().animate({
                        left: leftPos
                    });
                }, function() {
                    $marker.stop().animate({
                        left: $marker.data('origLeft')
                    });
                });
            });

        };
    };

    placeMarker();

    // Toggle Mobile Nav

    $('.toggle-nav').click(function(e){
        e.preventDefault();
        $nav.toggle();
    });

    $(window).resize(function() {
        if ($(window).width() > 940) {
            $nav.show();
            placeMarker();
        } else {
            $nav.hide();
        }
    });

    // Resize banner container
    var bannerContainer = $('.home-banner-space');
    var bannerHeight, menuHeight;

    function setContainerHeight(){
        if ($(window).width() < 960) {
            bannerHeight = $('#banner-home').height()
            menuHeight = $('#mobile-menu-bar').height()
            bannerContainer.height(bannerHeight * 1.05 + menuHeight);
        } else {
            bannerContainer.height(480);
        }
    }

    setContainerHeight();

    $(window).resize(function() {
        setContainerHeight();
    });
});
