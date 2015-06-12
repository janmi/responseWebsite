/* 
* @Author: janmi
* @Date:   2015-04-21 23:42:34
* @Last Modified by:   anchen
* @Last Modified time: 2015-04-26 22:05:00
* @Email 627943558@qq.com
*/

var shs = (function(){
    var domain = location.host.replace(/(\w+\.)*(\w+\.com)/, '.$2');
    
})();


$(function(){
    
    $('.J_attention,.J_n-site-map').hover(function() {
        $(this).find('.n-cont').addClass('n-cont-cur');
    }, function() {
        $(this).find('.n-cont').removeClass('n-cont-cur');
    });

    $('#J_side').find('li').hover(function() {
        $(this).find('.tab-item').stop(true,true).delay(400).animate({opacity: 'show', left: '-90px'
},{queue:true,duration:400});
        $(this).find('a').eq(0).addClass('tab-cur');
    }, function() {
        $(this).find('.tab-item').stop(true,true).animate({left: '-140px'}, {queue:false,duration:300}).fadeOut();
        $(this).find('a').eq(0).removeClass('tab-cur');
    });

    //分类导航 
    $('.J_menu').MenuNav();

    //banner
    $(".J_banner").Xslider({
        effect: "fade",
        auto: true,
        content_box: ".banner-cont",
        content_tag: '.banner-item', 
        content_class:'banner-item-cur',
        switcher_box: ".J_b_tab",
        switcher_tag: 'a',
        active_class: "b-tab-cur",
        rand:true,
        load_type: "img",
        isCheckShow: false
    });

    // min banner
    $(".J_s_b").Xslider({
        content_box: '.J_s_p', 
        content_tag: 'li', 
        switcher_box: '.J_s_tab', 
        switcher_tag: 'a', 
        active_class: 'cur', 
        paly_index:1
    });

    //公告
    $(".J_n").Xslider({
        content_box: '.J_n_c', 
        content_tag: '.notice-cont-item', 
        switcher_box: '.J_n_tab', 
        switcher_tag: 'a', 
        active_class: 'cur', 
        paly_index:1
    });

    //最新上线/新品预告切换
    $(".J_g_n").Xslider({
        content_box: '.J_g_n_c', 
        content_tag: '.goods-cont-item', 
        switcher_box: '.J_g_n_tab',
        switcher_tag: 'a', 
        active_class: 'goods-tab-item-cur', 
        load_type: "img",
        isCheckShow: false,
        paly_index:1
    });

    //最新上线轮换
    $(".J_side_line").Xslider({
        effect:'scrollx',
        content_box: '.goods-c-i-p',
        content_tag: 'ul', 
        prev: '.J_prev', 
        next: '.J_next', 
        load_type: "img",
        isCheckShow: false
    });

    //新品预告轮换
    $(".J_side_new").Xslider({
        effect:'scrollx',
        content_box: '.goods-c-i-p', 
        content_tag: 'ul', 
        prev: '.J_prev', 
        next: '.J_next',
        load_type: "img",
        isCheckShow: false
    });
    
    //潮流穿搭、生活百货、母婴用品
    var objStr = ['J_fashion_type', 'J_life_type', 'J_infant_type'];
    for (var i = 0; i < objStr.length; i++) {
        $("."+objStr[i]).Xslider({
            content_box: '.J_g_t_cont', //内容容器id或class
            content_tag: '.md-warp-cont-item', //内容标签 默认为<li>
            switcher_box: '.J_g_t_tab', //切换触发器id或class
            switcher_tag: 'li', //切换器标签 默认为<li>
            active_class: 'cur', //当前切换器样式名称 不含"."
            load_type: "img",
            isCheckShow: false,
            paly_index:1
        });
    };

    //省钱达人
    $(".J_expert").Xslider({
        content_box: '.J_e_cont', 
        content_tag: 'ul', 
        switcher_box: '.J_e_tab', 
        switcher_tag: 'a', 
        active_class: 'expert-save-tab-cur', 
        load_type: "img",
        isCheckShow: false,
        paly_index:2
    });

    $(window).resize(function() {
        $('#J_r_sidebar').height($(window).height());
    });
    $(window).resize();





})
