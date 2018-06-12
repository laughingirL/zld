/**
 * Created by PVer on 2017/5/4.
 */
$(function(){
            $("#icon").click(function(){
                $("#search_blank").slideToggle(200);
            });


            $("#nav li").on("mouseover",(function(){
                console.log('mouse over success');
                $(this).children("div.minfoWrap").css("display", "block");
            })).on("mouseout", function(){
                console.log('mouse out success');
                $(this).children("div.minfoWrap").css("display", "none")
            });

             var mySwiper = new Swiper(".swiper-container",{
                direction:"horizontal",/*横向滑动*/
                loop: true,/*形成环路（即：可以从最后一张图跳转到第一张图*/
                pagination:".swiper-pagination",/*分页器*/
                prevButton:".swiper-button-prev",/*前进按钮*/
                nextButton:".swiper-button-next",/*后退按钮*/
                autoplay: 3000/*每隔3秒自动播放*/
            });

             $("#wechat-img").on("mouseover", function(){
                 console.log('mouse over success');
                 $("#more-inf").fadeIn(300);
             }).on("mouseout", function(){
                 console.log('mouse out success');
                 $("#more-inf").fadeOut(300);
             })
        });

