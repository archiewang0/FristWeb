////////滾到上層滑出內容

window.onscroll = function () {
  const scrollTop = document.documentElement.scrollTop;
  const navPosition = document.querySelector("div.nav-position");

  if (scrollTop === 0) {
    navPosition.classList.add("--on_top");
  } else {
    navPosition.classList.remove("--on_top");
  }
};

////////////////////////////////////////////////////////
//menu open show up/////////////////////////////////////
////////////////////////////////////////////////////////

const menu = document.getElementById("menu");

const test = document.querySelector("div.banner-content > div.left > h1");
const logoContainer = document.querySelector(
  "header > div.nav-position > nav.nav-info > div.first-row > div.col1 > a.logo-container"
);
const h3 = document.querySelector(
  "section.product > div.right > div.right-inner > h3"
);

const button = document.querySelector("section.load-section>button");

const menuIcon = document.getElementById("menu_icon");
const menuCloseIcon = document.getElementById("menu_close_icon");

const productLi_a = document.querySelector("li.menu_product>a");

menuIcon.addEventListener("click", () => {
  //menu_show 沒有加註在 html 上面 只有寫在 css裡面
  //js也不用像 html 需要抓近來

  // window.preventDefault();

  menu.classList.add("menu_show");
});

menuCloseIcon.addEventListener("click", () => {
  menu.classList.remove("menu_show");
});

///////////購物車//////////////////////////
//////////關掉購物車//////////////////////////
/////////////////////////////////////////////

const cartBdoy = document.getElementById("cart");
const cart_closeIcon = document.querySelector("div.cart_close");
const navCartIcon = document.querySelector("div.icon-container.cart-icon");

cart_closeIcon.addEventListener("click", () => {
  cartBdoy.classList.remove("cart_show");
});

navCartIcon.addEventListener("click", () => {
  cartBdoy.classList.add("cart_show");
});

navCartIcon.addEventListener('click',()=>{
  if ([...document.querySelector("ul.cart_list").children].length == 1) {
    [...document.querySelector("ul.cart_list").children][0].style.display = "display";
    document.querySelector(
      "div.row_subtotal > h4:last-child"
    ).innerHTML = `0 NT$`;
  } else {
    [...document.querySelector("ul.cart_list").children][0].style.display = "none";
  }
})


////////購物車數量更改//////////////////////
/**-------------------------------------用新增的方法上去 一開始是空的 */

// const cartBtnSubs = document.querySelectorAll(
//   "div.quan_outline>input[class='btn_sub']"
// );

// const cartBtnAdds = document.querySelectorAll(
//   "div.quan_outline>input[class='btn_add']"
// );

// cartBtnAdds.forEach((e) => {
//   e.onclick = function () {
//     e.parentNode.querySelector("input.quan_num").stepUp(1);
//     // e.cartQuanNum.stepUp(1);
//   };
// });

// cartBtnSubs.forEach((e) => {
//   e.onclick = function () {
//     e.parentNode.querySelector("input.quan_num").stepDown(1);
//   };
// });

////////購物車產品刪除//////////////////////
/**-------------------------------------用新增的方法上去 一開始是空的 */

// const cartItemDelBtn = document.querySelector("input.cartItemDelBtn");

// cartItemDelBtn.addEventListener("click", (e) => {
//   console.log(e.target.parentNode.parentNode);
//   e.target.parentNode.parentNode.remove();
// });

/////////////////////////////////////////////
///////////購物車//////////////////////////
/////////////////////////////////////////////

//////////關掉會員//////////////////////////
const memberCloseIcon = document.querySelector("div.member_close");
const navMemberIcon = document.querySelector("div.icon-container.member-icon");
const memberBody = document.getElementById("member");

//關掉會員
memberCloseIcon.onclick = function () {
  memberBody.classList.remove("member_show");
};
//開啟會員
navMemberIcon.onclick = function () {
  memberBody.classList.add("member_show");
};

////////點選menu 的cart//////////////////////
////////會關掉menu 展開cart/////////////////
////////////////////////////////////////////
const menuCart = document.querySelector("li.menu_cart>a");

menuCart.onclick = function () {
  //關掉menu
  menu.classList.remove("menu_show");
  //show出cart
  cartBdoy.classList.add("cart_show");
};

////////點選menu 的member//////////////////////
////////會關掉menu 展開member/////////////////
////////////////////////////////////////////
const menuMember = document.querySelector("li.menu_member>a");

menuMember.onclick = function () {
  //關掉menu
  menu.classList.remove("menu_show");
  //開啟會員
  memberBody.classList.add("member_show");
};

/////member 選擇頁籤 ///////////
/////////////////////////////////
const login = document.getElementById("login");
const register = document.getElementById("register");

const loginForm = document.getElementById("login_form");
const registerForm = document.getElementById("register_form");

const labelRegister = document.querySelector('div.row1>label[for="register"]');
const labelLogin = document.querySelector('div.row1>label[for="login"]');

login.onclick = function () {
  if (login.checked === true) {
    labelLogin.classList.add("label-on");
    labelRegister.classList.remove("label-on");

    //開啟loginForm
    loginForm.style.display = "flex";
    //關掉registerForm
    registerForm.style.display = "none";
  }
};

register.onclick = function () {
  if (register.checked === true) {
    labelRegister.classList.add("label-on");
    labelLogin.classList.remove("label-on");

    //開啟registerForm
    registerForm.style.display = "flex";
    //關掉loginForm
    loginForm.style.display = "none";
  }
};

/////navbar input focus 會出現選項 ///////////
/////////////////////////////////////////////
//有兩個input 兩個展開option
const searchInputs = document.querySelectorAll('input[placeholder="SEARCH"]');
const searchFocusOptions = document.getElementsByClassName("search_focus");


for (var i = 0; i < searchInputs.length; i++) {
  searchInputs[i].onfocus = function () {
    searchFocusOptions[0].style.display = "flex";
    searchFocusOptions[1].style.display = "flex";
  };
  searchInputs[i].onblur = function () {
    setTimeout(() => {
      searchFocusOptions[0].style.display = "none";
      searchFocusOptions[1].style.display = "none";
    }, 150);
  };
}

/////search icon 點擊////////////////////////
/////////////////////////////////////////////

const smSearchBtn = document.getElementById("sm_search_btn");

const smSearchBody = document.getElementById("sm_search");

const smSearchCloseIcon = document.querySelector("div.search_close");

smSearchBtn.onclick = function () {
  smSearchBody.classList.add("search_show");
};
smSearchCloseIcon.onclick = function () {
  smSearchBody.classList.remove("search_show");
};


/////search icon 點擊////////////////////////
/////////////////////////////////////////////

