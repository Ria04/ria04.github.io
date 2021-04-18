function displayVideo(){
    var element=document.getElementById("popupVideo");
    element.style.display="flex";
}
function hideVideo(){
    var element=document.getElementById("popupVideo");
    element.style.display="none";
}

function openInput(){
    var element=document.getElementById("button-component");
    var close=document.getElementById("close-button");
    var childs=element.getElementsByClassName("button-item");
    for(var i=0;i<childs.length;i++){
        childs[i].classList.add("shrink-button-component");
    }
    close.style.display="block";
}



function closeInput(){
    var element=document.getElementById("button-component");
    var childs=element.getElementsByClassName("button-item");
    console.log("abcde")
    for(var i=0;i<childs.length;i++){
        childs[i].classList.remove("shrink-button-component");
    }
    document.getElementById("close-button").style.display="none";

}
