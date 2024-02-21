var swiper = new Swiper(".mySwiper", {
    loop: true,
    autoplay: {
        delay: 3000, // Adjust the delay between slides in milliseconds
        disableOnInteraction: false, // Enable autoplay even if the user interacts with the swiper
    },
    effect: "slide", // Change the effect to simple slide
    slidesPerView: "auto",
    spaceBetween: 15, // Adjust as needed
    centeredSlides: true, // Center the active slide
    pagination: {
        el: ".swiper-pagination",
    },
});


      //   searchcontainer  java script
  const slidirecontainer = document.getElementById('swiper-wrapper')
  const rightesBotton = document.getElementById('righttern-btn');
//   const leftBotton = document.getElementById('leftenern-btn');

