function navbar() {
  let prevScrollPos = window.scrollY;
  let isBurgerActive = false;

  // ========== Scroll Event ==========
  window.addEventListener("scroll", () => {
    const currentScrollPos = window.scrollY;

    // User scrolled up.
    if (prevScrollPos > currentScrollPos) {
      document.querySelector("#navbar").classList.remove("navbar--hidden");
    }
    // User scrolled down.
    else {
      document.querySelector("#navbar").classList.add("navbar--hidden");
    }

    // If scroll position is currently at the top.
    if (currentScrollPos === 0) {
      document.querySelector("#navbar").classList.add("navbar--bg-invisible");
    }
    // If scroll position is currently NOT at the top.
    else {
      document
        .querySelector("#navbar")
        .classList.remove("navbar--bg-invisible");
    }

    prevScrollPos = currentScrollPos;
  });

  // ========== Burger Event ==========
  document.querySelector("#burger").addEventListener("click", () => {
    if (isBurgerActive === false) {
      document.querySelector("#navbar").classList.add("navbar--burger-active");
      document.querySelector("body").classList.add("navbar--burger-active");
    } else {
      document
        .querySelector("#navbar")
        .classList.remove("navbar--burger-active");
      document.querySelector("body").classList.remove("navbar--burger-active");
    }

    isBurgerActive = !isBurgerActive;
  });
}

export default navbar;
