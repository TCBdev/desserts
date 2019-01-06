$('.counter').each(function () {
    var $this = $(this),
        countTo = $this.attr('data-count').toLocaleString('en');

    $({
        countNum: $this.text()
    }).animate({
            countNum: countTo
        },

        {
            duration: 3750,
            easing: 'linear',
            step: function () {
                $this.text(Math.floor(this.countNum));
            },
            complete: function () {
                $this.text(this.countNum);
            }
        });
});

/*
-----------------------------
S C R O L L R E V E A L
-----------------------------
*/

window.sr = ScrollReveal();
sr.reveal('.reveal1', {
    duration: 2000,
    delay: 250,
    reset: true,
    useDelay: 'always',
    origin: 'bottom',
    distance: '30px'
})
sr.reveal('.reveal2', {
    duration: 2000,
    delay: 500,
    reset: true,
    useDelay: 'always',
    origin: 'bottom',
    distance: '30px'
})
sr.reveal('.reveal3', {
    duration: 2000,
    delay: 750,
    reset: true,
    useDelay: 'always',
    origin: 'bottom',
    distance: '30px'
})
sr.reveal('.reveal4', {
    duration: 2000,
    delay: 1000,
    reset: true,
    useDelay: 'always',
    origin: 'bottom',
    distance: '30px'
})
sr.reveal('.reveal5', {
    duration: 2000,
    delay: 1250,
    reset: true,
    useDelay: 'always',
    origin: 'bottom',
    distance: '10px'
});