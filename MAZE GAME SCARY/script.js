"use strict";
let ses = document.querySelector("#sesid");
let kutu = document.querySelector(".boxdiv");
let foto = document.querySelector("#huzurfoto");
let box7 = document.querySelector("#box7");
let oyunalanı= document.querySelector(".gamecenter");
let başlat = document.querySelector(".Ekle");

       

kutu.addEventListener("mouseleave",mouseÇıktı);
function mouseÇıktı(){
    if(box7.value==1){
    window.location.href = "start.html";
    console.log("Çıktı");
    }
    else{
        korkuÇalış();
    }
    
    
}

    document.querySelector("#box7").addEventListener("click",korkuÇalış);
    function korkuÇalış(){
    box7.value=2;
    ses.play();
    console.log("alla");
    document.querySelector("#huzurfotoid").classList.add("göster");
    document.querySelector("#huzurfotoid").style.transition = "all 1s";
    document.querySelector(".gamecenter").classList.add("hide");
};




