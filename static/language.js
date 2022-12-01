function addLanguage() {
    var down = document.getElementById("frmLogin");  //form element
  
    //Clone select and submit button
    const language1 = document.getElementById("lstLanguage"); 
    const language2 = language1.cloneNode(true);
    const btnSubmit = document.getElementById("btnSubmit");
    const btnClone = btnSubmit.cloneNode(true);
  
    //Change label
    var languageLabel = document.getElementById("languageLabel");
    languageLabel.innerHTML = "Choose two languages"
    
    //Remove submit button
    document.getElementById("btnSubmit").remove();
  
    //Append second select field and submit button
    down.appendChild(language2);
    down.appendChild(btnClone);
  
    //Disable button and change cursor to not allowed after one use
    document.getElementById("btnAddLanguage").disabled = true;
    document.getElementById("btnAddLanguage").style.cursor = "not-allowed";
}

var i = 0;
function loadingBar() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("bar");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
      if (width == 100){
        window.location.replace("suggested_playlists");
      }
    }
  }
}