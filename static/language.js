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