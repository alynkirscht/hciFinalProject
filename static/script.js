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
  var target = document.getElementById("grid-container")
  var figure = document.createElement("p");
  
    var img = context.src;
    if (img){
        console.log(String(img))
    }
    figure.innerHTML = img;
  target.appendChild(figure);

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

function hideElement(pNode) {
  pNode.remove();
  
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
    side_div.appendChild(image_play);


    var image_heart = document.createElement("img");
    image_heart.classList.add("heart");
    image_heart.alt = "like this song";
    image_heart.src = ".\\static\\heart-regular.svg";
    side_div.appendChild(image_heart);

    addPlayHeart();
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

function share(context){
  var img = context.src;
    if (img){
        console.log(String(img))
    }

    if (String(img).includes("/static/share-solid.svg")) {
        console.log("js thought this was share icon so its making it close")
        context.src  = "../static/x-solid.svg";
        console.log("src has changed")
        document.getElementById("share-p").innerHTML = "Close"

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
     else {
        console.log("js thought this was close so its making it share")
        console.log(img);
        context.src = '../static/share-solid.svg';
        console.log("src has changed");
        document.getElementById("share-p").innerHTML = "Share";

        const sm_list = document.getElementsByClassName("sm_list");
        while(sm_list.length > 0){
          sm_list[0].parentNode.removeChild(sm_list[0]);

        const social_media = document.getElementsByClassName("social-media");
        while(social_media.length > 0){
          social_media[0].parentNode.removeChild(social_media[0]);
        }
    }
   }
} 

function edit(context){
  var img = context.src;
    if (img){
        console.log(String(img))
    }

    if (String(img).includes("/static/pen-to-square-solid.svg")) {
        console.log("js thought this was edit icon so its making it close")
        context.src  = "../static/x-solid.svg";
        console.log("src has changed")
        document.getElementById("share-p").innerHTML = "Close"
        var remove_img = document.createElement("img");
        remove_img.classList.add("x");
        remove_img.id = "x";
        remove_img.alt = "get rid of this song";
        remove_img.src = "..\\static\\x-solid.svg";
   
        
        var divSide = document.querySelectorAll("div.side-by-side");
        for (var i=0; i < divSide.length; ++i) {
          divSide[i].appendChild(remove_img.cloneNode());
        }

        addOnClick();
        
    }
     else {
        console.log("js thought this was close so its making it edit")
        console.log(img);
        context.src = '../static/pen-to-square-solid.svg';
        console.log("src has changed");
        document.getElementById("edit-p").innerHTML = "Edit";


        const x_class = document.getElementsByClassName("x");
        while(x_class.length > 0){
          x_class[0].parentNode.removeChild(x_class[0]);
        }
   }
}

function addOnClick(){
    const imgs_x = document.querySelectorAll('img.x');


    imgs_x.forEach((img) => {
      img.addEventListener('click', (e) => {
        img.parentElement.remove();
    })
    })
}

function addPlayHeart(){
  const imgs_play = document.querySelectorAll('img.play');
  imgs_play.forEach((img) => {
    
    img.addEventListener('click', (e) => {  
      var context = img.src;
      if (context){
          console.log(String(context))
      }

      if (String(context).includes("/static/play-solid.svg")) {
          console.log("js thought this was play icon so its making it pause")
          img.src  = "../static/pause-solid.svg";
          console.log("src has changed")
      }
      else {
          console.log("js thought this was pause so its making it play")
          console.log(context)
          img.src = '../static/play-solid.svg';
          console.log("src has changed")
      }
    })
  })
  
  const imgs_like = document.querySelectorAll('img.heart');
  imgs_like.forEach((img) => {
    img.addEventListener('click', (e) => {
      var context = img.src;
      if (context){
          console.log(String(context))
      }

      if (String(context).includes("/static/heart-regular.svg")) {
          console.log("js thought this was unfilled so its making it solid")
          img.src  = "../static/heart-solid.svg";
          console.log("src has changed")
      }
      else {
          console.log("js thought this was solid so its making it regular")
          console.log(context)
          img.src = '../static/heart-regular.svg';
          console.log("src has changed")
    }
    });
  })
}





