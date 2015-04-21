/* 
* @Author: janmi
* @Date:   2015-04-21 23:42:34
* @Last Modified by:   anchen
* @Last Modified time: 2015-04-21 23:53:15
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
})