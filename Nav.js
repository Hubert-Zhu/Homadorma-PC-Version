$(function(){
    $(window).scroll(function(){
        var scrollTop = $(document).scrollTop();
        var oList = $("#content").find(".list");
        var oName = "";

        $.each(oList,function(){
            var oneList = $(this);
            var offsetTop = oneList.offset().top;
            if(offsetTop-scrollTop < 200){
                oName = oneList.attr("id");

            }
        });

        if(oName != $(".current").attr("href")){
            $(".current").removeClass("current");
            $(".ul_menu").find("[flag="+ oName +"]").addClass("current");
        }
    });

    $(".ul_menu li a").click(function(){
        var oA = $(this);
        var index = oA.parent().index();
        var h = $(".list").eq(index).offset().top - 60 + 'px';
        if(oA.attr("class") != "current"){
            $('html,body').animate({scrollTop:h},300);
        }
    });
});
