/**
 * Created by songning on 2016/9/1.
 */
/*loading*/


$(function () {

    $('.scroll').bind('click', function(event) {
        var $anchor = $(this);
        var headerH = $('.navigation').outerHeight();
        //console.log(headerH);
        $('html, body').stop().animate({
            scrollTop : $($anchor.attr('href')).offset().top - headerH + "px"
        }, 1200, 'easeInOutExpo');

        event.preventDefault();
    });


    /*滚动导航栏出现*/
    window.onscroll= function () {

        var top = document.body.scrollTop;
        if(top>100){
            $('.navbar').removeClass('not-visible-nav');
        }else{
            $('.navbar').addClass('not-visible-nav');
        }
    };





    (function() {

        function initn() {
            var speed = 330,
                easing = mina.backout;

            [].slice.call ( document.querySelectorAll( '.grid > a' ) ).forEach( function( el ) {
                var s = Snap( el.querySelector( 'svg' ) ), path = s.select( 'path' ),
                    pathConfig = {
                        from : path.attr( 'd' ),
                        to : el.getAttribute( 'data-path-hover' )
                    };

                el.addEventListener( 'mouseenter', function() {
                    path.animate( { 'path' : pathConfig.to }, speed, easing );
                } );

                el.addEventListener( 'mouseleave', function() {
                    path.animate( { 'path' : pathConfig.from }, speed, easing );
                } );
            } );
        }

        initn();

    })();
/*====================视频部分=====================*/
    $(document).ready(function() {
        $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
            disableOn: false,
            type: 'iframe',
            iframe: {
                markup: '<div class="mfp-iframe-scaler">'+
                '<div class="mfp-close"></div>'+
                '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
                '<div class="mfp-title">Some caption</div>'+
                '</div>',
                patterns: {
                    youtube: {
                        index: 'youtube.com/',
                        id: 'v=',
                        src: 'http://www.youtube.com/embed/%id%?autoplay=1'
                    },
                    vimeo: {
                        index: 'vimeo.com/',
                        id: '/',
                        src: 'http://player.vimeo.com/video/%id%?autoplay=1'
                    },
                    gmaps: {
                        index: '//maps.google.',
                        src: '%id%output=embed'
                    }
                },
                srcAction: 'iframe_src',
            },
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,

            fixedContentPos: false
        });
    });

    AppShowcase.init();
})

wow = new WOW(
    {
        animateClass: 'animated',
        offset:       100
    }
);
wow.init();







