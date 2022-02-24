//设置随机函数
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

//使用函数生成范围内随机数字
var num = getRndInteger(1,50)

//拼接后缀名
var path = num + ".png"

//生成链接
var url = "http://example.com/" + path

//重定向至链接
window.location.replace(url)