

$(".next").click(function(){
    $(".part1").hide();
    $(".part2").show();
    $(".step .weui-flex__item").eq(1).addClass("on");
})

$(".registerBtn").click(function(){
    $(".part2").hide();
    $(".part3").show();
    $(".step .weui-flex__item").eq(2).addClass("on");
})

$(".forwardBtn").click(function(){
    $(".part2").hide();
    $(".part1").show();
    $(".step .weui-flex__item").eq(1).removeClass("on");
})

var time=$("#times").html();
console.log($("#times"));
var judge=setInterval(function(){
    time=time--;
    $("#times").html(time);
    if(time<0){
        clearInterval(judge);
        Location.href("www.baidu.com");
    }
},1000)


