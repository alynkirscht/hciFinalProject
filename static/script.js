
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



function chngimg() {
    var img = document.getElementById('heart').src;
    if (img){
        console.log(String(img))
    }

    if (String(img).includes("/static/heart-regular.svg")) {
        document.getElementById('heart').src  = "../static/heart-solid.svg";
    }
     else {
       document.getElementById('heart').src = '../static/heart-regular.svg';
   }

}