$(function(){
    function move(e){

        var scrollNull = $("html,body").scrollTop();
        var $windowWidth = window.innerWidth
        console.log(scrollNull);
        // MENU效果
        if($windowWidth > 1024){
            if( scrollNull < 50 ){
                $(".nav-1").css("background-color","#4C2A1D00");
                $(".nav-1").hover(function(){
                    $(".nav-1").css("background-color","#4C2A1DD1");
                },function(){
                    $(".nav-1").css("background-color","#4C2A1D00");
                })
            }else{
                $(".nav-1").css({"background-color":"#4C2A1DD1"})
            }
        }else{
            if( scrollNull <= 0 ){
                $(".nav-1").css("background-color","#4C2A1D");
                $(".nav-1").hover(function(){
                    $(".nav-1").css("background-color","#4C2A1D");
                },function(){
                    $(".nav-1").css("background-color","#4C2A1D");
                })
            }else{
                $(".nav-1").css({"background-color":"#4C2A1DD1"})
            }
        }
    
        //圖片滑動組合    
        $(".img-4-1").click(function(){
            $(".img-4-1").css({"height":"53vw"}, 0);
            $(".img-4-2").css({"width":"53vw","height":"26vw","left":"27vw","top":"0vw"}, 0);
            $(".img-4-3").css({"width":"26vw","left":"27vw"}, 0);
            $(".img-4-4").css({"width":"26vw","height":"53vw","left":"54vw","top":"27vw"}, 0);
            $(".img-4-5").css({"width":"26vw","height":"26vw","left":"0vw","top":"54vw"}, 0);
            $(".img-4-6").css({"width":"26vw","height":"26vw","left":"27vw","top":"54vw"}, 0);
        });
        $(".img-4-2").click(function(){
            $(".img-4-1").css({"width":"26vw","height":"26vw","left":"0vw","top":"0vw"}, 0);
            $(".img-4-2").css({"width":"53vw","height":"53vw","left":"27vw"}, 0);
            $(".img-4-3").css({"width":"26vw","height":"26vw","top":"27vw","left":"0vw"}, 0);
            $(".img-4-4").css({"width":"26vw","height":"26vw","left":"54vw","top":"54vw"}, 0);
            $(".img-4-5").css({"width":"26vw","height":"26vw","left":"0vw","top":"54vw"}, 0);
            $(".img-4-6").css({"width":"26vw","height":"26vw","left":"27vw","top":"54vw"}, 0);
        });
        $(".img-4-3").click(function(){
            $(".img-4-1").css({"height":"0vw"}, 0);
            $(".img-4-2").css({"width":"26vw","height":"26vw","left":"54vw"}, 0);
            $(".img-4-3").css({"width":"53vw","height":"53vw","top":"0vw","left":"0vw"}, 0);
            $(".img-4-4").css({"width":"26vw","height":"53vw","left":"54vw","top":"27vw"}, 0);
            $(".img-4-5").css({"width":"26vw","height":"26vw","left":"0vw","top":"54vw"}, 0);
            $(".img-4-6").css({"width":"26vw","height":"26vw","left":"27vw","top":"54vw"}, 0);
        });
        $(".img-4-4").click(function(){
            $(".img-4-1").css({"width":"26vw","height":"26vw","left":"0vw","top":"0vw"}, 0);
            $(".img-4-2").css({"width":"53vw","height":"26vw","left":"27vw","top":"0vw"}, 0);
            $(".img-4-3").css({"width":"26vw","height":"26vw","left":"0vw","top":"27vw"}, 0);
            $(".img-4-4").css({"width":"53vw","height":"53vw","left":"27vw","top":"27vw"}, 0);
            $(".img-4-5").css({"width":"26vw","height":"26vw","left":"0vw","top":"54vw"}, 0);
            $(".img-4-6").css({"width":"0vw","height":"26vw","left":"27vw","top":"54vw"}, 0);
        });
        $(".img-4-5").click(function(){
            $(".img-4-1").css({"width":"26vw","height":"26vw","left":"0vw","top":"0vw"}, 0);
            $(".img-4-2").css({"width":"53vw","height":"26vw","left":"27vw","top":"0vw"}, 0);
            $(".img-4-3").css({"width":"53vw","height":"26vw","left":"0vw","top":"27vw"}, 0);
            $(".img-4-4").css({"width":"26vw","height":"53vw","left":"54vw","top":"27vw"}, 0);
            $(".img-4-5").css({"width":"26vw","height":"26vw","left":"0vw","top":"54vw"}, 0);
            $(".img-4-6").css({"width":"26vw","height":"26vw","left":"27vw","top":"54vw"}, 0);
        });
        $(".img-4-6").click(function(){
            $(".img-4-1").css({"width":"26vw","height":"26vw","left":"0vw","top":"0vw"}, 0);
            $(".img-4-2").css({"width":"53vw","height":"26vw","left":"27vw","top":"0vw"}, 0);
            $(".img-4-3").css({"width":"26vw","height":"26vw","left":"0vw","top":"27vw"}, 0);
            $(".img-4-4").css({"width":"26vw","height":"53vw","left":"54vw","top":"27vw"}, 0);
            $(".img-4-5").css({"width":"26vw","height":"26vw","left":"0vw","top":"54vw"}, 0);
            $(".img-4-6").css({"width":"26vw","height":"53vw","left":"27vw","top":"27vw"}, 0);
        });
    };

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
