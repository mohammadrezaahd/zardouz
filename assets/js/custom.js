//Handle styles by bootstrap events

const offcanvasRight = document.getElementsByClassName("offcanvas");
const headerElement = document.querySelector(".header-hero");

const iterableOffcanvasRight = Array.from(offcanvasRight);

iterableOffcanvasRight.forEach((item) => {
  //add class when sidebar opens
  item.addEventListener("show.bs.offcanvas", (event) => {
    headerElement.classList.add("blur-5");
  });

  //remove class when sidebar closes

  item.addEventListener("hide.bs.offcanvas", (event) => {
    headerElement.classList.remove("blur-5");
  });
});
