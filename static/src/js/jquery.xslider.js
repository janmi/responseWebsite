$(function(){
    var $bg = $('.J_banner');
    var $bn = $('.J_bn').find('li');
    var b_cur = 'b-cur';
    var t_cur = 'b-tab-cur';
    var i = 0;
    var cr = $bn.eq(i).data('color');

    $bn.eq(i).addClass(b_cur);
    $('.J_b_tab').find('a').eq(i).addClass(t_cur);
    $bg.css('background-color', cr);

    $('.J_b_tab').find('a').hover(function() {
        i = $(this).index();
        cr = $bn.eq(i).data('color');
        $(this).siblings('a').removeClass(t_cur)
        $(this).addClass(t_cur);
        $bn.removeClass(b_cur).eq(i).addClass(b_cur);
        $bg.css('background-color', cr);
    });  

})