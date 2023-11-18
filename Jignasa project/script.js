var sidebar = document.querySelector("#side-bar");
var sdClosebtn = document.querySelector("#sd-close-btn");
var elem = document.querySelector(".elem");
var preloader2 = document.querySelector(".preloader");
var preloader = document.querySelector(".pre-loader");
var homepage = document.querySelector(".home");
var epasspg = document.querySelector(".epasspg");
var chatbotpg = document.querySelector(".chatbotpg");
var profilepg = document.querySelector(".propg");
var renewalpg = document.querySelector(".renewalpg");
var updatepg = document.querySelector(".updatepg");
var epass = document.querySelector("#epass");
var help = document.querySelector("#help");
var home = document.querySelector("#home");
var profile = document.querySelector("#profile");
var openbtn = document.querySelector(".back");
var feedback = document.querySelector("#feedback");
var cls = document.querySelector("#close-btn");
var feedbackResp = document.querySelector(".back");
var openfeed = document.querySelector("#feedback");

openfeed.addEventListener("click", function(){
    feedbackResp.style.display = "block";
})

// testimonial slider
var swiper = new Swiper(".mySwiper", {
    slidesPerView: "1",
    centeredSlides: true,
    spaceBetween: 30,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
  });



// open feedback

// cls.addEventListener("click", function(){
//     openbtn.style.display = "none";
// })

// feedback.addEventListener("click", function(){
//     openbtn.style.opacity = 1;
//     feedback.style.pointerEvents = all;
// })









//faq script
const accordionContent = document.querySelectorAll(".contentbx");
accordionContent.forEach((item, index) => {
    let header = item.querySelector("header");
    header.addEventListener("click", function(){
        item.classList.toggle("open");

        let description = item.querySelector(".description");
        if(item.classList.contains("open")){
            description.style.height = `${description.scrollHeight + "px"}`;
            item.querySelector("i").classList.replace("ri-add-line", "ri-subtract-line");
        }else{
            description.style.height = "0px";
            item.querySelector("i").classList.replace("ri-subtract-line", "ri-add-line");    
        }
        removeOpen(index);
    })
})
function removeOpen(index1){
    accordionContent.forEach((item2, index2) => {
        if(index1 != index2){
            item2.classList.remove("open");
            let des = item2.querySelector(".description");
            des.style.height = "0px";
            item2.querySelector("i").classList.replace("ri-subtract-line", "ri-add-line"); 
        }
    })
}



//pages changee in phone size
epass.addEventListener("click",function(){
    homepage.style.display="none";
    chatbotpg.style.display="none";
    profilepg.style.display="none";
    epasspg.style.display = "block";
})
home.addEventListener("click",function(){
    epasspg.style.display="none";
    homepage.style.display = "block";
    chatbotpg.style.display="none";
    profilepg.style.display="none";
})
help.addEventListener("click",function(){
    homepage.style.display="none";
    epasspg.style.display="none";
    profilepg.style.display="none";
    chatbotpg.style.display = "block";
})
profile.addEventListener("click",function(){
    homepage.style.display="none";
    chatbotpg.style.display="none";
    epasspg.style.display="none";
    profilepg.style.display = "block";
})

//icon change and translate
const trigger = document.querySelectorAll(".bottom-bar i");
const text = document.querySelectorAll(".text");
trigger.forEach((menu)=> menu.addEventListener("click", toggle));

function toggle(){
   
    trigger.forEach((item)=> item != this ? item.classList.remove("active"): null);
    if(this.classList != "active"){
        this.classList.toggle("active");
      
    }
}

// sidebar open
sidebar.addEventListener("click",function(){
    elem.style.display = "block";
    // elem.style.opacity = 1;
})
sdClosebtn.addEventListener("click",function(){
    elem.style.display = "none";
})
setTimeout(function(){
    preloader2.style.transform = "translateX(-100%)";
    preloader2.style.display = "none";
},2000);