// 팝업메시지
const pop = $('.popup');
$('.popup .close').on('click', function(){
    $(pop).hide();
});

// top
$('#top').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, 'smooth');
});

// nav 
$('nav .side ul li:nth-of-type(2)').on('click', function(){
    $('nav .side .depth2').toggle();
});
$('.ham_dep1 > li > a').click(function(e) {
    e.preventDefault();
    $(this).next('.ham_dep2').slideToggle('smooth');
    $('.ham_dep1 .ham_dep2').not($(this).next('.ham_dep2')).slideUp('smooth');
});
$('nav .side .map').on('click', () => {
    $('.sitemap').toggleClass('on');
    $('nav').toggleClass('fixed-nav')
})



// main_visual 슬라이드
const banner = new Swiper(".swiper", {
    effect: "fade",
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
      },
    scrollbar: {
        el: '.swiper-scrollbar'
    },
    autoplay: {
        delay: '5000'
    }
})


// about 
gsap.utils.toArray('.le1').forEach(item => {
    gsap.from(item, {
      x: -200, 
      autoAlpha: 0, 
      duration: 1, 
      scrollTrigger: {
        trigger: item,
        start: "top bottom", 
        toggleActions: "play none none none"
      }
    });
  });

gsap.utils.toArray('.ri2').forEach(item => {
    gsap.from(item, {
      x: 200, 
      autoAlpha: 0, 
      duration: 1, 
      scrollTrigger: {
        trigger: item,
        start: "top bottom",
        toggleActions: "play none none none"
      }
    });
  });
gsap.utils.toArray('.le2').forEach((item) => {
	gsap.from(item, {
		x: 200, // 오른쪽에서 시작
		autoAlpha: 0, // 시작 시 투명하게
		duration: 1, // 지속 시간 1초
		scrollTrigger: {
			trigger: item,
			start: 'top bottom', // 뷰포트의 아래쪽에서 시작
			toggleActions: 'play none none none',
		},
	});
});
gsap.from('.ri3', {
	x: -200, // 왼쪽에서 시작
	autoAlpha: 0, // 시작 시 투명하게
	duration: 1, // 지속 시간 1초
	scrollTrigger: {
		trigger: '.item2',
		start: 'top bottom', // 뷰포트의 아래쪽에서 시작
		toggleActions: 'play none none none',
	},
});
gsap.to('.poly2', {
	x: 700, // 왼쪽에서 시작
	autoAlpha: 1, // 시작 시 투명하게
	duration: 1, // 지속 시간 1초
	scrollTrigger: {
		trigger: $('.about .item2'),
		start: 'top bottom', // 뷰포트의 아래쪽에서 시작
		toggleActions: 'play none none none',
	},
});


// vision 
$('.vision .item > div:eq(1)').css('flex-grow', '1');

$('.vision .item > div').mouseenter(function() {
    $('.vision .item > div').css('flex-grow', '0');
    $(this).css('flex-grow', '1');
}).mouseleave(function() {
    if (!$(this).is('.vision .item')) {
        $(this).css('flex-grow', '1');
    }
});


// product
const product = $('.product .unit');
let idx2 = 0;

function slide2() { 
    product.removeClass('on'); 
    product.eq(idx2).addClass('on');
    idx2++; 
    if (idx2 >= product.length) {
        idx2 = 0; 
    };
}
slide2();

setInterval (() => {
    slide2() 
}, 5000);