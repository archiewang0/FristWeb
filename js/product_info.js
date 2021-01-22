const subtotal = document.querySelector("h6.subtotal_show");
 
const colorInputChecked = document.querySelectorAll(
  "div.product_color div input"
);

colorInputChecked.forEach((e) => {
  e.onclick = () => {
    e.checked = true;
  };
});

const product_cartBtnSub = document.querySelector(
  "div.pd_quan_outline>input.btn_sub"
);

const product_cartBtnAdd = document.querySelector(
  "div.pd_quan_outline>input.btn_add"
);

//中間的input
const product_quanNumber = document.querySelector(
  "div.pd_quan_outline>input.quan_num"
);

product_cartBtnAdd.addEventListener("click", () => {
  product_quanNumber.stepUp(1);
  subtotal.innerHTML = `${parseInt(product_quanNumber.value) * 1000} NT$`;
});
product_cartBtnSub.addEventListener("click", () => {
  product_quanNumber.stepDown(1);
  subtotal.innerHTML = `${parseInt(product_quanNumber.value) * 1000} NT$`;
  console.log(parseInt(product_quanNumber));
});

//點擊add to cart 展開cart
const addToCart = document.getElementById("add_to_cart");
const cartList = document.querySelector("ul.cart_list");

//抓取購物車裡面放 subtotal 的地方
let cart_subtotal = 0;

//點擊加入購物車
addToCart.addEventListener("click", (e) => {
  cartBdoy.classList.add("cart_show");

  // console.log(e.target);
  // console.log(e.target.parentNode);
  // console.log(e.target.parentNode.parentNode.parentNode.parentNode);

  const imgUrl = e.target.parentNode.parentNode.parentNode.parentNode.querySelector(
    "main.product_img>img"
  ).src;

  const formBody = e.target.parentNode.parentNode;

  const findCheckInput = function (selector) {
    const inputs = formBody.querySelectorAll(selector);

    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].checked) {
        return inputs[i].value;
      }
    }
  };

  const prodInfo = {
    prodName: formBody.querySelector("section.page_title>h1.button-title")
      .innerHTML,
    designer: formBody.querySelector("div.designer_info div h6").innerHTML,
    size: findCheckInput("div.product_size div label input"),
    color: findCheckInput("div.product_color div label input"),
    quan: formBody.querySelector(
      "div.product_quantity div.pd_quan_outline input.quan_num"
    ).value,
    subtotal: formBody
      .querySelector("div.product_subtotal div h6.subtotal_show")
      .innerHTML.split(" ")
      .shift(),
    imgUrl: imgUrl,
  };

  // console.log(prodInfo);

  const prodEl = document.createElement("li");
  prodEl.className = "list_proudct";
  prodEl.innerHTML = `
      <div class="item_img">
        <img src="${prodInfo.imgUrl}" alt="" />
        <div class="item_info">
          <div class="info_top">
            <p>${prodInfo.designer}</p>
            <h4>${prodInfo.prodName}</h4>
          </div>
          <div class="info_bottom">
            <p>Size:${prodInfo.size}</p>
            <p>Color:${prodInfo.color}</p>
          </div>
        </div>
      </div>

      <div class="item_quan">
        <div class="quan_outline">
          <input class="btn_sub" value="-" type="button" />
          <input
            class="quan_num"
            type="number"
            value="${prodInfo.quan}"
            min="1"
            max="100"
            readonly
          />
          <input class="btn_add" value="+" type="button" />
        </div>
      </div>

      <div class="item_price">${prodInfo.subtotal} NT$</div>

      <div class="item_delete">
        <input type="button" value="Delete" class="cartItemDelBtn" />
      </div>
    `;

  cartList.append(prodEl);

  //抓取新建的add sub input
  const newAddProdBtnSub = prodEl.querySelector("input.btn_sub");
  const newAddProdBtnAdd = prodEl.querySelector("input.btn_add");
  const newQuanNum = prodEl.querySelector("input.quan_num");

  let itemPrice = prodEl.querySelector("div.item_price").innerHTML;
  itemPrice = itemPrice.split(" ").shift();

  //買次典籍addtocart 新的內容會加過來
  cart_subtotal = cart_subtotal + parseInt(itemPrice);
  //並且show 在cart 的subtotal
  document.querySelector(
    "div.row_subtotal > h4:last-child"
  ).innerHTML = `${cart_subtotal} NT$`;

  let prodListSubtotal; //清單上面顯示價位

  //抓取cart 的subtotal

  // console.log(cart_subtotal);

  newAddProdBtnAdd.onclick = () => {
    newQuanNum.stepUp(1);

    //點擊成與input的value
    prodListSubtotal = parseInt(itemPrice) * newQuanNum.value;
    //顯示在上面
    prodEl.querySelector(
      "div.item_price"
    ).innerHTML = `${prodListSubtotal} NT$`;

    //之前數目 在 增加的數目
    cart_subtotal = prodListSubtotal;
    //並且show 在cart 的subtotal
    document.querySelector(
      "div.row_subtotal > h4:last-child"
    ).innerHTML = `${cart_subtotal} NT$`;
  };

  newAddProdBtnSub.onclick = () => {
    newQuanNum.stepDown(1);

    prodListSubtotal = parseInt(itemPrice) * newQuanNum.value;

    prodEl.querySelector(
      "div.item_price"
    ).innerHTML = `${prodListSubtotal} NT$`;
  };

  //抓取delete button
  const newItemDelBtn = prodEl.querySelector("input.cartItemDelBtn");

  newItemDelBtn.onclick = (e) => {
    e.target.parentNode.parentNode.remove();
    if ([...cartList.children].length == 1) {
      [...cartList.children][0].style.display = "block";
      document.querySelector(
        "div.row_subtotal > h4:last-child"
      ).innerHTML = `0 NT$`;
      // console.log("work1");
      // console.log([...cartList.children][0].style.display);
    } else {
      [...cartList.children][0].style.display = "none";
      // console.log('work2')
    }
  };

  //新的內容 也要註冊cursor
  const cursorForNewInputs = prodEl.querySelectorAll("input");

  cursorForNewInputs.forEach((e) => {
    e.addEventListener("mouseover", () => {
      timeLineChangeHoverCursor.play();
    });

    e.addEventListener("mouseleave", () => {
      timeLineChangeHoverCursor.reverse();
    });
  });
});

//大圖小圖
const previewImgs = document.querySelectorAll("div.previewImg");
//左右調整圖
const changeImgBtns = document.querySelectorAll("div.chang_img_icon");

const prodImgChangeIcons = [
  ...document.querySelectorAll("div.prodImgChangeIcon>button"),
];



let prodImgCurrentindex = 0;
function changeImage(e) {
  const imgsContainer = document.querySelector("div.product_left");

  if (e.target == [...e.target.parentNode.children][1]) {
    prodImgCurrentindex++;

    const imgCount = [
      ...document.querySelector("main.product_container>div.product_left")
        .children,
    ].length;

    if (prodImgCurrentindex > imgCount - 1) {
      prodImgCurrentindex = 0;
    }

    const imgWidth = document
      .querySelector("main.product_container>div.product_left>div")
      .getBoundingClientRect().width;

    imgsContainer.style.left = `${imgWidth * prodImgCurrentindex * -1}px`;
  } else {
    prodImgCurrentindex--;

    const imgCount = [
      ...document.querySelector("main.product_container>div.product_left")
        .children,
    ].length;

    if (prodImgCurrentindex < 0) {
      prodImgCurrentindex = imgCount-1;
    }

    const imgWidth = document
      .querySelector("main.product_container>div.product_left>div")
      .getBoundingClientRect().width;

    imgsContainer.style.left = `${imgWidth * prodImgCurrentindex * -1}px`;
  }
}

const changeImgHandler = function (e) {
  const mainImg = document.querySelector("main.product_img").children[0];
  mainImg.src = `${e.target.src}`;
};

const changeNumber = function (e) {
  const currentPostion = [...previewImgs].indexOf(e.target.parentNode) + 1;
  const imgNumber = e.target.parentNode.parentNode.parentNode.querySelector(
    "div.img_number>h1"
  );
  imgNumber.innerHTML = currentPostion;
};



////////cart沒有東西更改 價錢/////////
// console.log([...cartList.children]);

const checkCartListItem = function () {
  if ([...cartList.children].length == 1) {
    [...cartList.children][0].style.display = "display";
    document.querySelector(
      "div.row_subtotal > h4:last-child"
    ).innerHTML = `0 NT$`;
  } else {
    [...cartList.children][0].style.display = "none";
  }
};

navCartIcon.addEventListener("click", checkCartListItem);
addToCart.addEventListener("click", checkCartListItem);
//以 事件物件 的目標來判斷 點及左邊還是右邊
prodImgChangeIcons.forEach((button) =>
  button.addEventListener("click", changeImage)
);
previewImgs.forEach((e) => {
  e.addEventListener("click", changeImgHandler);
  e.addEventListener("click", changeNumber);
});
