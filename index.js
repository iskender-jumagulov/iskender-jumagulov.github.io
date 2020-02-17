let menu= document.querySelector("button");
let aside =document.querySelector("aside");

menu.addEventListener('click',function(){
    if(aside.style.left == "200px"){
               aside.style.left = "0px";
    }
   else{aside.style.left = "-200px";
        
   }
});
