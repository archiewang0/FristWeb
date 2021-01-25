const aboutTexts = [...document.querySelectorAll("img.about_text")];
const aboutBg = document.getElementById("about_bg");
const aboutContent = document.querySelector("main.about_content");

window.addEventListener("scroll", () => {
  const value = window.scrollY;

  aboutTexts.forEach((aboutText) => {
    aboutText.style.top = value / 1.8+ "px";
  });

  aboutContent.style.transform = `translate(0,${-value / 2}px)`;
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
      aboutText.style.top = value / 1.8+ "px";
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
      aboutTexts.forEach((aboutText) => {
        aboutText.style.top = value / 1.3 + "px";
      });

      aboutContent.style.transform = `translate(0,${-value / 2.5}px)`;
    }
});
