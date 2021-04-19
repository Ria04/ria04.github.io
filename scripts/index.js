function displayVideo(){
    var element=document.getElementById("popupVideo");
    element.style.display="flex";
}
function hideVideo(){
    var element=document.getElementById("popupVideo");
    element.style.display="none";
}

function openInput(id){
    var element=document.getElementById("button-component"+id);
    var close=document.getElementById("close-button"+id);
    var childs=element.getElementsByClassName("button-item");
    for(var i=0;i<childs.length;i++){
        childs[i].classList.add("shrink-button-component");
    }
    close.style.display="block";
}



function closeInput(id){
    var element=document.getElementById("button-component"+id);
    var childs=element.getElementsByClassName("button-item");
    console.log("abcde")
    for(var i=0;i<childs.length;i++){
        childs[i].classList.remove("shrink-button-component");
    }
    document.getElementById("close-button"+id).style.display="none";

}

function showDescription(id){
    var element=document.getElementById(id);
    var icon=document.getElementById("icon"+id);
    if(element.style.display!="block"){
        element.style.display="block";
        icon.classList.replace("fa-arrow-down","fa-arrow-up");
    }
    else{
        element.style.display="none";
        icon.classList.replace("fa-arrow-up","fa-arrow-down");

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


function showInnerItem(id){
    var element=document.getElementById(id);
    var icon=document.getElementById("icon"+id);
    if(element.style.display!="flex"){
        element.style.display="flex";
        icon.classList.replace("fa-angle-down","fa-angle-up");
    }
    else{
        element.style.display="none";
        icon.classList.replace("fa-angle-up","fa-angle-down");

    }
    
}

function showFaq(id){
    var element=document.getElementById(id);
    var icon=document.getElementById("icon"+id);
    if(element.style.display!="flex"){
        element.style.display="flex";
        icon.classList.replace("fa-angle-down","fa-angle-up");
    }
    else{
        element.style.display="none";
        icon.classList.replace("fa-angle-up","fa-angle-down");

    }
    
}
