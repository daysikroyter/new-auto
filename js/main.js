function fixMobileVh() {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
}

fixMobileVh();
window.addEventListener("resize", fixMobileVh);

const McButton = document.querySelector("[data=hamburger-menu]");
const McBar1 = McButton.querySelector("b:nth-child(1)");
const McBar2 = McButton.querySelector("b:nth-child(2)");
const McBar3 = McButton.querySelector("b:nth-child(3)");
const menu = document.querySelector(".menu__list");
const menuBtn = document.querySelector('.menu__btn');
const body = document.querySelector("body");

let isActive = false;

McButton.addEventListener("click", () => {
  menu.classList.toggle("menu__list--active");
  body.classList.toggle("locked");
  isActive = !isActive;
  McButton.classList.toggle("active");

  if (isActive) {
    McBar1.animate([{ top: "0%" }, { top: "50%" }], {
      duration: 200,
      easing: "ease-out",
      fill: "forwards",
    });

    McBar3.animate([{ top: "100%" }, { top: "50%" }], {
      duration: 200,
      easing: "ease-out",
      fill: "forwards",
    }).onfinish = () => {
      McBar3.animate(
        [{ transform: "rotateZ(0deg)" }, { transform: "rotateZ(90deg)" }],
        {
          duration: 800,
          easing: "cubic-bezier(0.5, 0, 0.2, 1)",
          fill: "forwards",
        }
      );
    };

    McButton.animate(
      [{ transform: "rotateZ(0deg)" }, { transform: "rotateZ(135deg)" }],
      {
        duration: 800,
        delay: 200,
        easing: "cubic-bezier(0.5, 0, 0.2, 1)",
        fill: "forwards",
      }
    );
  } else {
    McButton.animate(
      [{ transform: "rotateZ(135deg)" }, { transform: "rotateZ(0deg)" }],
      {
        duration: 800,
        easing: "cubic-bezier(0.5, 0, 0.2, 1)",
        fill: "forwards",
      }
    );

    McBar3.animate(
      [{ transform: "rotateZ(90deg)" }, { transform: "rotateZ(0deg)" }],
      {
        duration: 800,
        easing: "cubic-bezier(0.5, 0, 0.2, 1)",
        fill: "forwards",
      }
    ).onfinish = () => {
      McBar3.animate([{ top: "50%" }, { top: "100%" }], {
        duration: 200,
        easing: "ease-out",
        fill: "forwards",
      });
    };

    setTimeout(() => {
      McBar1.animate([{ top: "50%" }, { top: "0%" }], {
        duration: 200,
        easing: "ease-out",
        fill: "forwards",
      });
    }, 800);
  }
});

const swiper = new Swiper(".hero__swiper", {
  slidesPerView: 1,
  effect: "fade",
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

const productSlider = new Swiper(".product__swiper", {
  direction: "vertical",
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
