$(document).ready(function() {
    // iconoes de redes sociales giratiros
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

    //efectos en los enlaces de navegacion
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

    // contador regresivo
    const wrestleManiaDate = new Date('April 20, 2025 19:00:00').getTime();
    let countdownInterval = null;

    function formatTime(time) {
        return time < 10 ? '0' + time : time;
    }

    function updateCountdown() {
        const now = new Date().getTime();
        const timeLeft = wrestleManiaDate - now;

        if (timeLeft < 0) {
            clearInterval(countdownInterval);
            $('#wrestlemania-countdown').html('<h4>WrestleMania 41 has begun!</h4>');
            return;
        }

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        // crearlo si no existe
        if ($('#wrestlemania-countdown').length === 0) {
            $('.img[alt="Wrestlemania 2024"]').after(`
                <div id="wrestlemania-countdown" class="text-center mt-3" 
                     style="display:none; background-color: rgba(0,0,0,0.8); color: white; padding: 15px; border-radius: 10px;">
                    <h4>MC 2024</h4>
                    <div class="countdown-timer d-flex justify-content-center gap-3">
                        <div class="text-center">
                            <strong>${formatTime(days)}</strong>
                            <div>Days</div>
                        </div>
                        <div class="text-center">
                            <strong>${formatTime(hours)}</strong>
                            <div>Hours</div>
                        </div>
                        <div class="text-center">
                            <strong>${formatTime(minutes)}</strong>
                            <div>Minutes</div>
                        </div>
                        <div class="text-center">
                            <strong>${formatTime(seconds)}</strong>
                            <div>Seconds</div>
                        </div>
                    </div>
                </div>
            `);
        }

        // actualizar los valores del conteo
        $('.countdown-timer strong').each(function(index) {
            const values = [days, hours, minutes, seconds];
            $(this).text(formatTime(values[index]));
        });
    }

    // click en imagen de wrestlemania
    $('.img[alt="Wrestlemania 2024"]').click(function() {
        const $countdown = $('#wrestlemania-countdown');
        
        // Clear any existing interval
        if (countdownInterval) {
            clearInterval(countdownInterval);
        }

        if ($countdown.is(':visible')) {
            $countdown.slideUp();
        } else {
            $countdown.slideDown();
            updateCountdown(); // Initial update
            countdownInterval = setInterval(updateCountdown, 1000);
        }

        // Add visual feedback
        $(this).css({
            'transform': 'scale(1.05)',
            'transition': 'transform 0.3s ease'
        });
    });

    // Additional Visual Interactions
    $('.img-raw-smackdown').hover(
        function() {
            $(this).css({
                'transform': 'scale(1.05) rotate(2deg)',
                'box-shadow': '0 10px 20px rgba(0,0,0,0.3)',
                'transition': 'all 0.4s ease'
            });
        },
        function() {
            $(this).css({
                'transform': 'scale(1) rotate(0deg)',
                'box-shadow': 'none',
                'transition': 'all 0.4s ease'
            });
        }
    );

    // interaccion con el mapa de desempeno
    $('iframe').hover(
        function() {
            $(this).css({
                'transform': 'scale(1.02)',
                'box-shadow': '0 15px 30px rgba(0,0,0,0.2)',
                'transition': 'all 0.4s ease'
            });
        },
        function() {
            $(this).css({
                'transform': 'scale(1)',
                'box-shadow': 'none',
                'transition': 'all 0.4s ease'
            });
        }
    );

    // Add Custom CSS for Additional Styling
    $('head').append(`
        <style>
            @keyframes pulse {
                0% { transform: scale(1); }
                50% { transform: scale(1.05); }
                100% { transform: scale(1); }
            }
            
            .nav-link {
                transition: all 0.3s ease;
                display: inline-block;
            }
        </style>
    `);
});