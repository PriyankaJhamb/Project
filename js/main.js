$(document).ready(function (e) {
  var CurrentYear = new Date().getFullYear();
  document.getElementById('date').innerText = CurrentYear;

  $(document).bind("contextmenu",function(e) {
    return false;
  });
});

function Fid(idv){if(document.getElementById(idv)===null){throw "Error:\n  Unable to find element with id '"+idv+"'"}else{return document.getElementById(idv);}}

// function myFunction(x) {
//   x.classList.toggle("change");
//   document.getElementsByClassName
// }



// Navbar-controller
Fid('menu-btn').onclick=function(){
  Fid('menu-btn').classList.toggle("change");
  if (Fid('nav-links').classList.contains("nav-open")){Fid('nav-links').classList.add("nav-close");Fid('nav-links').classList.remove("nav-open");}
  else{Fid('nav-links').classList.add("nav-open");Fid('nav-links').classList.remove("nav-close");}
};
// End of Navbar-controller




// Scroll to top button
const scrollToTopButton = document.getElementById('js-top');
const scrollFunc = () => {
    let y = window.scrollY;
    if (y > 700) { scrollToTopButton.className = "btn btn-dark show"; }
    else { scrollToTopButton.className = "btn btn-dark hide"; }
};
window.addEventListener("scroll", scrollFunc);
var pre = document.documentElement.scrollTop || document.body.scrollTop;
const scrollToTop = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
        if(pre<c){
            return;
        }
        else{
            pre = c;
            window.requestAnimationFrame(scrollToTop);
            window.scrollTo(0, c - c / 25);
        }
    }
};
scrollToTopButton.onclick = function (e) {
    e.preventDefault();
    pre = document.documentElement.scrollTop || document.body.scrollTop;
    scrollToTop();
}
// END Scroll to top button




// document.getElementById("").style.display