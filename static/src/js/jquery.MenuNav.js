!function(){
    function MenuNav($){ 
        if (!$.fn.MenuNav) {
            $.fn.MenuNav = function(op){
                var $meun =$(this);
                var category = $('.J_category').find('.sider-type-item');
                var c = $.extend({
                    curClass:'sider-cur',
                    curCategory:'sider-type-cur'
                }, op);
                $meun.find('li').hover(function(){
                    var id = $(this).data('id');
                    $meun.removeClass(c.curClass);
                    $(this).addClass(c.curClass);
                    $('div[data-id='+ id +']').addClass(c.curCategory);
                },function(){
                    $(this).removeClass(c.curClass);
                    category.removeClass(c.curCategory);
                });
                category.hover(function(){
                    var id = $(this).data('id');
                    $meun.find('li[data-id='+ id +']').addClass(c.curClass);
                    $(this).addClass(c.curCategory);
                } ,function(){
                     $meun.find('li').removeClass(c.curClass);
                    $(this).removeClass(c.curCategory);
                });

            }
        };
        return $;
    };

    MenuNav(this.jQuery);
}();



$(function(){
    $('.J_menu').MenuNav();

});
