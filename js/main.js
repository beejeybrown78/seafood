$(function(){

    $('.header__slider').slick({
        dots:true,
        prevArrow: '<button type="button" class="slick-prev">   <img src="images/prew-arrow.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next">   <img src="images/next-arrow.svg" alt=""></button>',
        vertical:true,
        responsive: [
          {
            breakpoint: 361,
            settings: {
            autoplay:true,
            dots:false,
            arrows:false,
            autoplaySpeed:2000,
            }
          }
        ]
    });

    $('.product__name').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        focusOnSelect: true,
        vertical:true,
        responsive: [
          {
            breakpoint: 891,
            settings: {
              vertical:false,
              slidesToShow:2,
              arrows:false,
              centerMode:true,
            },
            breakpoint: 461,
            settings: {
              vertical:false,
              arrows:false,
              slidesToShow:1,
              autoplaySpeed:2000,
            }
            
          }
          

        ],
        // fade: true,
        prevArrow: '<button type="button" class="prod-prev">   <img src="images/prod-prev.svg" alt=""></button>',
        nextArrow: '<button type="button" class="prod-next">   <img src="images/prod-next.svg" alt=""></button>',
        asNavFor: '.product__content'
      });
      $('.product__content').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.product__name',
       fade:true,
       arrows: false,

     
      });


      $('.menu__btn').on('click',function(){
        $('.menu__list').toggleClass('menu__list--active');

      });





});