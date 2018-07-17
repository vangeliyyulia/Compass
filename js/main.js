$(".form").submit(function() {
	$.ajax({
		type: "POST",
		url: "mail.php",
		data: $(this).serialize()
	}).done(function() {
		alert("Спасибо за заявку!");
		setTimeout(function() {
			$(".form").trigger("reset");
		}, 1000);
	});
	return false;
});

jQuery(document).ready(function() {
    jQuery('.menu-link').click(function(e) {
    jQuery(this).toggleClass('active');
    jQuery('.header__list').toggleClass('active').slideDown(3000);
    e.preventDefault();
    });
});

$(document).ready(function() {
    $('.arrow-down').click(function(){
    $('html, body').animate({scrollTop:$('.advantages').height() + 20}, 'slow');
    return false;
    });
});

$(".section-heading, .moving__img-wrapper, .about__heading, .property__card").animated("fadeIn");
$(".header__heading--main, .section-center, .about__card--left").animated("fadeInLeft");
$(".header__heading--sub, .about__card--right").animated("fadeInRight");
$(".section-top, .form__input, .header__heading--inner, .contacts__source").animated("fadeInDown");
$(".section-down, .btn-wrapper, .form__sent").animated("fadeInUp");
$(".move__img").animated("bounceIn");

$(".advantages").waypoint(function() {
	$(".advantages__item").each(function(index) {
		var ths = $(this);
		setInterval(function() {
			ths.addClass("on");
		}, 200*index);
	});
}, {
	offset : "30%"
});

$(".reviews__slider").owlCarousel({
	items : 1,
	nav : true,
	navText : "",
	loop : true,
	autoplay : false,
	autoplayHoverPause : true,
	fluidSpeed : 600,
	autoplaySpeed : 600,
	navSpeed : 600,
	dotsSpeed : 600,
	dragEndSpeed : 600
});

$(".reviews__item").animated("fadeIn");

$(".top").click(function() {
	$("html, body").animate({ scrollTop: 0 }, "slow");
	return false;
});



