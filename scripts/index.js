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




function submitEmail(id){
  var email=document.getElementById("input"+id).value;
  let TimeStamp = new Date();

  var len=email.split("@");

  let emailData = new FormData();
  emailData.append('Email', email);
  emailData.append('TimeStamp', TimeStamp);
  if(email){
    if(len.length==2){

  document.getElementById("thankyou"+id).innerHTML="<h3>Thankyou</h3><p>Your information has been received. A member of our team will be in touch with you shortly!</p>"
  
  fetch('https://script.google.com/macros/s/AKfycbxqPIaLsdwSWzyVIipcjQKmzIzrpH6zs0z07E44st0q3lBKvrS0TP-Iy9pQ9X3JCVRB/exec', {
          method: 'POST',
          mode: 'cors',
          body: emailData
        })
          // .then((response) => response.json())
          .then((response) => {
            console.log("data appended successfully");
          })
          .catch((error) => {
            console.error('Error:', error);
          });
        }
        else{
          document.getElementById("input"+id).style.boxShadow="0px 0px 10px -2px red";
        }

  }
  
    else{
      document.getElementById("input"+id).style.boxShadow="0px 0px 10px -2px red";

    }
  

       
}



function submit(course){ 

  var name = document.getElementById("name").value;
  var youremail = document.getElementById("youremail").value;
  var number = document.getElementById("number").value;
  let TimeStamp = new Date();


if(name&&youremail&&number){

    var emailarray=youremail.split("@");
    if(emailarray.length!=2){
      document.getElementById("error-message").style.display="block";
      document.getElementById("error-message").innerText="Enter valid email";
    }else{
      var n=number.toString();
      if(n.length<10||n.length>10){
        document.getElementById("error-message").style.display="block";
        document.getElementById("error-message").innerText="Enter valid number";
      }
      else{

        localStorage.setItem("name",name);
        localStorage.setItem("email",youremail);
        localStorage.setItem("number",number);


        let formData = new FormData();
        formData.append('Name', name);
        formData.append('Email', youremail);
        formData.append('PhoneNumber', number);
        formData.append('TimeStamp', TimeStamp);


        //append data to download curricilum sheet

        fetch('https://script.google.com/macros/s/AKfycbzVa8WqhPPMZqHAIm8OdmhwtIX6BrQKr_42LPqbUwRfSc06TRs3idw61bkGE91X1bQEpA/exec', {
          method: 'POST',
          mode: 'cors',
          body: formData
        })
          // .then((response) => response.json())
          .then((response) => {
            console.log("data appended successfully");
          })
          .catch((error) => {
            console.error('Error:', error);
          });



        var link = document.createElement('a');
        link.target="blank";
        if(course=='frontend'){
          link.href = 'https://konfinity-assets.s3.ap-south-1.amazonaws.com/images/Front-End-Development.pdf';
        }
        else{
          link.href = 'https://konfinity-assets.s3.ap-south-1.amazonaws.com/images/Web-Development.pdf';
        }
      link.dispatchEvent(new MouseEvent('click'));
      document.getElementById("error-message").style.display="none";
      hidePopupForm();
        }
  }
}
else{
  document.getElementById("error-message").style.display="block";
}

}

function openInput(id) {
  var element = document.getElementById("button-component" + id);
  var close = document.getElementById("close-button" + id);
  var childs = element.getElementsByClassName("button-item");
  for (var i = 0; i < childs.length; i++) {
    childs[i].classList.add("shrink-button-component");
  }
  close.style.display = "block";

  document.getElementById("submit-email"+id).setAttribute("onclick","submitEmail("+ id+")");
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
  if(n=='00'){
    document.getElementById('activeplanmobile').innerText="Begginer";
    
      }
      else if(n=='01'){
        document.getElementById('activeplanmobile').innerText="Advance";
    
      }
      else if(n=='02'){
        document.getElementById('activeplanmobile').innerText="Career Track";
    
      }
  for (var s = 0; s < slides.length; s++) {
    slides[s].style.display = "none";
  }
  
  
  slides[n].style.display = "block";


}

currentSlideCurriculum('01');

function showPlan(id){

  if(id=='00'){
document.getElementById('activeplandesktop').innerText="Begginer";

  }
  else if(id=='01'){
    document.getElementById('activeplandesktop').innerText="Advance";

  }
  else if(id=='02'){
    document.getElementById('activeplandesktop').innerText="Career Track";

  }

  for(var i=0;i<3;i++){
    document.getElementById('plan0'+i).style.display="none";
    document.getElementById('banner0'+i).classList.remove("activeFee");
  }
  document.getElementById('plan'+id).style.display="flex";
  document.getElementById('banner'+id).classList.add("activeFee");
  




}
showPlan('01');

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
const scrollupComponent=document.querySelector('#scrollupComponent');
const chatbox=document.querySelector('#chat-box');

function onScroll(event) {
  const current = document.documentElement.scrollTop;
  const maxHeight = document.body.scrollHeight;
  var x = window.matchMedia("(min-width: 1024px)");

  if (x.matches) {

  if (current > maxHeight * 0.2) {
    scrollnav.style.display="block";
    scrollupComponent.style.display="block";
  }
  if(current < maxHeight * 0.2){
    scrollnav.style.display="none";
    scrollupComponent.style.display="none";
    chatbox.style.display="flex";


  }
  }
  else{
    scrollnav.style.display="none";
    scrollupComponent.style.display="none";


  }
  if(counter == 0){
    if(current>maxHeight*0.7){
      popupForm.style.display="flex";
       counter++;
    }
  }
  
}

window.addEventListener('scroll', event => onScroll(event));


function displayChatbot(){
  var head=document.getElementById("chat-box");
  var robot=document.getElementById("robot");
  var divs=head.getElementsByClassName("inner-div");
  if(divs[0].style.display=="flex"){
    for(var i=0;i<divs.length;i++){
      divs[i].style.display="none";
    }
    robot.innerHTML='<img src="../images/robo icon.png">'
  }
  else{
    for(var i=0;i<divs.length;i++){
      divs[i].style.display="flex"
    }
    robot.innerHTML='<img id="cross" src="../images/cross.png">'

  }
  
}


