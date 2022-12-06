
// function chngimg() {
//     var img = document.getElementById('heart').src;
//     if (img){
//         console.log(String(img))
//     }

//     if (String(img).includes("/static/heart-regular.svg")) {
//         document.getElementById('heart').src  = "../static/heart-solid.svg";
//     }
//      else {
//        document.getElementById('heart').src = '../static/heart-regular.svg';
//    }

// }

function chngimg(context) {
    var img = context.src;
    if (img){
        console.log(String(img))
    }

    if (String(img).includes("/static/heart-regular.svg")) {
        console.log("js thought this was unfilled so its making it solid")
        context.src  = "../static/heart-solid.svg";
        console.log("src has changed")
    }
     else {
        console.log("js thought this was solid so its making it regular")
        console.log(img)
        context.src = '../static/heart-regular.svg';
        console.log("src has changed")
   }

}


function changeplay(context) {
    var img = context.src;
    if (img){
        console.log(String(img))
    }

    if (String(img).includes("/static/play-solid.svg")) {
        console.log("js thought this was play icon so its making it pause")
        context.src  = "../static/pause-solid.svg";
        console.log("src has changed")
    }
     else {
        console.log("js thought this was pause so its making it play")
        console.log(img)
        context.src = '../static/play-solid.svg';
        console.log("src has changed")
   }

}




const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger= document.querySelector(".hamburger");
const closeIcon= document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach( 
  function(menuItem) { 
    menuItem.addEventListener("click", toggleMenu);
  }
)
