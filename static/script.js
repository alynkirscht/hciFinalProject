
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



function hideElement(context) {
  var hiddenElement = context.parentElement;
  hiddenElement.remove()
  
}

function addSong(){
  searchedSong = document.getElementById("query").value;
  if (searchedSong == "Dura"){
    var target = document.getElementById("grid-container")
    var figure = document.createElement("figure");
    target.appendChild(figure);

    var side_div = document.createElement("div");
    side_div.classList.add("side-by-side");
    figure.appendChild(side_div);

    var image =document.createElement("img");
    image.alt = "Dura by Daddy Yankee";
    image.src = ".\\static\\dura.jpg";
    side_div.appendChild(image);

    var image_play = document.createElement("img");
    image_play.classList.add("play");
    image_play.alt = "play this song";
    image_play.src = "..\\static\\play-solid.svg";
    //image_play.onclick = changeplay(this);
    side_div.appendChild(image_play);

    var image_heart = document.createElement("img");
    image_heart.classList.add("heart");
    image_heart.alt = "like this song";
    image_heart.src = ".\\static\\heart-regular.svg";
    //image_heart.onclick = chngimg(this);
    side_div.appendChild(image_heart);

    var image_x = document.createElement("img");
    image_x.classList.add("x");
    image_x.alt = "get rid of this song";
    image_x.src = "..\\static\\x-solid.svg";
    //image_x.onclick = hideElement(this);
    side_div.appendChild(image_x);

    var white_div = document.createElement("div");
    white_div.classList.add("white");
    side_div.appendChild(white_div);

    var figcaption = document.createElement("figcaption");
    figcaption.innerHTML = "Dura";
    white_div.appendChild(figcaption);

    var p = document.createElement("p");
    p.innerHTML = "Daddy Yankee";
    white_div.appendChild(p);



    //target.innerHTML += '<figure>\n<div class="side-by-side">\n<img alt="Dura by Daddy Yankee" src="..\static\dura.jpg">\n<img class="play" alt="play this song" src="..\static\play-solid.svg" onclick="changeplay(this)">\n<img class="heart" alt="like this song" src="..\static\heart-regular.svg" onclick="chngimg(this)">\n<img class="x" alt="get rid of this song" src="..\static\\x-solid.svg" onclick="hideElement(this)">\n<div class="white">\n<figcaption>Dura</figcaption>\n<p>Daddy Yankee</p>\n</div>\n</div>";'
  }
  /** 
  else if (searchedSong == "TUDO BOM"){

  }
  else if (searchedSong == "Neverita"){

  }
  else if (searchedSong == "El Prestamo"){

  }
  else if (searchedSong == "Danza Kuduro"){

  
  }
  */
}

function share(){
  var firstNode = document.getElementById("first-node");
  var divShare= document.createElement("div")
  divShare.classList.add("sm_list");
  firstNode.append(divShare);

  var facebook_img = document.createElement("img");
  facebook_img.classList.add("social-media");
  facebook_img.alt = "facebook";
  facebook_img.src = "..\\static\\facebook.svg";
  divShare.appendChild(facebook_img);

  var email_img = document.createElement("img");
  email_img.classList.add("social-media");
  email_img.alt = "email";
  email_img.src = "..\\static\\envelope-solid.svg";
  divShare.appendChild(email_img);

  var twitter_img = document.createElement("img");
  twitter_img.classList.add("social-media");
  twitter_img.alt = "twitter";
  twitter_img.src = "..\\static\\twitter.svg";
  divShare.appendChild(twitter_img);

  var more_img = document.createElement("img");
  more_img.classList.add("social-media");
  more_img.alt = "more sharing options";
  more_img.src = "..\\static\\circle-plus-solid.svg";
  divShare.appendChild(more_img);
} 





