window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });


  
  $(document).ready(function(){
    $(".partner-carousel").owlCarousel({
      loop: true,
      margin: 30,
      autoplay: true,
      autoplayTimeout: 2000,
      autoplayHoverPause: true,
      nav: false,
      dots: false,
      responsive: {
        0: {
          items: 4
        },
        576: {
          items: 4
        },
        768: {
          items: 4
        },
        992: {
          items: 5  // ✅ 5 items in one line on larger screens
        },
        1200: {
          items: 5
        }
      }
    });
  });

$(document).ready(function(){
  var owl = $(".owl-carousel");
  owl.owlCarousel({
    loop: true,
    margin: 30,
    nav: false,  // disable built-in nav
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
    responsive: {
      0: { items: 1 },
      768: { items: 2 },
      992: { items: 3 }
    }
  });

  // Custom Nav Events
  $('.prev').click(function() {
    owl.trigger('prev.owl.carousel');
  });

  $('.next').click(function() {
    owl.trigger('next.owl.carousel');
  });
});
