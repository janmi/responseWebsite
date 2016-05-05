var seajsTimestamp = new Date().getTime();

seajs.config({
    /* 基础路径 */
    base: "/responseWebsite/",

    /* js调用别名配置 */
    alias: {
        "placeholder": "static/src/js/libs/jquery.placeholder",
        "template": "static/src/js/libs/template",
        "xslider":"static/src/js/jquery.xslider",
        "goto":"static/src/js/jquery.goto",
        "highlight":"static/src/js/jquery.highlight",
        "menunav":"static/src/js/jquery.MenuNav",
        "Layzr":"static/src/js/libs/Layzr",
        "sea-debug":"static/src/js/libs/seajs/sea-debug"
    },

    /* 路径映射、添加版本号 */
    map: [
        [/^(.*\.(?:css|js|tpl))(.*)$/i, '$1?' + seajsTimestamp]
    ],

    /* 预加载项目 */
    preload: ['template', 'xslider', 'menunav', 'Layzr'],

    // 调试模式
    debug: false
})