$(function(){

    var $bn = $('.J_banner').find('.banner-item');
    var b_cur = 'banner-item-cur';
    var t_cur = 'b-tab-cur';
    var i = 0;

    $bn.eq(i).css('display','block').animate({opacity: 1, zIndex:'10'}, 2000, 'swing');
    $('.J_b_tab').find('a').eq(i).addClass(t_cur);

    $('.J_b_tab').find('a').hover(function() {
        i = $(this).index();
        $(this).siblings('a').removeClass(t_cur);
        $(this).addClass(t_cur);
        $bn.eq(i).css('display','block').animate({opacity: 1, zIndex:'10'}, 2000, 'swing');
        $bn.eq(i).siblings('.banner-item').css({opacity: 0, display: 'none', zIndex:'1'});
    });

})