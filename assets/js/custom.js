//Handle styles by bootstrap events

const offcanvasRight = document.getElementById('offcanvasRight')
const headerElement = document.querySelector(".header-hero")

//add class when sidebar opens
offcanvasRight.addEventListener('show.bs.offcanvas', event => {
    headerElement.classList.add("blur-5")
})

//remove class when sidebar closes

offcanvasRight.addEventListener('hide.bs.offcanvas', event => {
    headerElement.classList.remove("blur-5")
})