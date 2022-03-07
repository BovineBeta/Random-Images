//让DOM加载完在加载本脚本
window.onload=function(){
    
    //设置随机函数
    function getRndInteger(min, max) {
        return Math.floor(Math.random() * ((max + 1) - min)) + min;
    }

    //使用函数生成范围内随机数字
    var num = getRndInteger(1,100);

    //拼接后缀名
    var path = num + ".png";

    //生成链接
    var url = "http://example.com/" + path;

    //获取目标id
    var rdi = document.getElementById("randomimages");

    //修改DOM
    rdi.src = url;

    //如果只是想跳转, 则重定向至链接
    //window.location.replace(url); 
}
