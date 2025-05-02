//single product swiper
document.addEventListener("DOMContentLoaded", () => {
  var swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    slidesPerView: 1,
    spaceBetween: 30,
    mousewheel: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    on: {
      reachEnd: () => {
        let startY;
        let endY;
        const touchStartHandler = (e) => {
          startY = e.changedTouches[0].clientY;
          singleProductSlider.addEventListener("touchend", touchEndHandler);
        };
        const touchEndHandler = (e) => {
          endY = e.changedTouches[0].clientY;
          if (startY > endY) {
            window.scrollTo({
              top: window.scrollY + window.innerHeight,
              behavior: "smooth",
            });
          } else {
            singleProductSlider.removeEventListener(
              "touchstart",
              touchStartHandler
            );
            singleProductSlider.removeEventListener(
              "touchend",
              touchEndHandler
            );
          }
        };

        const wheelHandler = (e) => {
          if (e.deltaY > 0) {
            window.scrollTo({
              top: window.scrollY + window.innerHeight,
              behavior: "smooth",
            });
          } else {
            singleProductSlider.removeEventListener("wheel", wheelHandler);
          }
        };
        setTimeout(() => {
          singleProductSlider.addEventListener("wheel", wheelHandler);
          singleProductSlider.addEventListener("touchstart", touchStartHandler);
        }, 300);
      },
    },
  });
});
