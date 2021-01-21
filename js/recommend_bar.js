const recommendContainer = document.querySelector("div.recommend_left");
const innerOption = document.querySelector("div.recommend_left>ul");
const optionItems = [...document.querySelectorAll("div.recommend_left>ul>li")];

let pressed = false;
let startx;
let x;

recommendContainer.addEventListener('mousedown',e=>{
    pressed = true;
    startx = e.offsetX - innerOption.offsetLeft;
    console.log(startx)
})

window.addEventListener('mouseup',(e)=>{
    pressed = false;
    // e.target.parentNode.querySelector("ul").style.pointerEvents = "unset";
})

recommendContainer.addEventListener('mousemove',(e)=>{
    if(!pressed) {
        return;
    }

    e.preventDefault();
    x=e.offsetX

    innerOption.style.left = `${x-startx}px`

})


