var hinh = ['img/slide2.jpg','img/slide2.jpg','img/slide3.jpg','img/slide4.jpg'];
// document.getElementById("slide").src =hinh[0];
var index=0;
function next(){
    index++;
    if(index == hinh.length) {
        index=0;
    }
    document.getElementById('slide').src =hinh[index];
}

function prev(){
    index--;
    if(index==0){
        index=hinh.length-1;
    }
    document.getElementById("slide").src=hinh[index];
}
setInterval(next,5000);
next(hinh[0]);














































// let slideImages = document.querySelectorAll('img')

// let next = document.querySelector('.next');
// let prev = document.querySelector('.prev');

// let dots = document.querySelectorAll('.dot');

// var counter = 0;


// next.addEventListener('click',slideNext);
// function slideNext(){
//     slideImages[counter].style.animation = 'next1 0.5s ease-in forwards';
//     if(counter >= slideImages.length-1){
//         counter = 0;
//     }
//     else{
//         counter++;
//     }
//     slideImages[counter].style.animation = 'next2 0.5s ease-in forwards';

// }