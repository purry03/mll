function about(){  
    scrollToTargetAdjusted("aboutus",150);
}

function services(){  
    scrollToTargetAdjusted("services",125);
}

function joinus(){  
    scrollToTargetAdjusted("joinus",125);
}

function scrollToTargetAdjusted(id,offset){
    var element = document.getElementById(id);
    var headerOffset = offset;
    const bodyRect = document.body.getBoundingClientRect().top;
const elementRect = element.getBoundingClientRect().top;
const elementPosition = elementRect - bodyRect;
const offsetPosition = elementPosition - offset;

window.scrollTo({
  top: offsetPosition,
  behavior: 'smooth'
});
}