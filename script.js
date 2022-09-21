var year = document.getElementById("year")
if (year){
    year.innerText = (new Date()).getFullYear();
}

var index = {
    one: 0,
    two: 0,
    three: 0,
    four: 0,
    five: 0,
    six: 0
}

var images_all = document.querySelectorAll(".counter img")
var images_one = document.querySelectorAll(".imgs img:first-of-type")
var prev_all = document.getElementsByClassName("prev")
var next_all = document.getElementsByClassName("next")

const nextImage = (p)=>{
    showImage(p, index[p]+=1)
}

const prevImage = (p)=>{
    showImage(p, index[p]-=1)
}

const showImage = (p, ind)=>{
    let query = "."+p+" img"
    let imgs = document.querySelectorAll(query)
    if (ind < 0){
        ind = imgs.length -1
        index[p]=imgs.length -1
    }
    if (ind >= imgs.length){
        ind = 0
        index[p]=0
    }
    if (ind<imgs.length && ind>=0){
        for (let j = 0; j<imgs.length;j++){
            imgs[j].style.display="none"
        }
        imgs[ind].style.display=""
    }
}

for (i = 0; i < images_all.length; i++) {
    images_all[i].style.display = "none";  
}

for (i=0; i < Object.keys(index).length;i++){
    showImage(Object.keys(index)[i], 0)
}

for(var i=0;i<prev_all.length;i++){
    prev_all[i].addEventListener("click", (e)=>{
        p = e.path[1].classList[1]
        prevImage(p)
    })
}
for(var i=0;i<next_all.length;i++){
    next_all[i].addEventListener("click", (e)=>{
        p = e.path[1].classList[1]
        nextImage(p)
    })
}

var counters = document.querySelectorAll(".counter")
for(var i=0;i<counters.length;i++){
    counters[i].addEventListener("mouseenter", (e)=>{
        let name = e.path[0].querySelector(".c-name")
        name.style.transform="translate(25%, 0)"
        name.style.transition="all 1s"
    })
    counters[i].addEventListener("mouseleave", (e)=>{
        let name = e.path[0].querySelector(".c-name")
        name.style.transform=""
    })
}