var sidebar = document.querySelector(".hamburger");
var fi_line = document.querySelector("#fi-s");
var se_line = document.querySelector("#se-s");
var th_line = document.querySelector("#th-s");
var elem = document.querySelector(".elem");

var open_S = false;
//side bar
sidebar.addEventListener("click", function(){
    if(open_S == false){
    fi_line.style.transform = "rotate(55deg) translateX(8px) translateY(2px)";
    se_line.style.display = "none";
    th_line.style.transform = "rotate(-55deg) translateX(5px)";
    open_S = true;
    }
    else{
        fi_line.style.transform = "rotate(0deg)";
        se_line.style.display = "block";
        th_line.style.transform = "rotate(0deg)";
        open_S = false; 
    }
    
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