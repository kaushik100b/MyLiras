window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
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