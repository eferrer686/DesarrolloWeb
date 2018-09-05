changeNavBar();
$(window).resize(function() {
  changeNavBar();
});
function changeNavBar(){
  if ($(window).width() < 960) {
     document.getElementById("topnav").style.display = "none";
     document.getElementById("sidenav").style.display = "block";
     document.getElementById("openbtn").style.display = "inherit";
  }
   else {
     document.getElementById("topnav").style.display = "block";
     document.getElementById("sidenav").style.display = "none";
     document.getElementById("openbtn").style.display = "none";
   }
}
/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
    document.getElementById("sidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
    document.getElementById("sidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
}
