// 팝업메시지
const pop = $('.popup');
$('.popup .close').on('click', function(){
    $(pop).hide(500);
});

// about 
// le1 클래스를 가진 요소들에 대한 애니메이션
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

  // ri2 클래스를 가진 요소들에 대한 애니메이션
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

  // le2 클래스를 가진 요소들에 대한 애니메이션 설정
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
/* 수정 */
// ri3 클래스를 가진 요소들에 대한 애니메이션 설정
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
		trigger: 'item2',
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


// sns
const sns = $('.sns .daily .cont')