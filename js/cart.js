

//////////////////////////////////////////////////////////////////////
//////////將產品加入倒 array中 並且render 出來///////////////////
let productItems = [];


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

navCartIcon.addEventListener("click", () => {
  if (productItems.length == 0) {
    [...document.querySelector("ul.cart_list").children][0].style.display =
      "display";
    document.querySelector(
      "div.row_subtotal > h4:last-child"
    ).innerHTML = `0 NT$`;
  } else {
    [...document.querySelector("ul.cart_list").children][0].style.display =
      "none";
  }
});

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






const subtotal = document.querySelector("h6.subtotal_show");


///////// productinfo 的顏色選擇////
const colorInputChecked = document.querySelectorAll(
  "div.product_color div input"
);

///////////////////////////////////////////////////////////////////////////////////
///////// productinfo 的商品數量修改////
// const product_cartBtnSub = document.querySelector(
//   "div.pd_quan_outline>input.btn_sub"
// );

// const product_cartBtnAdd = document.querySelector(
//   "div.pd_quan_outline>input.btn_add"
// );
// console.log(product_cartBtnAdd);

// //中間的input 展示出來
// const product_quanNumber = document.querySelector(
//   "div.pd_quan_outline>input.quan_num"
// );

// product_cartBtnAdd.addEventListener("click", () => {
//   product_quanNumber.stepUp(1);
//   subtotal.innerHTML = `${parseInt(product_quanNumber.value) * 1000} NT$`;
// });
// product_cartBtnSub.addEventListener("click", () => {
//   product_quanNumber.stepDown(1);
//   subtotal.innerHTML = `${parseInt(product_quanNumber.value) * 1000} NT$`;
//   console.log(parseInt(product_quanNumber));
// });
///////////////////////////////////////////////////////////////////////////////////

//點擊add to cart 展開cart
const addToCart = document.getElementById("add_to_cart");
const cartList = document.querySelector("ul.cart_list");

//抓取購物車裡面放 subtotal 的地方
let cart_subtotal = 0;





  const renderArray = function () {
    //取得最後的 array item
    const prodInfo = productItems[productItems.length - 1];

    prodEl = document.createElement("li");
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


    //新被建 的btn 也要註冊處理器
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
        
        console.log();
        console.log(prodInfo);

        const itemIndex = productItems.findIndex(
          (item) => item.id == prodInfo.id
        );
        
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
  };


//點擊加入購物車
addToCart.addEventListener("click", (e) => {
    //展開購物車
  cartBdoy.classList.add("cart_show");

  const imgUrl = e.target.parentNode.parentNode.parentNode.parentNode.querySelector(
    "main.product_img>img"
  ).src;

  const formBody = e.target.parentNode.parentNode;

  //檢查內容的 input 被點選之後 value 會回傳
  const findCheckInput = function (selector) {
    const inputs = formBody.querySelectorAll(selector);

    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].checked) {
        return inputs[i].value;
      }
    }
  };


  const prodInfo = {
    id: Math.random(),
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

  productItems.push(prodInfo);
  

  renderArray()

});