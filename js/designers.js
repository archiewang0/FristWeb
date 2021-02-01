
const designersSection = document.querySelector("section.designer_section");


const scrollDesignerShowOut = new TimelineMax();
scrollDesignerShowOut.staggerFrom(
  "a.designer_block",
  1,
  {
    y: "100px",
    opacity: "0",
    ease: Expo.easeOut,
  },
  0.1
);
scrollDesignerShowOut.stop();



if (window.innerHeight > designersSection.offsetTop - 145) {
  scrollDesignerShowOut.play();
}
const ProdShow = function () {
  if (this.scrollY > designersSection.offsetTop - window.innerHeight / 1.5) {
    scrollDesignerShowOut.play();
  }
};

window.addEventListener("scroll", ProdShow);
