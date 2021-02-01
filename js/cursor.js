//抓取全部的a 標籤
const TAG_As = document.querySelectorAll("a"); 
const TAG_SELECTs = document.querySelectorAll("select");
const TAG_BUTTONs = document.querySelectorAll("button");
const TAG_INPUTs_BUTTON = document.querySelectorAll('input[type="button"]');
const TAG_LABELs = document.querySelectorAll("label");

//問老師為甚麼不能用getElementsByClassName
const CLASS_CURSORs_POINTER = document.querySelectorAll(".JS_cursor_pointer");

//抓取全部的input type="text" 標籤
const TAG_INPUTs_TEXT = document.querySelectorAll("input[type='text']");

const cursor = document.querySelector(".cursor");
const svgCursor = document.getElementById("svgCursor");


//動畫
let timeLineChangeHoverCursor;



if (window.innerWidth > 575) {
  console.log("work");

  //cursor 變大的動畫 
  const tlCursorToBig = new TimelineMax();
  tlCursorToBig.to("div.cursor", 0.3, { scale: 1.2 });
  tlCursorToBig.stop();

  //cursor 變成別的pointer型式的動畫
  timeLineChangeHoverCursor = new TimelineMax();

  timeLineChangeHoverCursor.add([
    TweenMax.to("div.cursor>svg#svgCursor", 0.2, { width: "0" }),
    TweenMax.to("div.cursor>div.cursorPointer", 0.2, {
      width: "100px",
      height: "100px",
    }),
  ]);
  timeLineChangeHoverCursor.stop();

  //cursor 變成別的text刑事的動畫 
  const timeLineChangeTextCursor = new TimelineMax();

  timeLineChangeTextCursor.add([
    TweenMax.to("div.cursor>svg#svgCursor", 0.2, { width: "0" }),
    TweenMax.to("div.cursor>div.cursortext", 0.2, {
      width: "20px",
      height: "50px",
    }),
  ]);

  timeLineChangeTextCursor.stop();
 
  //cursor跟著動
  document.onmousemove = (e) => {
    cursor.style.display = "block";
    cursor.style.left = e.pageX + "px";
    cursor.style.top = e.pageY + "px";
    cursor.setAttribute("data-fromTop", cursor.offsetTop - scrollY);
  };
  document.addEventListener("scroll", () => {
    const fromTop = cursor.getAttribute("data-fromTop");
    cursor.style.top = scrollY + parseInt(fromTop) + "px";
  });
  document.addEventListener("mouseleave", () => {
    cursor.style.display = "none";
  }); 

  //當滑鼠點擊時 後造成cursor 全部放大
  document.addEventListener("click", () => {
    svgCursor.classList.add("click-bold");
    tlCursorToBig.play();
    setTimeout(() => {
      svgCursor.classList.remove("click-bold");
      tlCursorToBig.reverse();
    }, 300);
  });

  //hover 效果
  CLASS_CURSORs_POINTER.forEach((e) => {
    e.addEventListener("mouseover", () => {
      timeLineChangeHoverCursor.play();
    });

    e.addEventListener("mouseleave", () => {
      timeLineChangeHoverCursor.reverse();
    });
  });

  TAG_As.forEach((e) => {
    e.addEventListener("mouseover", () => {
      timeLineChangeHoverCursor.play();
    });

    e.addEventListener("mouseleave", () => {
      timeLineChangeHoverCursor.reverse();
    });
  });

  TAG_SELECTs.forEach((e) => {
    e.addEventListener("mouseover", () => {
      timeLineChangeHoverCursor.play();
    });

    e.addEventListener("mouseleave", () => {
      timeLineChangeHoverCursor.reverse();
    });
  });

  TAG_BUTTONs.forEach((e) => {
    e.addEventListener("mouseover", () => {
      timeLineChangeHoverCursor.play();
    });

    e.addEventListener("mouseleave", () => {
      timeLineChangeHoverCursor.reverse();
    });
  });

  TAG_INPUTs_BUTTON.forEach((e) => {
    e.addEventListener("mouseover", () => {
      timeLineChangeHoverCursor.play();
    });

    e.addEventListener("mouseleave", () => {
      timeLineChangeHoverCursor.reverse();
    });
  });

  TAG_LABELs.forEach((e) => {
    e.addEventListener("mouseover", () => {
      timeLineChangeHoverCursor.play();
    });

    e.addEventListener("mouseleave", () => {
      timeLineChangeHoverCursor.reverse();
    });
  });

  TAG_INPUTs_TEXT.forEach((e) => {
    e.addEventListener("mouseover", () => {
      timeLineChangeTextCursor.play();
    });

    e.addEventListener("mouseleave", () => {
      timeLineChangeTextCursor.reverse();
    });
  });
}

//當視窗 調整大小時 
//.onclick or onmousemove 可以被覆蓋 
//使用addevent 需要給予 有名稱的 function 才可被移除 匿名無法移除
window.addEventListener("resize", () => {
  if (window.innerWidth < 576) {
    document.onmousemove = () => {
      cursor.style.display = "none";
    };
  } else {
    document.onmousemove = (e) => {
      cursor.style.display = "block";
      cursor.style.left = e.pageX + "px";
      cursor.style.top = e.pageY + "px";
      cursor.setAttribute("data-fromTop", cursor.offsetTop - scrollY);
    };
  }
});
