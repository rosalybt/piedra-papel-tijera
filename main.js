
let puntuajeUsuaria = document.querySelector(".puntaje-usuarix");
let puntuajeCompu = document.querySelector(".puntaje-pc");
let result = document.querySelector(".resultado");
let puntosUsuaria = 0;
let eleccionComputadora;
let puntosCompu = 0;
let boton_piedra = document.querySelector(".piedra");
let boton_papel = document.querySelector(".papel");
let boton_tijera = document.querySelector(".tijera");
let manoUsuario = document.querySelector(".tijera");
let manoUsuaria = document.querySelector(".mano-usuarix");
let manoCompu = document.querySelector(".mano-pc");
let opcionRamdon;
let animacion = document.querySelector(".tablero");

let eleccionUsuaria = "";
let nombreDefault = document.querySelector(".nombre-user");


let nombre = prompt("Antes de jugar,¿puedes decirme tu nombre?")

nombreDefault.textContent = nombre
const computadora = () => {


    opcionRamdon = Math.round(Math.random() * 3);

    switch (opcionRamdon) {
        case 1: eleccionComputadora = "piedra";
            manoCompu.src = "imagenes/piedra_computadora.png";
            break;
        case 2: eleccionComputadora = "tijera";

            manoCompu.src = "imagenes/tijera_computadora.png";
            break;
        case 3: eleccionComputadora = "papel";

            manoCompu.src = "imagenes/papel_computadora.png";
            break;
    }


}

const decidiPuntaje = () => {


    switch (eleccionUsuaria) {
        case "piedra":
            if (eleccionComputadora == eleccionUsuaria) {
                result.textContent = "EMPATE 😐";
            } else if (eleccionComputadora == "tijera") {
                puntosUsuaria++;
                puntuajeUsuaria.textContent = puntosUsuaria;

                result.textContent = "GANASTE 🤗";
            }
            else {
                puntosCompu++;
                puntuajeCompu.textContent = puntosCompu;
                result.textContent = "PERDISTE 💩";
            }
            break;

        case "papel":

            if (eleccionComputadora == eleccionUsuaria) {
                result.textContent = "Empate 😐";
            }
            else if (eleccionComputadora == "tijera") {
                puntosCompu++;
                puntuajeCompu.textContent = puntosCompu;
                result.textContent = "PERDISTE 💩";
            }
            else {
                puntosUsuaria++;
                puntuajeUsuaria.textContent = puntosUsuaria;
                result.textContent = "GANASTE 🤗";
            }
            break;
        case "tijera":
            if (eleccionComputadora == eleccionUsuaria) {
                result.textContent = "Empate 😐";
            }
            else if (eleccionComputadora == "piedra") {
                puntosCompu++;
                puntuajeCompu.textContent = puntosCompu;
                result.textContent = "PERDISTE 💩";
            }
            else {
                puntosUsuaria++;
                puntuajeUsuaria.textContent = puntosUsuaria;
                result.textContent = "GANASTE 🤗";
            }

            break;

    }



}

boton_piedra.onclick = () => {
    manoCompu.src = "imagenes/piedra_computadora.png";
    manoUsuaria.src = "imagenes/piedra_user.png";
    result.textContent = "🤔";
    animacion.classList.add("jugando");
    setTimeout(() => {
        animacion.classList.remove("jugando");
        computadora();
        eleccionUsuaria = "piedra";
        manoUsuaria.src = "imagenes/piedra_user.png";
        decidiPuntaje();
    }, 2000)

}



boton_papel.onclick = () => {
    manoCompu.src = "imagenes/piedra_computadora.png";
    manoUsuaria.src = "imagenes/piedra_user.png";
    animacion.classList.add("jugando");
    result.textContent = "🤔";
    setTimeout(() => {
        animacion.classList.remove("jugando");
        computadora();
        eleccionUsuaria = "papel";
        manoUsuaria.src = "imagenes/papel_user.png"
        decidiPuntaje();

    }, 2000)

}
boton_tijera.onclick = () => {
    manoCompu.src = "imagenes/piedra_computadora.png";
    manoUsuaria.src = "imagenes/piedra_user.png";
    result.textContent = "🤔";
    animacion.classList.add("jugando");
    setTimeout(() => {
        animacion.classList.remove("jugando");
        computadora();
        eleccionUsuaria = "tijera";
        manoUsuaria.src = "imagenes/tijera_ada.png"
        decidiPuntaje();
    }, 2000)

}