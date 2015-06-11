$(function(){
    var read = function(){
        return {
            /*初始化模版、读取数据*/
            init:function(){
                var self = this;
                $.getJSON('static/src/data/data.json', function(data) {
                    self.tplLine(data);
                });
            },            
            /* 渲染最新上线 */
            tplLine:function(ret){
                var newline = ret.newline;
                var str = template('artNewline', {'newline': newline.slice(0,5)});
                $('.J_newline').html(str);
                if (newline.length > 5) {
                    var str2 = template('artNewline', {'newline': newline.slice(5,newline.length)});
                    var tpl = $('<ul></ul>',{class:'md-warp-cont'}).html(str2);
                    $('.J_newline').siblings('ul').html(str2);
                };
            }
        }
    }().init();
})   
