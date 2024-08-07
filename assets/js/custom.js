//Handle styles by bootstrap events

const offcanvasRight = document.getElementsByClassName("offcanvas");
const headerElement = document.querySelector(".header-hero");
const navBarElement = document.querySelector(".nav-bar");
const accordionCollapseTriggers =
  document.querySelectorAll(".accordion-button");
const accordionCollapseItems = document.querySelectorAll(".accordion-collapse");

makeObjectsIterable(accordionCollapseTriggers).forEach((trigger) => {
  trigger.addEventListener("click", () => {
    const openAccordions = Array.from(accordionCollapseItems).filter((item) =>
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

const colorChangeHandlerElements = makeObjectsIterable(
  document.querySelectorAll(".color-change-class")
);

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navBarElement.classList.add("bg-white");
    colorChangeHandlerElements.forEach((item) => {
      item.classList.remove("text-white");
      item.classList.add("text-black");
    });
  } else {
    navBarElement.classList.remove("bg-white");
    colorChangeHandlerElements.forEach((item) => {
      item.classList.remove("text-black");
      item.classList.add("text-white");
    });
  }
});

makeObjectsIterable(offcanvasRight).forEach((item) => {
  //add class when sidebar opens
  item.addEventListener("show.bs.offcanvas", (event) => {
    headerElement.classList.add("blur-5");
  });

  //remove class when sidebar closes

  item.addEventListener("hide.bs.offcanvas", (event) => {
    headerElement.classList.remove("blur-5");
  });
});

function makeObjectsIterable(obj) {
  return Array.from(obj);
}
