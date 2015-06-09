//插件
(function ($, window) {
    var $window = $(window);
    $.fn.Xslider = function (options) {  //选项卡、焦点图、事件触发加载图片
        var settings = $.extend({
            effect: 'none', //效果  有scrollx|scrolly|fade|none
            speed: 300, //动画速度
            space: 6000, //时间间隔
            auto: false, //自动滚动
            trigger: 'mouseover', //触发事件 注意用mouseover代替hover
            content_box: '.contents', //内容容器id或class
            content_tag: 'li', //内容标签 默认为<li>
            content_class:'',
            switcher_box: '.switchers', //切换触发器id或class
            switcher_tag: 'li', //切换器标签 默认为<li>
            active_class: 'active', //当前切换器样式名称 不含"."
            prev: '.prev', //上一个幅箭头样式名称
            next: '.next', //下一个幅箭头样式名称
            /*
             *TODO  不倒序滚动
             *recycle:true,
             */
            rand: false, //是否随机指定默认幻灯页
            paly_index:0,//默认播放第几张
            index: '', //是否显示索引 1、容器id或class(1/5) || 2、list( 1,2,3,4,5 )添加到 switcher_box: '.switchers' 容器；切换器标签 switcher_tag: 'li'
            load_type: false,//加载图片 有img|textarea|false
            callback_fn: null, //回调函数 返回内容索引
            isCheckShow: true //判断是否处于可视区域才切换
        }, options);

        var index = 1;
        var last_index = 0;
        var $content_box = $(this).find(settings.content_box), $contents = $content_box.find(settings.content_tag);
        var $switcher = $(this).find(settings.switcher_box);
        if ($content_box.length < 1) {
            return false;
        }
        var content_pos = $content_box.position();
        var content_left = content_pos.left;
        var content_top = content_pos.top;



        if (settings.effect == 'fade') {
            $.each($contents, function (k, v) {
                (k == 0) ? $(this).css({'position': 'absolute', 'z-index': 10}) : $(this).css({'position': 'absolute', 'z-index': 1});
            });
        }

        //添加索引值(1,2,3,4,5)
        if (settings.index === 'list') {
            var temp = '';
            for (var i = 1; i <= $contents.length; i++) {
                i === 1 ? temp += '<' + settings.switcher_tag + ' class="' + settings.active_class + '" >' + i + '</' + settings.switcher_tag + '>' : temp += '<' + settings.switcher_tag + '>' + i + '</' + settings.switcher_tag + '>';
            }
            $switcher.html(temp);
        }

        var $switcher_tag = $switcher.find(settings.switcher_tag);

        function slide() {
            if (settings.isCheckShow) {
                var st = $(window).scrollTop(), sth = st + $(window).height();
                var $self = $(settings.content_box);
                var positionTop = $self.position().top;
                posb = positionTop + $self.height();
                if ((positionTop >= st && positionTop < sth) || (posb > st && posb < sth)) {
                    slideShow();
                }
            } else {
                slideShow();
            }
        }

        function slideShow() {
            imgData();
            if (index >= $contents.length) index = 0;
            $switcher_tag.removeClass(settings.active_class).eq(index).addClass(settings.active_class);
            $(settings.content_tag).removeClass(settings.content_class).eq(index).addClass(settings.content_class);
            switch (settings.effect) {
                case 'scrollx':
                    $content_box.width($contents.length * $contents.outerWidth());
                    var l = content_left - $contents.width() * index;
                    $content_box.stop().animate({left: l}, settings.speed);
                    break;
                case 'scrolly':
                    var t = content_top - $contents.height() * index;
                    $content_box.stop().animate({top: t}, settings.speed);
                    break;
                case 'fade':
                    $contents.eq(last_index).stop(true, true).fadeOut(settings.speed).end().eq(index).stop(true, true).fadeIn(settings.speed);
                    break;
                case 'none':

                    $contents.hide().eq(index).show();
                    break;
            }
            if (typeof settings.callback_fn === 'function') {
                settings.callback_fn(index);
            }
            last_index = index;
            index++;
            indexSum();
        }

        var indexSum = function () {
            if ($(settings.index).length > 0) {
                $(settings.index).html(('<em class="index">' + index + '</em>/<em class="count">' + $contents.length + '</em>'));
            }
        };
        indexSum();

        function imgData() {
            if (settings.load_type) {
                var $tempDate = $contents.eq(index).find(settings.load_type);
                switch (settings.load_type) {
                    case 'img':
                        $tempDate.each(function () {
                            var $self = $(this);
                            if ($self.attr('data-url')) {
                                $self.attr('src', $self.data('url')).removeAttr('data-url');
                            }
                        });
                        break;
                    case 'textarea':
                        $tempDate.css('visibility', 'hidden');
                        if ($tempDate.css('display') != 'none') {
                            $tempDate.before($tempDate.val()).hide();
                        }
                        break;
                }
            }
        }

        if (settings.rand) {
            index = Math.floor(Math.random() * $contents.length);
            slide();
        }

        if (settings.paly_index > 0 ) {
            index = settings.paly_index-1;
            slide();
        }

        if (settings.auto) var Timer = setInterval(slide, settings.space);
        $switcher_tag.bind(settings.trigger, function () {
            if ($(this).hasClass(settings.active_class)) return false;
            _pause();
            index = $(this).index();
            slide();
            _continue();
        });

        $(this).find(settings.prev).click(function () {
            _pause();
            if (!last_index) return;
            index = --last_index;
            slide();
            _continue();
        });

        $(this).find(settings.next).click(function () {
            _pause();
            slide();
            _continue();
        });

        $content_box.hover(_pause, _continue);
        function _pause() {
            clearInterval(Timer);
        }

        function _continue() {
            if (settings.auto) Timer = setInterval(slide, settings.space);
        }

        return this;
    }
})(jQuery, window);


$(function(){
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
})