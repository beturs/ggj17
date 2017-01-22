(function () {
    var meter = null;
    ecg = null;

    $(function () {
        var mySwiper = new Swiper ('.swiper-container', {
            direction: 'horizontal',
            loop: false,
            keyboardControl: true,
            onSlideChangeEnd: function(e) {
                console.log(e);
                if (e.activeIndex === 3) {
                    if (!ecg) {
                        window.ecg = new ECG('ecg');
                        ecg.init();
                        var canvas = $('#meter')[0];
                        meter = new Meter(canvas, 20, undefined, badStroke);
                        meter.startMeter();
                    };
                }
            }
        });
    });

    function badStroke() {
        ecg.increaseSpeed();
    }
})();