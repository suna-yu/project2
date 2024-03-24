// const pop = $('.popup');

// $('.popup .close').on('click', function(){
//     $(pop).hide(500);
// });

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
