const aboutTexts = [...document.querySelectorAll("img.about_text")];
const aboutBg = document.getElementById("about_bg");
const aboutContent = document.querySelector("main.about_content");

window.addEventListener("scroll", () => {
  const value = window.scrollY;

  if (window.innerWidth >= 1201) {
    aboutTexts.forEach((aboutText) => {
      aboutText.style.top = value / 1.8 + "px";
    });

    aboutContent.style.transform = `translate(0,${-value / 2}px)`;
  }

  // aboutBg.style.transform = `translate(0,${-value/15}px)`;

  // console.log(value)

  // console.log(window.innerWidth)

  if (window.innerWidth <= 1200 && window.innerWidth >= 992) {
    aboutTexts.forEach((aboutText) => {
      aboutText.style.top = value / 4 + "px";
    });

    aboutContent.style.transform = `translate(0,${-value / 3}px)`;
  }

  if (window.innerWidth <= 991 && window.innerWidth >= 768) {
    aboutTexts.forEach((aboutText) => {
      aboutText.style.top = value / 1.8 + "px";
    });
    aboutContent.style.transform = `translate(0,${-value / 3}px)`;
  }

  if (window.innerWidth <= 767 && window.innerWidth >= 576) {
    aboutTexts.forEach((aboutText) => {
      aboutText.style.top = value / 1.5 + "px";
    });

    aboutContent.style.transform = `translate(0,${-value / 2.5}px)`;
  }

  if (window.innerWidth <= 575) {
    // aboutTexts.forEach((aboutText) => {
    //   aboutText.style.top = value / 1 + "px";
    // });

    aboutContent.style.transform = `translate(0,${-value / 0.8}px)`;
  }
});

//about 的色塊動畫

const aboutTimeline = new TimelineMax();

aboutTimeline
  .from("img.about_text", 1, {
    transform: "translate(0,-100%)",
  },.3)
  .to("div.animateBlock", 5, {
    height: "0px",
    display: "none",
    ease: Expo.easeOut,
  });

// setTimeout(()=>{
//   TweenMax.from("img.about_text", 1, {
//     transform: "translate(0,-100%)",
//   });
//   TweenMax.to("div.animateBlock", 5, {
//     height: "0px",
//     display: "none",
//     ease: Expo.easeOut,
//   });
// }, 1000);
