$(function(){
    $(".burgerMenu").click(function(){
        var $menu01 = $(".menuBox");
        $menu01.slideToggle(300);
        var $otherMenu = $(this).siblings().children(".menuList");
        $otherMenu.slideUp(300);
    })
})