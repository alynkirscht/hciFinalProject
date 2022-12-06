
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

