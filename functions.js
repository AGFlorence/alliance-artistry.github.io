function OpenTC(){
  console.log("Expanding information")
  let modal = document.getElementById('TC');
  modal.style.display = "block";
}
function CloseTC(){
  console.log("hiding information")
  let modal = document.getElementById('TC');
  modal.style.display = "none";
}
function OpenLang() {
  console.log("Expanding information")
  let modal = document.getElementById('Lang');
  modal.style.display = "block";
}
function CloseLang(){
  console.log("Expanding information")
  let modal = document.getElementById('Lang');
  modal.style.display = "none";
}
function OpenCRD(){
  console.log("Expanding information")
  let modal = document.getElementById('CRD');
  modal.style.display = "block";
}
function CloseCRD(){
  console.log("Expanding information")
  let modal = document.getElementById('CRD');
  modal.style.display = "none";
}

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("ch1pages");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex-1].style.display = "block";
}
