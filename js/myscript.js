$(function(){
    const loading = $(".loading");
    $(window).on("load",function(){
        loading.remove();
    })
    // 54. 로딩 이후에 가로 스크롤 다시 생기도록 설정
    $(window).on('pageshow', function(){
        $('html,body').css({'overflow-x':'hidden','overflow-y':'visible'});
        $('body').css('overflow','visible');
    })
    $('.carousel').carousel({
    	interval : 3000
    })
    // 38. animatescroll plugin 동작구문
    $('.navbar li:nth-child(1) a').click(function(){
    	$('#top').animatescroll({padding:50,easing:'easeInQuart'});
    })
    $('.navbar li:nth-child(2) a').click(function(){
    	$('#aboutus').animatescroll({padding:50,easing:'easeInQuart'});
    })
    $('.navbar li:nth-child(3) a').click(function(){
    	$('#xlewis').animatescroll({padding:50,easing:'easeInQuart'});
    })
    $('.navbar li:nth-child(4) a').click(function(){
    	$('#collection').animatescroll({padding:50,easing:'easeInQuart'});
    })
    $('.navbar li:nth-child(5) a').click(function(){
    	$('#jeans').animatescroll({padding:50,easing:'easeInQuart'});
    })
    $('.navbar li:nth-child(6) a').click(function(){
        $('#shop').animatescroll({padding:50,easing:'easeInQuart'});
    })
    // 65. waypoint plugin동작구문
    $('.wp1').css('visibility','hidden');
    $('.wp2').css('visibility','hidden');
    $('.wp3').css('visibility','hidden');
    $('.wp5').css('visibility','hidden');

    $('.wp1').waypoint(function(direction){
        if(direction==='down'){
            $('.wp1').addClass('animate__animated animate__fadeInDown');
            $('.wp1').css('visibility','visible');
        }
    },{
        offset:'70%'
    })
    $('.wp1').waypoint(function(direction){
        if(direction==='up'){
            $('.wp1').removeClass('animate__animated animate__fadeInDown');
            $('.wp1').css('visibility','hidden');
        }
    },{
        offset:'70%'
    })
    $('.wp2').waypoint(function(direction){
        if(direction==='down'){
            $('.wp2').addClass('animate__animated animate__fadeInUp');
            $('.wp2').css('visibility','visible');
        }
    },{
        offset:'80%'
    })
    $('.wp2').waypoint(function(direction){
        if(direction==='up'){
            $('.wp2').removeClass('animate__animated animate__fadeInUp');
            $('.wp2').css('visibility','hidden');
        }
    },{
        offset:'80%'
    })

    $('.wp3').waypoint(function(direction){
        if(direction==='down'){
            $('.wp3').addClass('animate__animated animate__fadeInDown');
            $('.wp3').css('visibility','visible');
        }
    },{
        offset:'80%'
    })
    $('.wp3').waypoint(function(direction){
        if(direction==='up'){
            $('.wp3').removeClass('animate__animated animate__fadeInDown');
            $('.wp3').css('visibility','hidden');
        }
    },{
        offset:'80%'
    })
    $('.wp5').waypoint(function(direction){
        if(direction==='down'){
            $('.wp5').addClass('animate__animated animate__fadeIn');
            $('.wp5').css('visibility','visible');
        }
    },{
        offset:'50%'
    })
    $('.wp5').waypoint(function(direction){
        if(direction==='up'){
            $('.wp5').removeClass('animate__animated animate__fadeIn');
            $('.wp5').css('visibility','hidden');
        }
    },{
        offset:'50%'
    })

    // lewis 애니 첫시작
    $('.lewis_card_ani1').css('visibility','hidden');
    $('.lewis_card_ani2').css('visibility','hidden');
    $('.lewis_card_ani3').css('visibility','hidden');
    $('.lewis_card_ani4').css('visibility','hidden');
    
    // lewis애니메이션
    $('.lewis_card_ani1').waypoint(function(direction){
        if(direction==='down'){
            $('.lewis_card_ani1').addClass('animate__animated animate__fadeInLeft');
            $('.lewis_card_ani1').css('visibility','visible');
        }
    },{
        offset:'90%'
    })
    $('.lewis_card_ani1').waypoint(function(direction){
        if(direction==='up'){
            $('.lewis_card_ani1').removeClass('animate__animated animate__fadeInLeft');
            $('.lewis_card_ani1').css('visibility','hidden');
        }
    },{
        offset:'90%'
    })
    $('.lewis_card_ani2').waypoint(function(direction){
        if(direction==='down'){
            $('.lewis_card_ani2').addClass('animate__animated animate__fadeInLeft');
            $('.lewis_card_ani2').css('visibility','visible');
        }
    },{
        offset:'90%'
    })
    $('.lewis_card_ani2').waypoint(function(direction){
        if(direction==='up'){
            $('.lewis_card_ani2').removeClass('animate__animated animate__fadeInLeft');
            $('.lewis_card_ani2').css('visibility','hidden');
        }
    },{
        offset:'90%'
    })
    $('.lewis_card_ani3').waypoint(function(direction){
        if(direction==='down'){
            $('.lewis_card_ani3').addClass('animate__animated animate__fadeInLeft');
            $('.lewis_card_ani3').css('visibility','visible');
        }
    },{
        offset:'90%'
    })
    $('.lewis_card_ani3').waypoint(function(direction){
        if(direction==='up'){
            $('.lewis_card_ani3').removeClass('animate__animated animate__fadeInLeft');
            $('.lewis_card_ani3').css('visibility','hidden');
        }
    },{
        offset:'90%'
    })
    $('.lewis_card_ani4').waypoint(function(direction){
        if(direction==='down'){
            $('.lewis_card_ani4').addClass('animate__animated animate__fadeInLeft');
            $('.lewis_card_ani4').css('visibility','visible');
        }
    },{
        offset:'90%'
    })
    $('.lewis_card_ani4').waypoint(function(direction){
        if(direction==='up'){
            $('.lewis_card_ani4').removeClass('animate__animated animate__fadeInLeft');
            $('.lewis_card_ani4').css('visibility','hidden');
        }
    },{
        offset:'90%'
    })

    // collection 애니메이션
    $('.collec_title_ani1').css('visibility','hidden');
    $('.collec_title_ani2').css('visibility','hidden');
    $('.collec_item_ani1').css('visibility','hidden');
    $('.collec_item_ani2').css('visibility','hidden');

    // collec_title_ani1
    $('.collec_title_ani1').waypoint(function(direction){
        if(direction==='down'){
            $('.collec_title_ani1').addClass('animate__animated animate__slideInUp');
            $('.collec_title_ani1').css('visibility','visible');
        }
    },{
        offset:'90%'
    })
    $('.collec_title_ani1').waypoint(function(direction){
        if(direction==='up'){
            $('.collec_title_ani1').removeClass('animate__animated animate__slideInUp');
            $('.collec_title_ani1').css('visibility','hidden');
        }
    },{
        offset:'90%'
    })
    // collec_title_ani2
    $('.collec_title_ani2').waypoint(function(direction){
        if(direction==='down'){
            $('.collec_title_ani2').addClass('animate__animated animate__slideInUp');
            $('.collec_title_ani2').css('visibility','visible');
        }
    },{
        offset:'70%'
    })
    $('.collec_title_ani2').waypoint(function(direction){
        if(direction==='up'){
            $('.collec_title_ani2').removeClass('animate__animated animate__slideInUp');
            $('.collec_title_ani2').css('visibility','hidden');
        }
    },{
        offset:'70%'
    })
    // collec_item_ani1
    $('.collec_item_ani1').waypoint(function(direction){
        if(direction==='down'){
            $('.collec_item_ani1').addClass('animate__animated animate__slideInRight');
            $('.collec_item_ani1').css('visibility','visible');
        }
    },{
        offset:'90%'
    })
    $('.collec_item_ani1').waypoint(function(direction){
        if(direction==='up'){
            $('.collec_item_ani1').removeClass('animate__animated animate__slideInRight');
            $('.collec_item_ani1').css('visibility','hidden');
        }
    },{
        offset:'90%'
    })
    // collec_item_ani2
    $('.collec_item_ani2').waypoint(function(direction){
        if(direction==='down'){
            $('.collec_item_ani2').addClass('animate__animated animate__slideInRight');
            $('.collec_item_ani2').css('visibility','visible');
        }
    },{
        offset:'90%'
    })
    $('.collec_item_ani2').waypoint(function(direction){
        if(direction==='up'){
            $('.collec_item_ani2').removeClass('animate__animated animate__slideInRight');
            $('.collec_item_ani2').css('visibility','hidden');
        }
    },{
        offset:'90%'
    })

    // 화사 애니 준비
    $('.ani_collect_photo1').css('visibility','hidden');
    $('.ani_collect_photo2').css('visibility','hidden');
    $('.ani_collect_photo3').css('visibility','hidden');
    $('.ani_collect_photo4').css('visibility','hidden');
    $('.ani_collect_photo5').css('visibility','hidden');
    $('.ani_collect_photo6').css('visibility','hidden');
    $('.ani_collect_photo7').css('visibility','hidden');
    $('.ani_collect_photo8').css('visibility','hidden');
    $('.ani_collect_photo9').css('visibility','hidden');
    $('.ani_collect_photo10').css('visibility','hidden');
    $('.ani_collect_photo11').css('visibility','hidden');
    $('.ani_collect_photo12').css('visibility','hidden');
    // 화사사진들애니메이션
    $('.ani_collect_photo1').waypoint(function(direction){
        if(direction==='down'){
            $('.ani_collect_photo1').addClass('animate__animated animate__slideInUp');
            $('.ani_collect_photo1').css('visibility','visible');
        }
    },{
        offset:'90%'
    })
    $('.ani_collect_photo1').waypoint(function(direction){
        if(direction==='up'){
            $('.ani_collect_photo1').removeClass('animate__animated animate__slideInUp');
            $('.ani_collect_photo1').css('visibility','hidden');
        }
    },{
        offset:'90%'
    })
    $('.ani_collect_photo2').waypoint(function(direction){
        if(direction==='down'){
            $('.ani_collect_photo2').addClass('animate__animated animate__slideInUp');
            $('.ani_collect_photo2').css('visibility','visible');
        }
    },{
        offset:'80%'
    })
    $('.ani_collect_photo2').waypoint(function(direction){
        if(direction==='up'){
            $('.ani_collect_photo2').removeClass('animate__animated animate__slideInUp');
            $('.ani_collect_photo2').css('visibility','hidden');
        }
    },{
        offset:'80%'
    })
    $('.ani_collect_photo3').waypoint(function(direction){
        if(direction==='down'){
            $('.ani_collect_photo3').addClass('animate__animated animate__slideInUp');
            $('.ani_collect_photo3').css('visibility','visible');
        }
    },{
        offset:'70%'
    })
    $('.ani_collect_photo3').waypoint(function(direction){
        if(direction==='up'){
            $('.ani_collect_photo3').removeClass('animate__animated animate__slideInUp');
            $('.ani_collect_photo3').css('visibility','hidden');
        }
    },{
        offset:'70%'
    })
    $('.ani_collect_photo4').waypoint(function(direction){
        if(direction==='down'){
            $('.ani_collect_photo4').addClass('animate__animated animate__slideInUp');
            $('.ani_collect_photo4').css('visibility','visible');
        }
    },{
        offset:'60%'
    })
    $('.ani_collect_photo4').waypoint(function(direction){
        if(direction==='up'){
            $('.ani_collect_photo4').removeClass('animate__animated animate__slideInUp');
            $('.ani_collect_photo4').css('visibility','hidden');
        }
    },{
        offset:'60%'
    })
    $('.ani_collect_photo5').waypoint(function(direction){
        if(direction==='down'){
            $('.ani_collect_photo5').addClass('animate__animated animate__slideInUp');
            $('.ani_collect_photo5').css('visibility','visible');
        }
    },{
        offset:'90%'
    })
    $('.ani_collect_photo5').waypoint(function(direction){
        if(direction==='up'){
            $('.ani_collect_photo5').removeClass('animate__animated animate__slideInUp');
            $('.ani_collect_photo5').css('visibility','hidden');
        }
    },{
        offset:'90%'
    })
    $('.ani_collect_photo6').waypoint(function(direction){
        if(direction==='down'){
            $('.ani_collect_photo6').addClass('animate__animated animate__slideInUp');
            $('.ani_collect_photo6').css('visibility','visible');
        }
    },{
        offset:'80%'
    })
    $('.ani_collect_photo6').waypoint(function(direction){
        if(direction==='up'){
            $('.ani_collect_photo6').removeClass('animate__animated animate__slideInUp');
            $('.ani_collect_photo6').css('visibility','hidden');
        }
    },{
        offset:'80%'
    })
    $('.ani_collect_photo7').waypoint(function(direction){
        if(direction==='down'){
            $('.ani_collect_photo7').addClass('animate__animated animate__slideInUp');
            $('.ani_collect_photo7').css('visibility','visible');
        }
    },{
        offset:'70%'
    })
    $('.ani_collect_photo7').waypoint(function(direction){
        if(direction==='up'){
            $('.ani_collect_photo7').removeClass('animate__animated animate__slideInUp');
            $('.ani_collect_photo7').css('visibility','hidden');
        }
    },{
        offset:'70%'
    })
    $('.ani_collect_photo8').waypoint(function(direction){
        if(direction==='down'){
            $('.ani_collect_photo8').addClass('animate__animated animate__slideInUp');
            $('.ani_collect_photo8').css('visibility','visible');
        }
    },{
        offset:'60%'
    })
    $('.ani_collect_photo8').waypoint(function(direction){
        if(direction==='up'){
            $('.ani_collect_photo8').removeClass('animate__animated animate__slideInUp');
            $('.ani_collect_photo8').css('visibility','hidden');
        }
    },{
        offset:'60%'
    })
    $('.ani_collect_photo9').waypoint(function(direction){
        if(direction==='down'){
            $('.ani_collect_photo9').addClass('animate__animated animate__slideInUp');
            $('.ani_collect_photo9').css('visibility','visible');
        }
    },{
        offset:'90%'
    })
    $('.ani_collect_photo9').waypoint(function(direction){
        if(direction==='up'){
            $('.ani_collect_photo9').removeClass('animate__animated animate__slideInUp');
            $('.ani_collect_photo9').css('visibility','hidden');
        }
    },{
        offset:'90%'
    })
    $('.ani_collect_photo10').waypoint(function(direction){
        if(direction==='down'){
            $('.ani_collect_photo10').addClass('animate__animated animate__slideInUp');
            $('.ani_collect_photo10').css('visibility','visible');
        }
    },{
        offset:'80%'
    })
    $('.ani_collect_photo10').waypoint(function(direction){
        if(direction==='up'){
            $('.ani_collect_photo10').removeClass('animate__animated animate__slideInUp');
            $('.ani_collect_photo10').css('visibility','hidden');
        }
    },{
        offset:'80%'
    })
    $('.ani_collect_photo11').waypoint(function(direction){
        if(direction==='down'){
            $('.ani_collect_photo11').addClass('animate__animated animate__slideInUp');
            $('.ani_collect_photo11').css('visibility','visible');
        }
    },{
        offset:'70%'
    })
    $('.ani_collect_photo11').waypoint(function(direction){
        if(direction==='up'){
            $('.ani_collect_photo11').removeClass('animate__animated animate__slideInUp');
            $('.ani_collect_photo11').css('visibility','hidden');
        }
    },{
        offset:'70%'
    })
    $('.ani_collect_photo12').waypoint(function(direction){
        if(direction==='down'){
            $('.ani_collect_photo12').addClass('animate__animated animate__slideInUp');
            $('.ani_collect_photo12').css('visibility','visible');
        }
    },{
        offset:'60%'
    })
    $('.ani_collect_photo12').waypoint(function(direction){
        if(direction==='up'){
            $('.ani_collect_photo12').removeClass('animate__animated animate__slideInUp');
            $('.ani_collect_photo12').css('visibility','hidden');
        }
    },{
        offset:'60%'
    })

    // retail 준비
    $('.retail_ani1').css('visibility','hidden');
    $('.retail_ani2').css('visibility','hidden');
    // retail애니메이션
    $('.retail_ani1').waypoint(function(direction){
        if(direction==='down'){
            $('.retail_ani1').addClass('animate__animated animate__fadeInUp');
            $('.retail_ani1').css('visibility','visible');
        }
    },{
        offset:'60%'
    })
    $('.retail_ani1').waypoint(function(direction){
        if(direction==='up'){
            $('.retail_ani1').removeClass('animate__animated animate__fadeInUp');
            $('.retail_ani1').css('visibility','hidden');
        }
    },{
        offset:'60%'
    })
    $('.retail_ani2').waypoint(function(direction){
        if(direction==='down'){
            $('.retail_ani2').addClass('animate__animated animate__fadeInUp');
            $('.retail_ani2').css('visibility','visible');
        }
    },{
        offset:'60%'
    })
    $('.retail_ani2').waypoint(function(direction){
        if(direction==='up'){
            $('.retail_ani2').removeClass('animate__animated animate__fadeInUp');
            $('.retail_ani2').css('visibility','hidden');
        }
    },{
        offset:'60%'
    })

    // alert('test');
})