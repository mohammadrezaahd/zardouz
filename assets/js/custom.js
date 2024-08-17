//Handle styles by bootstrap events

const mainContainer = document.querySelector(".main-container");
const bagToastBtn = document.querySelector(".bag-toast-btn");
const bagToastElement = document.querySelector(".bagToast");
const cartCount = document.querySelector(".cart-count");
const singleProductSlider = document.querySelector(".single-product-slider");
const offcanvasRightElements = makeObjectsIterable(
  document.getElementsByClassName("offcanvas")
);
const navBarElements = makeObjectsIterable(
  document.querySelectorAll(".nav-bar")
);
const accordionCollapseTriggers = makeObjectsIterable(
  document.querySelectorAll(".accordion-button")
);
const accordionCollapseItems = makeObjectsIterable(
  document.querySelectorAll(".accordion-collapse")
);
const shoppingBagElements = makeObjectsIterable(
  document.querySelectorAll(".toast-trigger")
);
const colorChangeHandlerElements = makeObjectsIterable(
  document.querySelectorAll(".color-change-class")
);

//Prevent to open all accordions together
accordionCollapseTriggers.forEach((trigger) => {
  trigger.addEventListener("click", () => {
    const openAccordions = accordionCollapseItems.filter((item) =>
      item.classList.contains("show")
    );
    const useLessCollapse = openAccordions.filter(
      (item) => item.innerHTML != trigger.innerHTML
    );
    if (useLessCollapse.length > 0) {
      useLessCollapse.forEach((item) => {
        item.classList.remove("show");
      });
    }
  });
});

//Apply style when page scrolls
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navBarElements.forEach((item) => {
      item.classList.add("bg-white");
    });
    colorChangeHandlerElements.forEach((item) => {
      item.classList.replace("text-white", "text-black");
      cartCount.classList.replace("text-black", "text-white");
    });
  } else {
    navBarElements.forEach((item) => {
      item.classList.remove("bg-white");
    });
    colorChangeHandlerElements.forEach((item) => {
      item.classList.replace("text-black", "text-white");
      cartCount.classList.replace("text-white", "text-black");
    });
  }
});

//Apply styles for canvas open and close
offcanvasRightElements.forEach((item) => {
  //add class when sidebar opens
  item.addEventListener("show.bs.offcanvas", (event) => {
    mainContainer.classList.add("blur-5");
  });

  //remove class when sidebar closes

  item.addEventListener("hide.bs.offcanvas", (event) => {
    mainContainer.classList.remove("blur-5");
  });
});

//Show and hide notification
shoppingBagElements.forEach((item) => {
  item.addEventListener("click", () => {
    //if only cart was empty
    if (bagToastElement.classList.contains("toast-hidden")) {
      bagToastElement.classList.remove("toast-hidden");
    }
  });
});

bagToastBtn.addEventListener("click", () => {
  bagToastElement.classList.add("toast-hidden");
});

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

//product count controller
function increaseValue(button, limit) {
  const numberInput = button.parentElement.querySelector(".number");
  var value = parseInt(numberInput.innerHTML, 10);
  if (isNaN(value)) value = 0;
  if (limit && value >= limit) return;
  numberInput.innerHTML = value + 1;
}

function decreaseValue(button) {
  const numberInput = button.parentElement.querySelector(".number");
  var value = parseInt(numberInput.innerHTML, 10);
  if (isNaN(value)) value = 0;
  if (value < 1) return;
  numberInput.innerHTML = value - 1;
}

//Convert like arrays to array
function makeObjectsIterable(obj) {
  return Array.from(obj);
}
