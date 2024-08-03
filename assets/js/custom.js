//Handle styles by bootstrap events

const offcanvasRight = document.getElementById('offcanvasRight')
const headerElement = document.querySelector(".header-hero")
offcanvasRight.addEventListener('show.bs.offcanvas', event => {
    headerElement.classList.add("blur-5")
})