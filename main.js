let images= document.querySelectorAll('.change li img')
let mainImage=document.getElementById("mainImage")
let mysection= document.querySelector("section")
console.log(images)

images.forEach(i=>{
    i.addEventListener("click",()=>{
        console.log(i.getAttribute("value"));
        console.log(i.src)
        let color= i.getAttribute("value")
        mainImage.src=i.src;
        
        if(color==="blue"){
            mysection.style.backgroundColor="#0062be";
        }
        else if(color==="silver"){
            mysection.style.backgroundColor="rgb(233 40 40)";


        }
        if (color==="black"){
            mysection.style.backgroundColor="black";


        }

    })
})