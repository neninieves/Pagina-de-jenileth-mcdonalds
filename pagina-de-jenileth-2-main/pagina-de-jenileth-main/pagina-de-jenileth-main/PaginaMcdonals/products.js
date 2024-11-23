$(document).ready(function() {
    $('.nav-link').hover(function() {
        $(this).css('color', '#FFC107');
    }, function() {
        $(this).css('color', 'white');
    });

    $('.add-to-cart').on('click', function() {
        
        $('#toast').toast({ delay: 3000 });
        $('#toast').toast('show');
        
    
    });

    
    $('.toast').toast({ autohide: true, delay: 3000 });

        
        $('.nav-link').hover(
            function() {
                $(this).css({
                    'transform': 'scale(1.1) translateY(-5px)',
                    'color': '#dc3545',
                    'transition': 'all 0.3s ease'
                });
            },
            function() {
                $(this).css({
                    'transform': 'scale(1) translateY(0)',
                    'color': 'inherit',
                    'transition': 'all 0.3s ease'
                });
            }
        );

        
    $('.link-net svg').hover(
        function() {
            $(this).css({
                'transform': 'rotate(360deg) scale(1.2)',
                'transition': 'all 0.5s ease'
            });
        },
        function() {
            $(this).css({
                'transform': 'rotate(0deg) scale(1)',
                'transition': 'all 0.5s ease'
            });
        }
    );

    $('.modal-content').addClass('rotate-hover');

    $('#carouselExampleAutoplaying').carousel({
        interval: 3000 // Tiempo en milisegundos (3 segundos entre cada slide)
    });

    $('.diamond').hover(
        function () {
        $(this).css('transform', 'rotate(225deg)');
        },
        function () {
        $(this).css('transform', 'rotate(45deg)');
        }
    );
});