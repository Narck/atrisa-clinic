"use strict";

import { gsap } from "gsap";

import { CustomEase } from "gsap/CustomEase";
import { SlowMo } from "gsap/EasePack";

import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/Observer";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { EaselPlugin } from "gsap/EaselPlugin";
import { PixiPlugin } from "gsap/PixiPlugin";
import { TextPlugin } from "gsap/TextPlugin";
import { EasePack } from "gsap/EasePack";

gsap.registerPlugin(TextPlugin, EasePack);

const navBtn = document.querySelector(".ham8");
const loaderEl = document.querySelector(".loader");
const preloaderTl = gsap.timeline({ delay: 0.4 });

const toggleNavBar = function () {
    this.classList.toggle("active")
}

navBtn.addEventListener("click", toggleNavBar)
const machineGunText = function () {
    document.body.style.overflowY = "hidden";
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
      y: "-100vh",
      duration: 1,
      ease: "power2.inOut",
    }).to(loaderEl.lastElementChild, {
      yPercent: "-50",
      duration: .75,
      ease: "power2.inOut",
  }, "<")
    .to(".section__hero", {
      y: "0",
      duration: 1.05,
      ease: "power2.inOut",
    }, "<");
    document.body.style.overflowY = "auto";
};

machineGunText();

preloaderTl.to(".heading-1 span", {duration: 1, text: "اعتماد بنفس"})