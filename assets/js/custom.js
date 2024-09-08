//Handle styles by bootstrap events
const mainContainer = document.querySelector(".main-container");
const bagToastElement = document.querySelector(".bagToast");
const cartCount = document.querySelector(".cart-count");
const addressCollapse = document.querySelector(".address-collapse");
const singleProductSlider = document.querySelector(".single-product-slider");
const addToCartToastElement = document.querySelector(".addToCartToast");
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
  document.querySelectorAll(".auto-collapse ")
);
const toastTrigger = makeObjectsIterable(
  document.querySelectorAll(".toast-trigger")
);
const toastCloser = makeObjectsIterable(
  document.querySelectorAll(".toast-close-btn")
);
const colorChangeHandlerElements = makeObjectsIterable(
  document.querySelectorAll(".color-change-class")
);

//Prevent to open all accordions together
accordionCollapseTriggers?.forEach((trigger) => {
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

//Show notification
toastTrigger?.forEach((item) => {
  item.addEventListener("click", () => {
    //Shopping bag is empty notification
    if (item.classList.contains("shoppingBag")) {
      if (bagToastElement.classList.contains("toast-hidden")) {
        bagToastElement.classList.remove("toast-hidden");
        bagToastElement.lastElementChild.classList.add(
          "animation-progress"
        );
        setTimeout(() => {
          bagToastElement.classList.add("toast-hidden");
          bagToastElement.lastElementChild.classList.remove(
            "animation-progress"
          );
        }, 3000);
      }
    }
    //Add to cart notification
    if (item.classList.contains("addToBag")) {
      if (addToCartToastElement.classList.contains("toast-hidden")) {
        addToCartToastElement.classList.remove("toast-hidden");
        addToCartToastElement.lastElementChild.classList.add(
          "animation-progress"
        );
        setTimeout(() => {
          addToCartToastElement.classList.add("toast-hidden");
          addToCartToastElement.lastElementChild.classList.remove(
            "animation-progress"
          );
        }, 3000);
      }
    }
  });
});
//Hide notification
toastCloser?.forEach((item) => {
  item.addEventListener("click", () => {
    item.parentElement.parentElement.classList.add("toast-hidden");
  });
});
//Handle address line 2 collapse
addressCollapse?.addEventListener("show.bs.collapse", () => {
  addressCollapse.classList.remove("d-none");
});
addressCollapse?.addEventListener("hidden.bs.collapse", () => {
  addressCollapse.classList.add("d-none");
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
