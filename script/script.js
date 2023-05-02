
    $(document).ready(function() {  

        $('.mobile_res_toggle_btn').click(function () {
            $('.mobile_res_toggle_content').toggleClass('responsive_bar');
        });
        
        var acc = document.getElementsByClassName("accordion");
        var i;
        
        for (i = 0; i < acc.length; i++) {
          acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
              panel.style.display = "none";
            } else {
              panel.style.display = "block";
            }
          });
        }

        }); 
      



    $(document).ready(function() {      
      $('.Banner_slider').slick({
          slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        arrows:false,
  appendArrows: $('.banner_slider_arrow_box'),
   nextArrow: '<a class="banner_next_arrow"><i class="fa fa-angle-right" aria-hidden="true"></i></a>',
    prevArrow: '<a class="banner_pre_arrow"><i class="fa fa-angle-left" aria-hidden="true"></i></a>',
        responsive: [
{
  breakpoint: 1024,
  settings: {
    autoplay: true,
    dots: true,
    arrows: false,
  },
},
{
  breakpoint: 768,
  settings: {
    autoplay: true,
    dots: true,
    arrows: false,
  },
},
{
  breakpoint: 540,
  settings: {
    autoplay: true,
    dots: false,
    arrows: false,
  },
},
{
  breakpoint: 400,
  settings: {
    autoplay: true,
    dots: false,
    arrows: false,
  },
},
],
        });
        }); 
      

