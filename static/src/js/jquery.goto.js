/* 
 * @Author: janmi
 * @Date:   2015-06-14 16:00:33
 * @Last Modified by:   anchen
 * @Last Modified time: 2015-06-14 17:21:30
 */

(function(root, factory) {
    if (typeof define === 'function') {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        root.fn.goto = factory();
    }
})($, function() {
    'use strict';
    if (!$.fn.goto) {
        $.fn.goto = function(atr, iscur, cur){
            var self = $(this).find('a');
            self.bind('click', function(event) {
                var floor = $(this).attr(atr);
                var t = /^#backTop/.test(floor) ? 0 : $(floor).offset().top;
                
                addCur.call($(this), iscur);

                $('html,body').animate({scrollTop:t}, 400);
                return false;
            });

            function addCur(iscur){
                var curClass = cur || 'cur';
                if (iscur) {
                    this.addClass(curClass).siblings().removeClass(curClass);
                };
            }

            return this;
        }
    };
})