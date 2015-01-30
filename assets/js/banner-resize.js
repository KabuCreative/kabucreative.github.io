$(document).ready(function() {
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
