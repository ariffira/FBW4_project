$('.button').mouseenter(function () {

    $("i", this).toggleClass("fa-chevron-right fa-chevron-down");
});
jQuery(document).ready(function () {
    jQuery('.skillbar').each(function () {
        jQuery(this).find('.skillbar-bar').animate({
            width: jQuery(this).attr('data-percent')
        }, 5000);
    });
});
//jquery animations

$(document).ready(() => {
    $(window).scroll(() => {
        var scrollPosition = $(document).scrollTop();
        console.log(Math.floor(scrollPosition));
        if ((scrollPosition > 500) && (scrollPosition < 900)) {
            $(".fast").fadeIn(1000);
            $(".inti").fadeIn(1500);
            $(".resp").fadeIn(2000);
            $(".dynm").fadeIn(2500);
        } else if ((scrollPosition > 900) && (scrollPosition < 1400)) {
            $(".info").animate({ left: 0 }, "slow");
            $(".skills").fadeIn(1500);
        }
        else if ((scrollPosition > 500) && (scrollPosition < 680)) {

            $(".head-about").animate({ left: 0 }, 700);

            $(".header-bar").animate({ left: 0 }, 900);
        } else if ((scrollPosition > 1300) && (scrollPosition < 1700)) {
            $(".head-projects").animate({ left: 0 }, 700);
            $(".header-bar2").animate({ left: 0 }, 900);
        } else if ((scrollPosition > 1800) && (scrollPosition < 2200)) {
            $(".head-contact").animate({ left: 0 }, 700);
            $(".header-whiteBar").animate({ left: 0 }, 900);
        }
    });
});
$(document).ready(() => {
    $(".workbox1").mouseenter(() => {
        $(".workbox1").css({ background: 'yellow' });
        $(".text-workbox1").css({ visibility: 'visible' });
        $('.text-workbox1').animate({ top: 100 }, 500);
        $(".learnbtn1").css({ visibility: 'visible' });
        $(".learnbtn1").animate({ bottom: 70 }, 500);
    });
    $(".workbox1").mouseleave(() => {
        $(".workbox1").css({ background: '#5bc0de' });
        $('.text-workbox1').animate({ top: 0 }, 500);
        $(".learnbtn1").animate({ bottom: 0 }, 500);
    });
});
$(document).ready(() => {
    $(".workbox2").mouseenter(() => {
        $(".workbox2").css({ background: 'yellow' });
        $(".text-workbox2").css({ visibility: 'visible' });
        $('.text-workbox2').animate({ top: 100 }, 500);
        $(".learnbtn2").css({ visibility: 'visible' });
        $(".learnbtn2").animate({ bottom: 70 }, 500);
    });
    $(".workbox2").mouseleave(() => {
        $(".workbox2").css({ background: 'silver' });
        $('.text-workbox2').animate({ top: 0 }, 500);
        $(".learnbtn2").animate({ bottom: 0 }, 500);
    });
});
$(document).ready(() => {
    $(".workbox3").mouseenter(() => {
        $(".workbox3").css({ background: 'yellow' });
        $(".text-workbox3").css({ visibility: 'visible' });
        $('.text-workbox3').animate({ top: 100 }, 500);
        $(".learnbtn3").css({ visibility: 'visible' });
        $(".learnbtn3").animate({ bottom: 70 }, 500);
    });
    $(".workbox3").mouseleave(() => {
        $(".workbox3").css({ background: '#f9f9f9' });
        $('.text-workbox3').animate({ top: 0 }, 500);
        $(".learnbtn3").animate({ bottom: 0 }, 500);
    });
})
$('#scrollTop').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 1000);
});
$(".button").click(function () {
    $('html, body').animate({
        scrollTop: $("#abilities").offset().top
    }, 1000);
});
$(".contactitem").click(function () {
    $('html, body').animate({
        scrollTop: $("#contact").offset().top
    }, 1000);
});
$(".projectsitem").click(function () {
    $('html, body').animate({
        scrollTop: $("#myWorks").offset().top
    }, 1000);
});
$(".aboutitem").click(function () {
    $('html, body').animate({
        scrollTop: $("#abilities").offset().top
    }, 1000);
});
$('.homeitem').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 1000);
});

$(document).ready(() => {
    $(window).scroll(() => {
        var scrollPosition = $(document).scrollTop();
        if (scrollPosition === 0) {
            $(".aboutitem ").css({ color: 'grey' });
            $(".contactitem ").css({ color: 'grey' });
            $(".projectsitem ").css({ color: 'grey' });
        }
        if ((scrollPosition > 500) && (scrollPosition < 1100)) {
            $(".aboutitem ").css({ color: '#E31B6D' }, 500);
            $(".contactitem ").css({ color: 'grey' }, 500);
            $(".projectsitem ").css({ color: 'grey' }, 500);
        }
        else if ((scrollPosition > 1700) && (scrollPosition < 2000)) {
            $(".projectsitem ").css({ color: '#E31B6D' }, 500);
            $(".aboutitem ").css({ color: 'grey' }, 500);
            $(".contactitem ").css({ color: 'grey' }, 500);

        }
        else if ((scrollPosition > 2500) && (scrollPosition < 2600)) {
            $(".contactitem ").css({ color: '#E31B6D' }, 500);

            $(".projectsitem ").css({ color: 'grey' }, 500);
            $(".aboutitem ").css({ color: 'grey' }, 500);
        }
    });
});