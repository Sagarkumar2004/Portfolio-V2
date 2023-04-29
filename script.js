console.log("javascript is runing")
 
document.querySelector(".menuBox").addEventListener("click", function(){
    document.querySelector(".menu1").classList.toggle("cross1");
    document.querySelector(".menu2").classList.toggle("v-class");
    document.querySelector(".menu3").classList.toggle("cross2");
    document.querySelector(".navlist").classList.toggle("v-class");
    document.querySelector(".navbar").classList.toggle("navgo");
    
    
   
  });