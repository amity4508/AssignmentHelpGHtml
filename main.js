function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

        // top button
$("#top-button").click(function () {
  $("html, body").animate({scrollTop: 0}, 500);
});
  // end topbar

  // no count InputDeviceInfo 
  