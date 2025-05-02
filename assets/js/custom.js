// Handle Main Elements
const mainContainer = document.querySelector(".main-container");
const bagToastElement = document.querySelector(".bagToast");
const cartCountElement = document.querySelector(".cart-count");
const addressCollapseElement = document.querySelector(".address-collapse");
const singleProductSlider = document.querySelector(".single-product-slider");

// Sidebar Profile Elements
const profileSidebar = document.getElementById("sidebar");
const sidebarToggleButton = document.getElementById("toggleSidebar");
const sidebarNavLinks = document.querySelectorAll(".nav-link");
const sidebarPageTitle = document.getElementById("page-title");

// Collections
const offcanvasElements = makeObjectsIterable(
  document.getElementsByClassName("offcanvas")
);
const navBarElements = makeObjectsIterable(
  document.querySelectorAll(".nav-bar")
);
const accordionTriggers = makeObjectsIterable(
  document.querySelectorAll(".accordion-button")
);
const accordionItems = makeObjectsIterable(
  document.querySelectorAll(".auto-collapse")
);
const toastTriggers = makeObjectsIterable(
  document.querySelectorAll(".toast-trigger")
);
const toastClosers = makeObjectsIterable(
  document.querySelectorAll(".toast-close-btn")
);
const colorChangeElements = makeObjectsIterable(
  document.querySelectorAll(".color-change-class")
);

/* ------------------- Profile Sidebar Behavior ------------------- */

// Toggle sidebar expand/collapse

sidebarToggleButton.addEventListener("click", () => {
  profileSidebar.classList.toggle("collapsed");
  profileSidebar.classList.toggle("expanded");
});

/* ------------------- Accordion Behavior ------------------- */

// Prevent opening multiple accordions at once
accordionTriggers?.forEach((trigger) => {
  trigger.addEventListener("click", () => {
    const openAccordions = accordionItems.filter((item) =>
      item.classList.contains("show")
    );
    const targetId = trigger.getAttribute("data-bs-target");
    const targetCollapse = targetId ? document.querySelector(targetId) : null;

    const irrelevantAccordions = openAccordions.filter(
      (item) => item !== targetCollapse
    );

    irrelevantAccordions.forEach((item) => {
      const collapseInstance = bootstrap.Collapse.getInstance(item);
      if (collapseInstance) {
        collapseInstance.hide();
      } else {
        item.classList.remove("show");
      }
    });
  });
});

/* ------------------- Scroll Behavior ------------------- */

// Apply navbar background on scroll
window.addEventListener("scroll", () => {
  if (navBarElements.length > 0) {
    if (window.scrollY > 50) {
      navBarElements.forEach((item) => item.classList.add("bg-white"));
      colorChangeElements.forEach((item) =>
        item.classList.replace("text-white", "text-black")
      );
      if (cartCountElement) {
        cartCountElement.classList.replace("text-black", "text-white");
      }
    } else {
      navBarElements.forEach((item) => item.classList.remove("bg-white"));
      colorChangeElements.forEach((item) =>
        item.classList.replace("text-black", "text-white")
      );
      if (cartCountElement) {
        cartCountElement.classList.replace("text-white", "text-black");
      }
    }
  }
});

/* ------------------- Offcanvas Behavior ------------------- */

// Apply blur effect when offcanvas opens/closes
if (offcanvasElements.length > 0 && mainContainer) {
  offcanvasElements.forEach((item) => {
    item.addEventListener("show.bs.offcanvas", () => {
      mainContainer.classList.add("blur-5");
    });
    item.addEventListener("hide.bs.offcanvas", () => {
      mainContainer.classList.remove("blur-5");
    });
  });
}

/* ------------------- Toast Notifications ------------------- */

// Show toasts
if (toastTriggers.length > 0) {
  toastTriggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      if (trigger.classList.contains("shoppingBag") && bagToastElement) {
        showToast(bagToastElement);
      }
      if (trigger.classList.contains("addToBag") && addToCartToastElement) {
        showToast(addToCartToastElement);
      }
    });
  });
}

// Close toasts manually
if (toastClosers.length > 0) {
  toastClosers.forEach((closer) => {
    closer.addEventListener("click", () => {
      if (closer.parentElement?.parentElement) {
        closer.parentElement.parentElement.classList.add("toast-hidden");
      }
    });
  });
}

/* ------------------- Address Collapse Behavior ------------------- */

// Handle address line 2 collapse visibility
if (addressCollapseElement) {
  addressCollapseElement.addEventListener("show.bs.collapse", () => {
    addressCollapseElement.classList.remove("d-none");
  });
  addressCollapseElement.addEventListener("hidden.bs.collapse", () => {
    addressCollapseElement.classList.add("d-none");
  });
}

/* ------------------- Utility Functions ------------------- */

// Show a toast with animation
function showToast(toastElement) {
  if (toastElement.classList.contains("toast-hidden")) {
    toastElement.classList.remove("toast-hidden");
    toastElement.lastElementChild?.classList.add("animation-progress");

    setTimeout(() => {
      toastElement.classList.add("toast-hidden");
      toastElement.lastElementChild?.classList.remove("animation-progress");
    }, 3000);
  }
}

// Increase product quantity
function increaseValue(button, limit) {
  if (!button?.parentElement) return;
  const numberInput = button.parentElement.querySelector(".number");
  if (!numberInput) return;

  let value = parseInt(numberInput.innerHTML, 10) || 0;
  if (limit && value >= limit) return;
  numberInput.innerHTML = value + 1;
}

// Decrease product quantity
function decreaseValue(button) {
  if (!button?.parentElement) return;
  const numberInput = button.parentElement.querySelector(".number");
  if (!numberInput) return;

  let value = parseInt(numberInput.innerHTML, 10) || 0;
  if (value < 1) return;
  numberInput.innerHTML = value - 1;
}

// Convert HTMLCollection or NodeList to Array
function makeObjectsIterable(obj) {
  return obj ? Array.from(obj) : [];
}
