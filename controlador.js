let carpintero1 = document.getElementById("carpintero1");
let fotocapin1 = document.getElementById("fotocapin1");
let carpintero2 = document.getElementById("carpintero2");
let fotocapin2 = document.getElementById("fotocapin2");


carpintero1.addEventListener("click", activarcarpin1);
carpintero2.addEventListener("click", activarcarpin2);

function activarcarpin1(){

    console.log("Hice clic");

    carpintero1.classList.remove("bg-dark");
    fotocapin1.classList.remove("invisible");

    setTimeout(function(){

        carpintero1.classList.add("bg-dark");
        fotocapin1.classList.add("invisible");


    },3000)

}

function activarcarpin2(){

    console.log("Hice clic");

    carpintero2.classList.remove("bg-dark");
    fotocapin2.classList.remove("invisible");

    setTimeout(function(){

        carpintero2.classList.add("bg-dark");
        fotocapin2.classList.add("invisible");


    },3000)

}