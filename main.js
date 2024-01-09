"use strict";
// if (import.meta.hot) {
//   import.meta.hot.accept();
// }

import { gsap } from "gsap";
import { EasePack } from "gsap/EasePack";
import { TextPlugin } from "gsap/TextPlugin";
import {CustomEase} from  "gsap/CustomEase";
import * as Snap from "snapsvg-cjs";
import { lock, unlock } from "tua-body-scroll-lock";

gsap.registerPlugin(TextPlugin, EasePack, CustomEase);
const navBtn = document.querySelector(".header__nav-btn");
const contactsBtn = document.querySelector(".header__call-btn");
const loaderEl = document.querySelector(".loader");
const preloaderTl = gsap.timeline({ delay: 0.4 });
const header = document.querySelector(".header");
const navLinksTl = gsap.timeline();
const callLinksTl = gsap.timeline();
const headerEl = document.querySelector(".header");
const heroTextEl = document.querySelector(".hero__text");
const rootEl = document.querySelector(":root");
const heroSect = document.querySelector(".section__hero");
const heroImageEl = document.querySelector(".hero__img-box img");
const navigationEl = document.querySelector(".navigation");
let headerHeight = rootEl.style.getPropertyValue("--header-height");
let offset;
// const toggleNavBar = function (ev) {
//   if (!ev.target.closest("svg")) return;
//   if(navigationEl.getBoundingClientRect().height > window.innerHeight) navigationEl.style.overflowY = "scroll";
//   this.classList.toggle("active");
//   const isActive = this.classList.contains("active");
//   isActive && (headerHeight = rootEl.style.getPropertyValue("--header-height"));
//   headerEl.style.setProperty("--height", `${isActive ? "100vh" : "100%"}`);
//   // this.parentElement.style.setProperty("--call-btn-height", `${isActive ? "100vh" : "100%"}`);
//
//   // header.style.setProperty("backgroundColor", `${isActive ? "transparent" : "#fff"}`);
//   // header.style.setProperty("--opacity", `${isActive ? "1" : "0"}`);
//   // gsap.set(".header__nav-btn", {
//   //   top: this.classList.contains("active") ? "100%" : 0,
//   // });
//   // htmlEl.style.overflowY = `${isActive ? "hidden" : "auto"}`;
//   // document.body.style.overflowY = `${isActive ? "hidden" : "auto"}`;
//   gsap.to(".header__picture", {
//     y: `${isActive ? "-100%" : 0}`,
//     duration: 0.6,
//   });
//   gsap.to(".header__call-btn", {
//     y: `${isActive ? "-100%" : 0}`,
//     duration: 0.5,
//   });
//   gsap.to(".header", {
//     "--top": `${isActive ? "-100%" : 0}`,
//     duration: 0.5,
//   });
//   gsap.to(":root", {
//     "--header-height": isActive ? "6rem" : headerHeight,
//   });
//   gsap.to(".navigation", {
//     xPercent: `${isActive ? -100 : 0}`,
//     duration: 0.75,
//     ease: "circ.inOut",
//     onStart: () => {
//       if (!isActive) {
//         // document.body.style.overflowY = "scroll";
//         // htmlEl.style.overflowY = "scroll";
//         // gsap.set(".header", {
//         //   top: 0
//         // })
//         console.log(offset);
//         window.scrollTo(0, offset);
//         document.body.classList.remove('fixed');
//         document.documentElement.classList.remove("fixed")
//       }
//     },
//     onComplete: () => {
//       if (isActive) {
//         // document.body.style.overflowY = "hidden";
//         // htmlEl.style.overflowY = "hidden";
//         // console.dir(window);
//         // console.log(offset);
//         // console.log(window.innerHeight);
//         // gsap.set(".header", {
//         //   top: 0
//         // })
//         // document.body.style.top = (offset) + 'px';
//         offset = window.scrollY;
//         console.log(offset);
//         document.body.classList.add('fixed');
//         document.documentElement.classList.add("fixed")
//       }
//     },
//     // onStart: () => {
//     //   if (!isActive) {
//     //     document.body.style.overflowY = "auto";
//     //     htmlEl.style.overflowY = "auto";
//     //     // document.body.style.touchAction = "auto";
//     //   }
//     // },
//     // onComplete: () => {
//     //   // if (isActive) {
//     //   // document.body.style.overflowY = "hidden";
//     //   // htmlEl.style.overflowY = "hidden";
//     //   // // document.body.style.touchAction = "none";
//     //   // document.body.classList.toggle("hide");
//     //   if (isActive) {
//     //     // scrollY = window.scrollY;
//     //     // const body = document.body;
//     //     // body.style.position = "fixed";
//     //     // body.style.top = `-${scrollY}`;
//     //   } else {
//     //     const body = document.body;
//     //     // const scrollY = body.style.top;
//     //     // console.log(scrollY);
//     //     //
//     //     // body.style.position = "";
//     //     // window.scrollTo(0, parseInt(scrollY || "0") * -1);
//     //   }
//     //   // window.addEventListener("scroll", () => {
//     //   //   document.documentElement.style.setProperty(
//     //   //     "--scroll-y",
//     //   //     `${window.scrollY}px`
//     //   //   );
//     //   // });
//     //   // document.documentElement.classList.toggle("hide");
//     //   // }
//     // },
//   });
//   isActive &&
//     navLinksTl.to(".nav__item", {
//       xPercent: -100,
//       duration: 0.2,
//       stagger: 0.1,
//       delay: 0.25,
//     });
//
//   !isActive &&
//     navLinksTl.to(".nav__item", {
//       xPercent: 0,
//     });
// };

const machineGunText = function () {
  gsap.set(".hero", { y: "45%" });
  const wordSpans = document.querySelectorAll(".loader span");
  wordSpans.forEach((span, index) => {
    // const duration = Math.max(0.2, span.innerText.length * 0.08);
    gsap.set(span, { autoAlpha: 1, scale: 0, z: 0.01 });
    preloaderTl
      .to(span, { scale: 1.2, ease: "slow(0.25, 0.9)", duration: 0.3 })
      .to(span, {
        autoAlpha: `${index === wordSpans.length - 1 ? 1 : 0}`,
        ease: "slow(0.25, 0.9, true)",
        duration: 0.2,
      });
  });
  preloaderTl
    .to(".loader", {
      yPercent: "-100",
      duration: 1,
      ease: "power2.inOut",
      // window.scrollTo(0, 1);
      onStart: () => window.scrollTo(0, 1),
      onComplete: () => {
        document.querySelector(".loader").style.visibility = "hidden";
        unlock();
      },
    })
    .to(
      loaderEl.lastElementChild,
      {
        yPercent: "-50",
        duration: 0.75,
        ease: "power2.inOut",
      },
      "<"
    )
    .to(
      ".hero",
      {
        y: 0,
        duration: 0.95,
        ease: "expo.inOut",
      },
      "<"
    )
    .to(
      ".hero__img-box",
      {
        "--opacity": 0,
        duration: 1,
        ease: "sine.inOut",
      },
      "> -0.4"
    )
    .to(".hero__img-box img", {
      scale: 1,
      duration: 5,
      ease: "sine.out",
    });
};
lock();
machineGunText();


// preloaderTl.to(".heading-1 span", { duration: 1, text: "اعتماد بنفس" });

// window.onresize = function() {
//     document.body.height = window.innerHeight;
// }
// window.onresize();

window.addEventListener(
  "resize",
  () => (document.body.height = window.innerHeight)
);

/////////////////////////////////////////////

const duration = 0.75; //change this
const pause = 2; // change this
const numberOfTargets = document.querySelectorAll(".v-slide").length;
const stagger = duration + pause;
const repeatDelay = stagger * (numberOfTargets - 1) + pause;
const tl = gsap.timeline({ delay: 3 });

tl.from(".v-slide", {
  yPercent: -100,
  duration: duration,
  stagger: {
    each: stagger,
    repeat: -1,
    repeatDelay: repeatDelay,
  },
}).to(
  ".v-slide",
  {
    yPercent: 100,
    duration: duration,
    stagger: {
      each: stagger,
      repeat: -1,
      repeatDelay: repeatDelay,
    },
  },
  stagger
);

/////////////////////////////////////////

const toggleHeader = function (entries) {
  entries.forEach((entry) => {
    gsap.to(":root", {
      "--header-height": !entry.isIntersecting ? "6rem" : "8rem",
      duration: 0.3,
      ease: "sine",
    });
    headerEl.classList.toggle("compact", !entry.isIntersecting);
  });
};

const heroTextObserver = new IntersectionObserver(toggleHeader, {
  threshold: 0.65,
});

heroTextObserver.observe(heroImageEl);

////////////////////////////////////////////////////////

const svg = document.querySelector(".header__svg--call");

const phoneIcon = Snap.select(".header__phone-icon");
const crossIcon = Snap.select(".header__cross-icon");

const phoneIconPoints = phoneIcon.node.getAttribute("d");
const crossIconPoints = crossIcon.node.getAttribute("d");

const toCrossIcon = function () {
  phoneIcon.animate({ d: crossIconPoints }, 250);
};

const toPhoneIcon = function () {
  phoneIcon.animate({ d: phoneIconPoints }, 250);
};

let showPhoneBtn = true;

// const toggleContacts = function () {
//   const phoneBtn = document.querySelector(".header__call-btn");
//   phoneBtn.classList.toggle("active");
//   const isActive = phoneBtn.classList.contains("active");
//   headerEl.style.setProperty("--height", `${isActive ? "100vh" : "100%"}`);
//   gsap.to(".header__picture", {
//     y: `${isActive ? "-100%" : 0}`,
//     duration: 0.5,
//   });
//   gsap.to(".header__nav-btn", {
//     y: `${isActive ? "-100%" : 0}`,
//     duration: 0.5,
//   });
//   gsap.to(".header", {
//     "--top": `${isActive ? "-100%" : 0}`,
//     duration: 0.5,
//   });
//   gsap.to(".contacts", {
//     xPercent: `${isActive ? 100 : 0}`,
//     duration: 0.75,
//     ease: "circ.inOut",
//     onStart: () => {
//       if (!isActive) {
//         document.body.style.overflowY = "scroll";
//         htmlEl.style.overflowY = "scroll";
//         document.body.style.touchAction = "auto";
//       }
//     },
//     onComplete: () => {
//       if (isActive) {
//         document.body.style.overflowY = "hidden";
//         htmlEl.style.overflowY = "hidden";
//         document.body.style.touchAction = "none";
//       }
//     },
//   });
//   const test = document.querySelector(".contacts__item").getBoundingClientRect();
//   console.log(test)
//   isActive &&
//     callLinksTl.to(".contacts__item", {
//       xPercent: 100,
//       duration: 0.15,
//       stagger: 0.075,
//       delay: 0.25,
//     });
//
//   !isActive &&
//   navLinksTl.to(".contacts__item", {
//     xPercent: 0,
//   });
// };

const toggleAnimations = function (
  side,
  animationDuration,
  isActive,
  notActiveEl,
  activeEl,
  elementName
) {
  gsap.to(":root", {
    "--header-height": isActive ? "6rem" : headerHeight,
    duration: 0.4,
  });
  gsap.to(".header__logo", {
    y: `${isActive ? "-100%" : 0}`,
    duration: 0.75,
    ease: "circ.inOut"
  });
  gsap.to(notActiveEl, {
    y: `${isActive ? "-100%" : 0}`,
    duration: 0.75,
    ease: "circ.inOut"
  });
  gsap.to(".header", {
    "--top": `${isActive ? "-100%" : 0}`,
    duration: 0.75,
    ease: "circ.inOut"
  });

  gsap.to(activeEl, {
    xPercent: `${isActive ? (side ? 100 : -100) : 0}`,
    duration: 0.75,
    ease: "circ.inOut",
    // onStart: () => {
    //   // console.log(isActive)
    //   // if (!isActive && document.body.style.top) {
    //     // gsap.set(".header", {"--bar-top": -document.body.style.top} )
    //   // }
    //   // document.body.classList.remove("fixed");
    //   // window.scrollTo(0, offset);
    //   // document.documentElement.classList.remove("fixed");
    //   // else {
    //   //     console.log("YES");
    //   if (isActive) return;
    //   lock(activeEl);
    //   headerEl.style.backgroundColor = "transparent";
    // }
    // },
    // onStart: () => {
    //   if (isActive) return;
    //   unlock(activeEl);
    // },
    // onComplete: () => {
    //   if (!isActive) return;
    //   lock(activeEl)
    // console.log(activeEl.style.backgroundColor)
    // console.log(document.body.top);
    // if (isActive && document.body.style.top) {
    //   gsap.set(".header", {"--bar-top": -document.body.style.top} )
    // }
    // offset = window.scrollY;
    // document.body.classList.add("fixed");
    // document.documentElement.classList.add("fixed");
    // else
    // if (!isActive) return
    // console.log(isActive)
    // unlock(activeEl)
    // headerEl.style.backgroundColor = "#ccf4f8";
    // },
  });

  isActive &&
    navLinksTl.to(`.${elementName}__item`, {
      xPercent: side ? 100 : -100,
      duration: animationDuration,
      stagger: animationDuration / 2,
      delay: 0.25,
    });

  !isActive &&
    navLinksTl.to(`.${elementName}__item`, {
      xPercent: 0,
    });
};
const toggle = function (notActiveEl, ev) {
  console.log(this);
  if (!ev.target.closest("svg")) return;

  this.classList.toggle("active");

  const isActive = this.classList.contains("active");
  const elementName = this.dataset.element;
  const activeEl = document.querySelector(`.${elementName}`);
  const itemsCount = document.querySelectorAll(`.${elementName}__item`).length;
  const animationDuration =
    Math.round((-0.008333333333333337 * itemsCount + 0.25) * 1000) / 1000;
  const side = activeEl.getBoundingClientRect().left < 0;
  console.log(activeEl);
  if (activeEl.getBoundingClientRect().height > window.innerHeight)
    activeEl.style.overflowY = "scroll";
  isActive ? lock(activeEl) : unlock(activeEl);
  isActive && (headerHeight = rootEl.style.getPropertyValue("--header-height"));
  headerEl.style.setProperty("--height", `${isActive ? "100vh" : "100%"}`);

  toggleAnimations(
    side,
    animationDuration,
    isActive,
    notActiveEl,
    activeEl,
    elementName
  );
};
const toggleContactsBtn = function (ev) {
  if (!ev.target.closest("svg")) return;
  showPhoneBtn ? toCrossIcon() : toPhoneIcon();
  showPhoneBtn = !showPhoneBtn;
  toggle.call(this, navBtn, ev);
};

navBtn.addEventListener("click", toggle.bind(navBtn, contactsBtn));
contactsBtn.addEventListener("click", toggleContactsBtn);

//////////////////////////////////////////////////

// gsap.to(".footer", {
//   backgroundSize: "150% 100%",
//   duration: 10,
//   repeat: -1,
//   yoyo: true,
//   ease: "sine",
// });

////////////////////////////////////////////////////

// const footerCols = [...document.querySelectorAll(".footer__heading")];
// const footerColTimeLines = footerCols.map(() => {
//   return gsap.timeline({
//     paused: true,
//     duration: 0.2,
//     ease: "power1.inOut",
//   });
// });
//
// const toggleLinksAnimation = function (list, items, play, footerTl) {
//   // footerTl
//   //   .fromTo(
//   //     list,
//   //     { height: 0, visibility: "hidden" },
//   //     { height: "auto", visibility: "visible" }
//   //   )
//   //   .fromTo(
//   //     items,
//   //     { opacity: 0, y: "0.5em" },
//   //     { opacity: 1, y: "0em", stagger: 0.05 }
//   //   );
//   //
//   // play ? footerTl.reverse(1) : footerTl.play();
//   // footerTl.pause();
// };

const footerLinkTl = gsap.timeline();
const toggleLinks = function (ev) {
  if (!ev.target.closest(".footer__heading")) return;
  // if (footerLinkTl.isActive()) return;
  const target = ev.target.closest(".footer__heading");
  // const footerColumn = target.parentElement;
  const list = target.nextElementSibling;
  const items = list.querySelectorAll(".footer__item");
  const isCollapsed = target.querySelector(".collapsed");
  // const duration = 1 / items.length;
  // const stagger = duration / items.length;

  // ev.target
  //   .querySelector(".footer__expand-collapse")
  //   .classList.toggle("collapsed");
    target.classList.toggle("clicked")
  if (isCollapsed) {
    footerLinkTl.to(items, {
      opacity: 0,
      // y: "-0.5rem",
      // duration: 0.3,
      stagger: 0.1,
      ease: "back.inOut",
    }).to(
      list,
      {
        height: 0,
        visibility: "hidden",
        duration: 0.3,
        ease: "sine.inOut",
      },
        "<"
    );
  } else {
    footerLinkTl.to(list, {
      height: "auto",
      visibility: "visible",
      duration: 0.3,
      ease: "sine.inOut",
    }).fromTo(
      items,
      { opacity: 0, y: "1rem"},
      { opacity: 1, y: 0, stagger: 0.1, ease: "back.inOut" },
    );
  }
  target
    .querySelector(".footer__expand-collapse")
    .classList.toggle("collapsed");
  // targetLinkTl
  //   .fromTo(
  //     list,
  //     { height: 0, visibility: "hidden" },
  //     { height: "auto", visibility: "visible" },
  //     0
  //   )
  //   .fromTo(
  //     items,
  //     { opacity: 0, y: "0.5em", stagger: 0.1 },
  //     { opacity: 1, y: "0em", stagger: 0.1 }
  //   );
  // menuOpen ? targetLinkTl.reverse(1) : targetLinkTl.play();
  // tl.fromTo(".menu-icon", { rotation: 0 }, { rotation: 180 }, 0)
  // footerTl
  //   .to(list, {
  //     visibility: menuOpen ? "hidden" : "visible",
  //     height: menuOpen ? 0 : "auto",
  //   })
  //   .to(items, {
  //     opacity: menuOpen ? 0 : 1,
  //     y: menuOpen ? 0 : "0.5em",
  //     stagger: 0.1,
  //   });
  // footerTl.fromTo(".menu-icon", { rotation: 0 }, { rotation: 180 }, 0)
};
const footerEl = document.querySelector(".footer");
footerEl.addEventListener("click", toggleLinks);
