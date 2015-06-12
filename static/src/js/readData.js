$(function(){
    var read = function(){
        return {
            /*初始化模版、读取数据*/
            init:function(){
                var self = this;
                $.getJSON('static/src/data/data.json', function(data) {
                    self.tplLine(data);
                    self.floorOne(data);
                    new Layzr();
                });
            },  
            loadImg:function(arr){
                for (var i = 0; i < arr.length; i++) {
                    $('.'+arr[i]).find('img').each(function() {
                        var $self = $(this);
                        if ($self.attr('data-url')) {
                            $self.attr('src', $self.data('url')).removeAttr('data-url');
                        }
                    });
                };
            },          
            /* 渲染最新上线 、新品预告*/
            tplLine:function(ret){
                var newline = ret.newline;
                var newgoods = ret.newgoods;
                var str_line = template('T_Newline', {'newline': newline.slice(0,5)});
                var str_goods = template('T_Newgoods', {'newgoods': newgoods.slice(0,5)});
                $('.J_newline').html(str_line);
                $('.J_newgoods').html(str_goods);
                if (newline.length > 5) {
                    var str_line2 = template('T_Newline', {'newline': newline.slice(5,newline.length)});
                    $('.J_newline').siblings('ul').html(str_line2);
                };
                if (newgoods.length > 5) {
                    var str_goods2 = template('T_Newgoods', {'newgoods': newgoods.slice(5,newgoods.length)});
                    $('.J_newgoods').siblings('ul').html(str_goods2);
                };
            },
            /* 渲染一楼 */
            floorOne:function(ret){
                var clnz_bn = ret.floor_clnz.banner;
                var clnz_goods = ret.floor_clnz.goods;
                var str_bn = template('T_clnz_bn', {'clzn_bn': clnz_bn});
                var str_goods = template('T_clnz_goods', {'clnz_goods': clnz_goods});
                $('.J_clzn_bn').html(str_bn);
                $('.J_clzn_goods').html(str_goods);
            },
            floorTwo:function(ret){

            }
        }
    }().init();
})   
