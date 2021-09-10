$(function(){

    //流動
    function move(e){
        var scrollNull = $("html,body").scrollTop();
        var $windowWidth = window.innerWidth;
        if($windowWidth > 1900){
            if(scrollNull > $windowWidth*0.22){
                $(".flow-nav-1").animate({"bottom":"-8vw"}, 300)
            }else{
                $(".flow-nav-1").animate({"bottom":-$windowWidth*0.04-scrollNull*0.15}, 300)
            }
            if(scrollNull > $windowWidth*0.8){
                $(".flow-2").animate({"bottom":"-8vw"}, 300)
            }else{
                $(".flow-2").animate({"bottom":$windowWidth*0.05-scrollNull*0.15}, 300)
            }
        }
    };

    //banner切換
    $(".dot-1").click(function(){
        $(".img-nav-1").animate({"background-position-x":"0%"}, 100);
        $(".dot-1").css({"background-color":"#5E3424"}, 100)
        $(".dot-2").css({"background-color":"#ffffff"}, 100)
        $(".dot-3").css({"background-color":"#FFFFFF"}, 100)
    })
    $(".dot-2").click(function(){
        $(".img-nav-1").animate({"background-position-x":"50%"}, 100)
        $(".dot-1").css({"background-color":"#FFFFFF"}, 100)
        $(".dot-2").css({"background-color":"#5E3424"}, 100)
        $(".dot-3").css({"background-color":"#FFFFFF"}, 100)
    })
    $(".dot-3").click(function(){
        $(".img-nav-1").animate({"background-position-x":"100%"}, 100)
        $(".dot-1").css({"background-color":"#FFFFFF"}, 100)
        $(".dot-2").css({"background-color":"#ffffff"}, 100)
        $(".dot-3").css({"background-color":"#5E3424"}, 100)
    })

    function debounce(fn){
        var timerID=null
        return function(){
        var arg=arguments[0]   //获取事件
            if(timerID){
            clearTimeout (timerID)
            }
            timerID=setTimeout( function(){
            fn(arg)              //事件传入函数
            },100)
        }
    }
    
    $(document).on("scroll",debounce(move));

})

