/////////////////
//跑banner輪播
/////////////////

let counter = 1;
setInterval(function () {
  document.getElementById("radio" + counter).checked = true;
  bannerTiltleAni()
  counter++;
  if (counter > 3) {
    counter = 1;
  }
}, 7000);

/////////////////
//跑banner輪播
/////////////////

//////banner content 展現 隱藏///////////////////////////////////////////////////

const manualBtns = [...document.querySelectorAll('label.manual-btn')]

// for(let i =0 ; i< manualBtns.length ; i++){
// 	console.log(manualBtns[i])
// }

let contentNo = 3;

//變更內容
const changeTile = function(){
  const title = document.querySelector('div.banner-content >div.left>h1')
  const content = document.querySelector('div.banner-content >div.right>div.context-side>h3')

  switch (contentNo){
	case 1:
	  title.innerHTML = "NEWEST!!"
	  content.innerHTML = 'XXOO Brand from Alex Bagshawe start selling...'
	  break;
	case 2:
	  title.innerHTML = "XMAS GIFT"
	  content.innerHTML = 'All testful gifts start selling in Dooble ...'
	  break;

	case 3:
	  title.innerHTML = "TOP SELLER"
	  content.innerHTML = 'Discover popular proudct in  dooble good...'
	  break;
  }

  contentNo ++;
  if(contentNo > 3){
	contentNo = 1;
  }
}

const bannerTitle_tl = new TimelineMax()
bannerTitle_tl
    .to('div.slides > div.slide>img', 0.5, {
        width: '85%',
        height: '85%',
        ease: Power4.easeOut,
    })
    .to('div.banner-content > div.left', 0.5, {
        x: '100px',
        opacity: 0,
        ease: Power4.easeOut,
        // onComplete: changeTile.bind(null, contentNo),
        onComplete: changeTile,
        delay: -0.2,
    })
    .to('div.banner-content > div.right > div.context-side', 0.5, {
        x: '100px',
        opacity: 0,
        ease: Power4.easeOut,
        delay: -0.2,
    })
	bannerTitle_tl.stop()


//動畫執行
const bannerTiltleAni = function(){

	bannerTitle_tl.play()

  setTimeout(()=>{
    bannerTitle_tl.reverse();
  },1000)

}

manualBtns.forEach((btn) => btn.addEventListener('click', bannerTiltleAni))


//////banner content 展現 隱藏///////////////////////////////////////////////////




///一開始不能滾動頁面
const stayTop = function () {

  
  //遇到load event lisenter 需要設setTimeout 讓他離reload 狀態遠一點 避免被洗掉
  setTimeout(()=>{
      window.scrollBy({
        left: 0, 
        top: -window.pageYOffset,
      });
  },0)

  const body = document.body;
  body.height = "100vh";
  body.style.overflow = "hidden";

  setTimeout(() => {
    body.height = "unset";
    //之前的要解除 也要加回之前X 會隱藏
    body.style.overflow = "unset";
    body.style.overflowX = "hidden";
  }, 3000);
};

window.addEventListener('load', stayTop); 

//首頁開始動畫
const indexTl = new TimelineMax();

// indexTl.from("div.nav.left-side", .3,{ x: "20px", opacity: "0" });

// console.log(document.querySelector("#menu_icon"));

indexTl
  .staggerTo(
    "div.second-row>img.ani-font",
    1,
    { rotationX: -90, ease: SlowMo.ease.config(0.7, 0.7, false) },
    1
  )
  .add([
    TweenMax.from("div.second-row>img.main", 1, {
      rotationX: 90,
      ease: Expo.easeOut,
    }),
    TweenMax.to("div.ani-cover", 1, {
      height: "0px",
      display: "none",
      ease: Expo.easeOut,
    }),
  ])
  .add([
    TweenMax.from("div.nav.left-side", 0.5, {
      x: "-100px",
      opacity: "0",
      ease: Expo.easeOut,
    }),
    TweenMax.from("div.nav.right-side", 1.5, {
      x: "-100px",
      opacity: "0",
      ease: Expo.easeOut,
    }),
    TweenMax.from("div.first-row", 1, {
      x: "-100px",
      opacity: "0",
      ease: Expo.easeOut,
    }),
  ]);


  // 抓取scroll down 的並且點選會 smooth 的滑動
  const scrollDown = document.querySelector("div.scroll-side > a");
  const productSection = document.getElementById("product_section");

  const scrollSmooth = function(e){
    e.preventDefault();
    // console.log(e.target) //target 可能會抓到裡面的物件
    //使用this 也比較保險

    console.log(this.getAttribute("href")); //抓取href="#..." #...就變成value

    //scrollIntoView 可以給予dom 或是給予id
    productSection.scrollIntoView({
      behavior: "smooth",
    });
  }

  scrollDown.addEventListener('click',scrollSmooth)