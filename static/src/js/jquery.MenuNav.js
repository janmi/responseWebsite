!function(){
    function MenuNav($){ 
        if (!$.fn.MenuNav) {
            $.fn.MenuNav = function(op){
                var $meun = $(this);
                var c = $.extend({
                    s_tag:'li',//触发器切换容器、可以是样式名称
                    s_cur:'sider-cur',//触发器切换样式
                    c_box:'.sider-type-item',//内容容器
                    c_cur:'sider-type-cur'//内容切换样式
                }, op);

                $meun.find(c.s_tag).hover(function(){
                    var id = $(this).data('id');
                    $meun.find(c.s_tag).removeClass(c.s_cur);
                    $(this).addClass(c.sr_cur);
                    $('div[data-id='+ id +']').addClass(c.c_cur);
                },function(){
                    $(this).removeClass(c.s_cur);
                    $(c.c_box).removeClass(c.c_cur);
                });

                $(c.c_box).hover(function(){
                    var id = $(this).data('id');
                    $meun.find('li[data-id='+ id +']').addClass(c.s_cur);
                    $(this).addClass(c.c_cur);
                } ,function(){
                    $meun.find('li').removeClass(c.s_cur);
                    $(this).removeClass(c.c_cur);
                });

            }
        };
        return $;
    };
    
    // RequireJS && SeaJS
    if(typeof define==="function"){
        define(function(){return MenuNav});
    // NodeJS
    }else if(typeof exports!=="undefined"){
        module.exports = MenuNav;
    }else{
        MenuNav(this.jQuery);
    }

}();



$(function(){

    $('.J_menu').MenuNav();

});
