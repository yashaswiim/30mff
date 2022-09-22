// display current year for copyright
var year = document.getElementById("year");
if (year){
    year.innerText = (new Date()).getFullYear();
}

//object to keep track of the current index of the photo carousels of all the six counters 
var index = {
    one: 0,
    two: 0,
    three: 0,
    four: 0,
    five: 0,
    six: 0
}

var images_all = document.querySelectorAll(".counter img");
var images_one = document.querySelectorAll(".counter-imgs img:first-of-type");
var prev_all = document.getElementsByClassName("prev");
var next_all = document.getElementsByClassName("next");

//function called by the next button of the photo carousels
const nextImage = (counter)=>{
    showImage(counter, index[counter]+=1);
}

//function called by the previous button of the photo carousels
const prevImage = (counter)=>{
    showImage(counter, index[counter]-=1);
}

//displays the correct image based on the counter and the image index
const showImage = (counter, ind)=>{
    //getting the img elements in the corresponding counter
    let query = "."+counter+" img";
    let imgs = document.querySelectorAll(query);
    if (ind < 0){
        ind = imgs.length -1;
        index[counter]=imgs.length -1;
    }
    if (ind >= imgs.length){
        ind = 0;
        index[counter]=0;
    }
    if (ind<imgs.length && ind>=0){
        for (let j = 0; j<imgs.length;j++){
            imgs[j].style.display="none";
        }
        imgs[ind].style.display="";
    }
}

//hide all the images initially
for (let i = 0; i < images_all.length; i++) {
    images_all[i].style.display = "none";  
}

//display only the first images for each counter 
//keys of the index object represent the counter number
for (let i=0; i < Object.keys(index).length;i++){
    showImage(Object.keys(index)[i], 0);
}

//event listener for the previous buttons
for(let i=0;i<prev_all.length;i++){
    prev_all[i].addEventListener("click", (e)=>{
        //getting the appropriate counter whose image is to be changed
        let counter = e.path[1].classList[1];
        prevImage(counter);
    })
}

//event listener for the next buttons
for(let i=0;i<next_all.length;i++){
    next_all[i].addEventListener("click", (e)=>{
        //getting the appropriate counter whose image is to be changed
        let counter = e.path[1].classList[1];
        nextImage(counter);
    })
}

//add animation to the counter names when the mouse enters into the corresponding section
var counters = document.querySelectorAll(".counter")
for(let i=0;i<counters.length;i++){
    counters[i].addEventListener("mouseenter", (e)=>{
        let name = e.path[0].querySelector(".c-name")
        name.style.transform="skew(-25deg)"
        name.style.transition="all 0.5s"
    })
    counters[i].addEventListener("mouseleave", (e)=>{
        let name = e.path[0].querySelector(".c-name")
        name.style.transform=""
    })
}