const aboutText =  document.getElementById("about_text");
const aboutBg = document.getElementById("about_bg");
const aboutContent = document.querySelector("main.about_content");


window.addEventListener('scroll',()=>{
  const value = window.scrollY;

  aboutText.style.top = value/1.5 + 'px';
  aboutContent.style.transform = `translate(0,${-value / 2}px)`;
  // aboutBg.style.transform = `translate(0,${-value/15}px)`;

  // console.log(value)
})


