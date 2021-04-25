function displayVideo() {
  var element = document.getElementById("popupVideo");
  element.style.display = "flex";
}
var counter = 0; // Global Variable

function hideVideo() {
  var element = document.getElementById("popupVideo");
  element.style.display = "none";
}
function displayPopupForm() {
  var element = document.getElementById("popupForm");
  element.style.display = "flex";
}
function hidePopupForm() {
  var element = document.getElementById("popupForm");
  element.style.display = "none";
}
function displayCertificate() {
  var element = document.getElementById("popupCertificate");
  element.style.display = "flex";
}
function hideCertificate() {
  var element = document.getElementById("popupCertificate");
  element.style.display = "none";
}

function openInput(id) {
  var element = document.getElementById("button-component" + id);
  var close = document.getElementById("close-button" + id);
  var childs = element.getElementsByClassName("button-item");
  for (var i = 0; i < childs.length; i++) {
    childs[i].classList.add("shrink-button-component");
  }
  close.style.display = "block";
}

function closeInput(id) {
  var element = document.getElementById("button-component" + id);
  var childs = element.getElementsByClassName("button-item");
  console.log("abcde");
  for (var i = 0; i < childs.length; i++) {
    childs[i].classList.remove("shrink-button-component");
  }
  document.getElementById("close-button" + id).style.display = "none";
}

function showDescription(id) {
  var element = document.getElementById(id);
  var icon = document.getElementById("icon" + id);
  if (element.style.display != "block") {
    element.style.display = "block";
    icon.classList.replace("fa-arrow-down", "fa-arrow-up");
  } else {
    element.style.display = "none";
    icon.classList.replace("fa-arrow-up", "fa-arrow-down");
  }
}

function currentSlide(n) {
  var head = document.getElementById("technology-parent");
  var slides = head.getElementsByClassName("technology-wrap");

  for (var s = 0; s < slides.length; s++) {
    slides[s].style.display = "none";
  }
  slides[n].style.display = "flex";
}

currentSlide(0);

var carouselhead = document.getElementById("carousel");
var dots = carouselhead.getElementsByTagName("span");
for (var j = 0; j < dots.length; j++) {
  dots[j].addEventListener("click", function () {
    var currentdot = document.getElementsByClassName("active");
    currentdot[0].className = currentdot[0].className.replace("active", " ");
    this.className += "active";
  });
}

showDescription('1');
showDescription('11');
showDescription('111');

function shownav(){
  var nav=document.getElementById('nav');
  if(nav.style.display!="flex"){
    nav.style.display="flex";
  }
  else{
    nav.style.display="none";
  }
}

function showFaq(id) {
  var element = document.getElementById(id);
  var icon = document.getElementById("icon" + id);
  if (element.style.display != "flex") {
    element.style.display = "flex";
    icon.classList.replace("fa-angle-down", "fa-angle-up");
  } else {
    element.style.display = "none";
    icon.classList.replace("fa-angle-up", "fa-angle-down");
  }
}
showFaq('faq1');


$('.counter').each(function() {
  var $this = $(this),
      countTo = $this.attr('data-count');
  
  $({ countNum: $this.text()}).animate({
    countNum: countTo
  },

  {

    duration: 2000,
    easing:'linear',
    step: function() {
      $this.text(Math.floor(this.countNum));
    },
    complete: function() {
      $this.text(this.countNum);
    }

  });
});

/*const popUpForm = document.querySelector('#popupForm');
function onScroll(event) {
  const current = document.documentElement.scrollTop;
  const maxHeight = document.body.scrollHeight;

  if (current > maxHeight * 0.8 && current < maxHeight * 0.9) {
    popUpForm.style.display="flex";
  }

}

window.addEventListener('scroll', event => onScroll(event));*/


//plans
function currentSlideCurriculum(n) {
  var head = document.getElementById("allplans");
  var slides = head.getElementsByClassName("banner");
  for (var s = 0; s < slides.length; s++) {
    slides[s].style.display = "none";
  }
  
  
  slides[n].style.display = "block";


}

currentSlideCurriculum(00);

function showPlan(id){
  for(var i=0;i<3;i++){
    document.getElementById('plan0'+i).style.display="none";
    document.getElementById('banner0'+i).style.transform="scale(1)";

    


  }
  document.getElementById('plan'+id).style.display="flex";
  document.getElementById('banner'+id).style.transform="scale(1.1)";
  


  document.getElementById('curriculum-section').style.display="block";


}

var carouselhead = document.getElementById("curriculum-carousel");
var dots = carouselhead.getElementsByTagName("span");
for (var j = 0; j < dots.length; j++) {
  dots[j].addEventListener("click", function () {
    var currentdot = document.getElementsByClassName("activcurriculum");
    currentdot[0].className = currentdot[0].className.replace("activcurriculum", " ");
    this.className += "activcurriculum";
  });
}


function hideListItems(){
  
  var parent=document.getElementById("alldesktopplans");
  var arr=parent.getElementsByClassName("list-items");
  var element=document.getElementById("hide-features");
  if(arr[0].style.display!="none"){
  for(var i=0;i<arr.length;i++){
    arr[i].style.display="none";
  }
  element.innerHTML="Show All Features <i class='fas fa-angle-down'></i>"
}
else{
  for(var i=0;i<arr.length;i++){
    arr[i].style.display="block";
  }
  element.innerHTML="Hide All Features <i class='fas fa-angle-up'></i>"

}
  
}

var nav2 = document.getElementById("nav-2");
var lis = nav2.getElementsByTagName("li");
for (var j = 0; j < lis.length; j++) {
  lis[j].addEventListener("click", function () {
    var currentdot = document.getElementsByClassName("activnavlist");
    currentdot[0].className = currentdot[0].className.replace("activnavlist", " ");
    this.className += "activnavlist";
  });
}

const scrollnav = document.querySelector('#scrollup-nav');
const popupForm = document.querySelector('#popupForm');

function onScroll(event) {
  const current = document.documentElement.scrollTop;
  const maxHeight = document.body.scrollHeight;
  var x = window.matchMedia("(min-width: 1024px)");

  if (x.matches) {

  if (current > maxHeight * 0.2) {
    scrollnav.style.display="block";
  }
  if(current < maxHeight * 0.2){
    scrollnav.style.display="none";

  }
  }
  else{
    scrollnav.style.display="none";

  }
  if(counter == 0){
    if(current>maxHeight*0.7){
      popupForm.style.display="flex";
       counter++;
    }
  }
  
}

window.addEventListener('scroll', event => onScroll(event));

function submit(){  
  var name = document.getElementById("name").value;
  var youremail = document.getElementById("youremail").value;
  var number = document.getElementById("number").value;

  localStorage.setItem("name",name);
  localStorage.setItem("email",youremail);
  localStorage.setItem("number",number);


}

