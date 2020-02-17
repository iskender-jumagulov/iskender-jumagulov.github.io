let colors = ["yellow","pink","red"];
let sections = document.querySelectorAll("section");

// sections[0].style.background = "#000";
// sections[1].style.backgroundColor = "#000"

for (let index = 0; index < sections.length; index++) {
    const element = sections[index];

 element.style.backgroundColor = colors[index];  
  
}

let links = document.querySelectorAll("a");
console.log(links.innerText);

for (let index = 0; index < links.length; index++) {
    const element = links[index];
    let randomNumber = Math.floor(Math.random)

   
     
    element.addEventListener("click",function(event){
        event.preventDefault();

        let blockId = element.getAttribute("href");
        let section = document.querySelector("section")
          console.log(element.getAttribute("href"));
    });
}