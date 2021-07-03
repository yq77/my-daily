$(function () {
       // 轮播
       let timer = setInterval(function () {
              play()
       }, 2000)
       let liW = $(".focus ul li:first").innerWidth();
       let n = 0;

       function play() {
              $(".focus ul").animate({ left: -liW }, function () {/*回调函数*/
                     $(this).css("left", 0).find("li:first").appendTo(this);
              })
              n++;
              if (n > $(".focus ul li").length - 1) {
                     n = 0;
              }
              $(".focus .dians span").eq(n).addClass("current").siblings().removeClass("current");
       }

       // 鼠标悬停，停止轮播。移开继续
       $(".focus").hover(function () {
              clearInterval(timer);
       }, function () {
              timer = setInterval(function () {
                     play()
              }, 2000)
       })

       // 左箭头
       $(".prev").click(function () {
              $(".focus ul").css("left",-liW).find("li:last").prependTo(".focus ul");
              $(".focus ul").animate({left:0})
              /*小圆点变化*/
              n--;
              if(n<0){
                  n = $(".focus ul li").length-1;
              }
              $(".focus .dians span").eq(n).addClass("current").siblings().removeClass("current");
          })

       //    右箭头
       $(".next").click(function () {
              play();
          })

       // 点击小圆点
       $(".focus .dians span").each(function (index) {
              $(this).click(function () {
                     if (n < index) {
                           for (var i = n; i < index; i++) {
                                  $(".focus ul").animate({left:-liW},100,function () {
                                         $(this).css("left", 0).find("li:first").appendTo(this);
                                  })
                                  
                           }
                     } else if (n > index){
                            for(var i = n;i>index;i--){
                                   $(".focus ul").css("left",-liW).find("li:last").prependTo(".focus ul");
                                   $(".focus ul").animate({left:0},100);
                               }
                           }
                           n = index;
                           $(".focus .dians span").eq(n).addClass("current").siblings().removeClass("current");
                     
              })
       })
})