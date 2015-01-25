//Custom JS for kabucreative.com.au

$(document).ready(function() {

    //Moving marker on top navigation
    if ($('nav a').hasClass('active')){
        $(function() {

            var leftPos, $el;
            var $nav = $('nav');

            $nav.prepend('<div id="marker"></div>');
            var $marker = $('#marker');

            var elWidth = ($('.active').outerWidth() / 2) - 7; // Marker is 14px wide, hence 7

            $marker
                .css('left', $('.active').position().left + elWidth)
                .data('origLeft', $marker.position().left)

            $('nav a').hover(function() {
                $el = $(this);
                elWidth = (($(this).outerWidth()) / 2) - 7;
                leftPos = ($el.position().left) + elWidth;
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


    // Setup case study slider on Portfolio
    $(function(){
        $('#case-study-slider').slides({
            play                :   5000,
            generatePagination  :   false
        });
    });
});

$(window).load(function() { // Wait until entire page has loaded before commencing

    // Banner animation on homepage - cycle between banner divs

    // Load images in BG
    $('.banners').show();

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

        $firstBanner.animate({ bottom: -firstBannerHeight }, 1200);
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

});
