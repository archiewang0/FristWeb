const prodGridItem = document.querySelector("main.main-product");


const scrollProdShowOut = new TimelineMax();
scrollProdShowOut.staggerFrom("div.grid-item", 1, {
  y: "100px",
  opacity: "0",
  ease: Expo.easeOut,
},.1);
scrollProdShowOut.stop()



if (window.innerHeight > prodGridItem.offsetTop - 145) {
  scrollProdShowOut.play();
}
  const ProdShow = function () {

    if (this.scrollY > prodGridItem.offsetTop - window.innerHeight/1.5) {
      scrollProdShowOut.play();
    }
  };



window.addEventListener('scroll',ProdShow)