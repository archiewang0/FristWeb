


//抓取sort 
const sortBtn = document.querySelector('a.sort_top')
const sortitems = [...document.querySelectorAll('div.sort_box > ul>li')]
let isShow = false

const showSortList = function(e){

    e.preventDefault();
    e.stopPropagation()
    // const lis = document.querySelectorAll('div.sort_box>ul>li')
    const sortlist = document.querySelector('div.sort_box > ul')
    if ( !isShow ){
        sortlist.style.display = 'block'
    } else{
        sortlist.style.display = "none";
    }
    isShow = !isShow

    const clickOther = function(){
        isShow = !isShow
        document.body.removeEventListener('click', clickOther)
        const tl = setTimeout(()=>{
            sortlist.style.display = 'none'
            clearTimeout(tl)
        },150)
    }
    
    document.body.addEventListener('click', clickOther)
}

const changeSort = function(evt){
    const sortName = document.querySelector('a.sort_top > p')
    sortName.innerHTML = evt.target.innerHTML
    // console.log(evt.target.innerHTML)

    const tl = setTimeout(()=>{
        evt.target.style.pointerEvents = 'none'
        sortitems.forEach((item) => {
            if (item !== this) {
                item.style.pointerEvents = 'auto'
                item.style.color = 'black'
            }
        })
        clearTimeout(tl)
    },150)

    evt.target.style.color = '#d6d6d6'
}



sortBtn.addEventListener('click',showSortList)
sortitems.forEach((item)=>{
    item.addEventListener('click',changeSort)
})

