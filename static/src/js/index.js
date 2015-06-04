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
        $(this).find('.tab-item').stop(true).delay(400).animate({opacity: 'show', left: '-90px'
},{queue:true,duration:400});
        $(this).find('a').eq(0).addClass('tab-cur');
    }, function() {
        $(this).find('.tab-item').stop(true).animate({left: '-140px'}, {queue:false,duration:300}).fadeOut();
        $(this).find('a').eq(0).removeClass('tab-cur');
    });
})