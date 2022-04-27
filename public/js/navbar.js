window.onscroll = function() {scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navContainer").style.padding = "10px 25px";
    document.getElementById("navContainer").style.fontSize = "1.1rem";
    document.getElementById("navContainer").style.backgroundColor = "#000";
  } else {
    document.getElementById("navContainer").style.padding = "25px 25px";
    document.getElementById("navContainer").style.fontSize = "1.65rem";
    document.getElementById("navContainer").style.backgroundColor = "rgba(0, 0, 0 , 0.5)";


  }
}

