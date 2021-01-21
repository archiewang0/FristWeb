/////////////////
//跑banner輪播
/////////////////

let counter = 1;
setInterval(function () {
  document.getElementById("radio" + counter).checked = true;
  console.log()
  counter++;
  if (counter > 3) {
    counter = 1;
  }
}, 3000);

/////////////////
//跑banner輪播
/////////////////

