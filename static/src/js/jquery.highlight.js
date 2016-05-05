(function(root, factory){
    if ( typeof define === 'function') {
        return define([], factory);
    }else if (exports === 'object') {
        module.exports === factory;
    }else{
        root.fn.highlight == factory();
    }
}($, function(){
    'use strict';
    if (!$.fn.highlight) {
        $.fn.highlight = function(atr){
            var atr =  atr || 'href'; //默认获取选择器属性
            var atrArr = [];
            var self = $(this).find('a');
            //获取选择器
            self.each(function(index, el) {
                atrArr.push($(this).attr(atr));
            });

            //执行函数
            var f = function(){
                var t = $(window).scrollTop();
                var b = t+$(window).height();
                for (var i = 0; i < atrArr.length; i++) {
                    var h_t = $(atrArr[i]).offset().top;
                    var h_b = h_t + $(atrArr[i]).height();

                    if(h_t >= t && h_t <= b && h_b <= b){//包含
                        self.removeClass('cur').eq(i).addClass('cur');
                        break;//第一个包含的内容以第一个为当前高亮
                    }else{
                        if(
                            (h_t >= t && h_t <= b )// 露头
                            || (h_b >= t && h_b <= b )// 露尾
                            || (h_t <= t && h_b >= b )// 局部
                        ){
                            self.removeClass('cur').eq(i).addClass('cur');
                        }
                    }
                };
            };

            //窗口改变执行函数
            f();
            $(window).scroll(f);

            return this;//返回this使其可以链式操作
        }
    };
}))