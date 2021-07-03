
$(function () {
       $(".nav").each(function() {
              let flag = 1
              $(".title").click(function() {
                     if (flag == 1) {
                            $(this).siblings().slideDown();
                            flag = 0;
                     } else {
                            $(this).siblings().slideUp();
                            flag = 1;
                     }
                     
              })
       })
})

       // let data = {
       //        currentIndex : -1
       // }

       // let titlesDOM
       // let contentsDOM

       // function changeDOM() {
       //        let currentIndex = data.currentIndex
       //        if (currentIndex >= 0) {
       //               $(contentsDOM[currentIndex]).slideToggle();
       //        }
       // }

       // function  setData(newData) {
       //        for (let i in newData) {
       //               data[i] = newData[i]
       //        }
       //        changeDOM();
       // }

       // $(function name(params) {
       //        titlesDOM = $(".title");
       //        contentsDOM = $(".content");

       //        titlesDOM.click(function (e) {
       //               let index = Number($(e.target).attr("data-index"))
       //               setData({
       //                      currentIndex : data.currentIndex,
       //                      currentIndex : index
       //               })
       //        })
       // })