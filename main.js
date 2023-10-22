import "./style.scss";
import gsap from "gsap";

const sun = document.querySelector(".sun");
const moon = document.querySelector(".moon");
const circle = document.querySelector(".circle");
const body = document.querySelector("body");
const container = document.querySelector(".container");
const content = document.querySelector(".content");
const codebyln = document.querySelector(".codebyln");

moon.addEventListener("click", () => {
  gsap.to(body, { backgroundColor: "#111014" });
  gsap.to(container, { borderColor: "#1e2027" });
  gsap.to(content, { backgroundColor: "#1e2027" });
  gsap.to(circle, { backgroundColor: "#511dbe", left: "75px" });
  gsap.to(sun, { rotate: "45deg" });
  gsap.to(".sun svg path", { fill: "#a5a4ab" });
  gsap.to(".moon svg path", { fill: "#fff" });
  gsap.to(codebyln, { color: "#511dbe" });
});

sun.addEventListener("click", () => {
  gsap.to(body, { backgroundColor: "#dbd9dc" });
  gsap.to(container, { borderColor: "#cbc9cc" });
  gsap.to(content, { backgroundColor: "#e3e1e4" });
  gsap.to(circle, { backgroundColor: "#f29f6b", left: "5px" });
  gsap.to(sun, { rotate: "-45deg" });
  gsap.to(".sun svg path", { fill: "rgba(255,255,255,1)" });
  gsap.to(".moon svg path", { fill: "rgba(203,201,204,1)" });
  gsap.to(codebyln, { color: "#f29f6b" });
});
