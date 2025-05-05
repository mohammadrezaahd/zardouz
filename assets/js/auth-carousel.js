const myCarousel = document.querySelector("#carouselExampleFade");
const carousel = new bootstrap.Carousel(myCarousel, {
  interval: 2500,
  ride: "carousel",
  pause: false,
  wrap: true,
});
document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll("#loginRegisterTab .nav-link");
  const underline = document.getElementById("tab-underline");

  function moveUnderline(activeTab) {
    const tabRect = activeTab.getBoundingClientRect();
    const containerRect =
      activeTab.parentElement.parentElement.getBoundingClientRect();

    underline.style.width = `${tabRect.width}px`;
    underline.style.left = `${tabRect.left - containerRect.left}px`;
  }

  tabs.forEach((tab) => {
    tab.addEventListener("shown.bs.tab", function (e) {
      moveUnderline(e.target);
    });
  });

  // صفحه که لود شد روی active ست بشه
  const activeTab = document.querySelector(
    "#loginRegisterTab .nav-link.active"
  );
  if (activeTab) moveUnderline(activeTab);
});
