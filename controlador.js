let carpintero1 = document.getElementById("carpintero1");
let fotocarpin1 = document.getElementById("fotocarpin1");
let carpintero2 = document.getElementById("carpintero2");
let fotocarpin2 = document.getElementById("fotocarpin2");
let contadorcarpin=0;


carpintero1.addEventListener("click", activarcarpin1);
carpintero2.addEventListener("click", activarcarpin2);

function activarcarpin1(){

    console.log("Hice clic");

    carpintero1.classList.remove("bg-dark");
    fotocarpin1.classList.remove("invisible");
    contadorcarpin++;

    setTimeout(function(){

        if(contadorcarpin != 2){

        carpintero1.classList.add("bg-dark");
        fotocarpin1.classList.add("invisible");
        contadorcarpin--;

        }
        else{

            let audio = new Audio("audio/audio.mp3");
            audio.play();
            let rescarpintero = document.getElementById("rescarpintero");
            rescarpintero.classList.remove("invisible");
            rescarpintero.classList.add("visible");
        }


    },3000)

}

function activarcarpin2(){

    console.log("Hice clic");

    carpintero2.classList.remove("bg-dark");
    fotocarpin2.classList.remove("invisible");
    contadorcarpin++;

    setTimeout(function(){

        if(contadorcarpin != 2){

            carpintero2.classList.add("bg-dark");
            fotocarpin2.classList.add("invisible");

            contadorcarpin--;
    
            }
            else{
    
                let audio = new Audio("audio/audio.mp3");
                audio.play();
                let rescarpintero = document.getElementById("rescarpintero");
                rescarpintero.classList.remove("invisible");
                rescarpintero.classList.add("visible");
            }
        

    },3000)

}