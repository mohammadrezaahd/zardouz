//Handle styles by bootstrap events

const mainContainer = document.querySelector(".main-container");
const bagToastBtn = document.querySelector(".bag-toast-btn")
const bagToastElement = document.querySelector(".bagToast")
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
  document.querySelectorAll(".fa-bag-shopping")
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
      item.classList.remove("text-white");
      item.classList.add("text-black");
    });
  } else {
    navBarElements.forEach((item) => {
      item.classList.remove("bg-white");
    });
    colorChangeHandlerElements.forEach((item) => {
      item.classList.remove("text-black");
      item.classList.add("text-white");
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
  item.addEventListener("click", () => { //if only cart was empty
    if(bagToastElement.classList.contains("toast-hidden")){
      bagToastElement.classList.remove("toast-hidden")
    }
  
  })
})

bagToastBtn.addEventListener('click', () => {
  bagToastElement.classList.add("toast-hidden")
})

//Convert like arrays to array
function makeObjectsIterable(obj) {
  return Array.from(obj);
}
