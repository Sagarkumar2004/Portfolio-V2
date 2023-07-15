console.log("javascript is runing")

window.onload = function(){
  document.querySelector("#loading").style.display = "block";
  document.getElementById('main').style.opacity ="0"
}

 
document.querySelector(".menuBox").addEventListener("click", function(){
    document.querySelector(".menu1").classList.toggle("cross1");
    document.querySelector(".menu2").classList.toggle("v-class");
    document.querySelector(".menu3").classList.toggle("cross2");
    document.querySelector(".navlist").classList.toggle("v-class");
    document.querySelector(".navbar").classList.toggle("navgo");


  });

//  let AutoType = document.getElementById("element")


  
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) =>{
    console.log(entry)
    if(entry.isIntersecting){
      entry.target.classList.add('show');

    } else{
      entry.target.classList.remove('show')
    }
  });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

// Email js set up


document.querySelector(".contactBtn").addEventListener("click", function(e){

  e.preventDefault();
  console.log("I am click")
  var templateParams = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("massage").value,
  };
  
  emailjs.send('service_5pzf2xz', 'template_4hfiznz', templateParams)
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });
    alert("your message sent SUCCESSFULLY!");

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("massage").value = "";
})
    


 


 

