//Custom JS for kabucreative.com.au

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


    //Mobile Menu
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



    //Add visit link on social media platform in footer
    $(function() {
        var mediaitem = $('.social-media-wrapper');

        $('#social-media-buttons a').hover(function () {

            var network = $(this).data('network');
            $('.visit-us').html('Visit us on ' + network);

            mediaitem.show();

            //Position arrow depending on selected social media platform

            var arrow = $('.arrow-top');

            if (network == 'Facebook'){
                arrow.css({
                    marginLeft:'27px',
                    marginRight:'0px'
                });
            } else if (network == 'LinkedIn'){
                arrow.css({
                    marginLeft:'135px',
                    marginRight:'0px'
                });
            } else {
                arrow.css({
                    marginLeft:'auto',
                    marginRight:'auto'
                });
            }
        },

        function () {
            mediaitem.hide();
        });

    });
});

$(window).load(function() { // Wait until entire page has loaded before commencing

    // Banner animation on homepage - cycle between banner divs

    // Create an empty array
    var banners = [];

    // Fill array with banner ids, i.e. ['banner-home', 'banner-home-2', 'banner-home-3']
    $('.banners').each(function () {
        var banner = $(this).attr('id');
        banners.push(banner); // push = add it to the end of the array
    });

    function switchBanners(){

        var $firstBanner = $('#' + banners[0]);
        var $secondBanner = $('#' + banners[1]);
        var firstBannerHeight = $firstBanner.height();
        var secondBannerHeight = $secondBanner.height();

        $firstBanner.animate({ bottom: -firstBannerHeight }, 1200, function(){
            $(this).hide();
        });

        $secondBanner.css('bottom', '-' + secondBannerHeight + 'px' )
        $secondBanner.show();
        $secondBanner.animate({ bottom: 0 }, 1200, function(){
            b = banners.shift(); banners.push(b);
            setTimeout(function(){
                switchBanners();
            }, 4000);
        });
    };

    // Delay initial banner switch
    setTimeout(function(){
        switchBanners();
    }, 4000);

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
