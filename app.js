"use strict";

//vamos a capturar todos los elementos del don, para las opciones de piedra, papel o tijera

let bottonPiedra = document.querySelector(".piedra");
let bottonPapel = document.querySelector(".papel");
let bottonTijera = document.querySelector(".tijera")

//capturamos los elementos del DOM

let manousuario = document.querySelector(".mano-usario");
let manocomputador = document.querySelector(".mano-computador");

let puntajeusuario = document.querySelector(".puntaje-usuario p");
let puntajecomputador = document.querySelector(".puntaje-computador p");

let labelresultado = document.querySelector(".resultado");

let tablero = document.querySelector(".tablero")

let eleccionusuario = ""
let eleccioncomputador =""

let contadorusuario = 0;
let contadorcomputador = 0;
/**
 * ALERTA
 */

const swaInicio = () => {
    Swal.fire({
        title: 'Good job!',
        text: 'You clicked the button!',
        icon: 'success'
    })
}
swaInicio();

const swalGanador = () => {
    swalGanador.fire({
        title: 'success',
        text:'ganaste',
        icon:'continuemos...',
        confirButtonText: 'cool',
        allowOutsideClick: true
    })

}

const swalPerdedor = () => {
    swalPerdedor.fire({
        title: 'success',
        text:'perdiste',
        icon:'continuemos...',
        confirButtonText: 'cool',
        allowOutsideClick: true
    })

}

const LimpiarMarcadorres = () => {
    contUsuario = 0;
    contCompu = 0;
    puntajeusuario.textContent = contUsuario;
    puntajecomputador.textContent = contadorcomputador;

}

const ganadores = (puntajeusuario, puntajecomputador) => {
    console.log("usuario:" +puntajeUsuario,"commputador:" +puntajeComputador,"aca se muestra el resultado")
    if (puntajeusuario >= 3 && puntajeusuario > puntajecomputador){
        console.log("usuario ganador");
        swalGanador();
        selTimeout(LimpiarMarcadorres, 3000)
    }
    else if (puntajeComputador >= 3 && puntajeusuario > puntajecomputador){
        console.log("usuario perdedor");
        swalGanadorPerdedor();
        selTimeout(LimpiarMarcadorres, 3000)

    }
}

const resultado = () => {
    if (eleccionusuario == "piedra") {
        if (eleccioncomputador == "piedra") {
            labelresultado.textContent = "empate"
        }
        if (eleccioncomputador == "papel") {
            labelresultado.textContent = "perdiste"
            contadorcomputador++;
            puntajecomputador.textContent=contadorcomputador;
            ganadores(contadorusuario, contadorcomputador)
        }
        if (eleccioncomputador == "tijera")
        labelresultado.textContent  = "ganasteee!";
        contUsuario++;
        puntajeusuario.textContent = contadorusuario;
        ganadores (contadorusuario, contadorcomputador)
    }

    if (eleccionusuario == "tijera") {
        if (eleccioncomputador == "piedra") {
            labelresultado.textContent = "perdistee"
        }
        if (eleccioncomputador == "papel") {
            labelresultado.textContent = "ganastee"
            contadorcomputador++;
            puntajecomputador.textContent=contadorcomputador;
            ganadores(contadorusuario, contadorcomputador)
        }
        if (eleccioncomputador == "tijera")
        labelresultado.textContent  = "empateee";
        contUsuario++;
        puntajeusuario.textContent = contadorusuario;
        ganadores (contadorusuario, contadorcomputador)
    }

    if (eleccionusuario == "papel") {
        if (eleccioncomputador == "piedra") {
            labelresultado.textContent = "ganastee"
        }
        if (eleccioncomputador == "papel") {
            labelresultado.textContent = "empate"
            contadorcomputador++;
            puntajecomputador.textContent=contadorcomputador;
            ganadores(contadorusuario, contadorcomputador)
        }
        if (eleccioncomputador == "tijera")
        labelresultado.textContent  = "perdistee";
        contUsuario++;
        puntajeusuario.textContent = contadorusuario;
        ganadores (contadorusuario, contadorcomputador)
    }
};

const eleccionComputador = () => {
    let opcionALAZAR = math.floor(math.random() * 3);
    //opcion piedra
    if (opcionALAZAR == 0 ){
        manocomputador.src  = "./assets/piedra_computadora.png";
        eleccionComputador = "piedra";
    }
    else if (opcionALAZAR == l) {
        //opcion para papel
        manocomputador.src = "./assets/papel_computadora.png";
        eleccionComputador  = "papel";
    } else {
        //opcion para tijera
        manocomputador.src = "./assets/tijera_computadora.png";
        eleccionComputador = "tijera";
    }
};

bottonPapel.onclick = () => {
    manousuario.src = "./assets/piedra_ada.png";
    manocomputador.src = "./assets/piedra_computadora.png";
    labelresultado.textContent="";
    tablero.classList.add("jugando");
    setTimeout(() => {
        eleccionusuario = "piedra";
        manousuario.src = "./assets/piedra_ada.png";
        eleccionComputador();
        resultado();
        tablero.classList.remove("jugando");
        resultado();
    }, 2000);
};

bottonPapel.onclick = () => {
    manousuario.src = "./assets/papel_ada.png";
    manocomputador.src = "./assets/papel_computadora.png";
    labelresultado.textContent="...";
    tablero.classList.add("jugando");
    setTimeout(() => {
        eleccionusuario = "papel";
        manousuario.src = "./assets/papel_ada.png";
        eleccionComputador();
        resultado();
        tablero.classList.remove("jugando");
    }, 2000);
};

bottonPapel.onclick = () => {
    manousuario.src = "./assets/tijera_ada.png";
    manocomputador.src = "./assets/tijera_computadora.png";
    labelresultado.textContent="...";
    tablero.classList.add("jugando");
    setTimeout(() => {
        eleccionusuario = "tijera";
        manousuario.src = "./assets/tijera_ada.png";
        eleccionComputador();
        resultado();
        tablero.classList.remove("jugando");
    }, 2000);
};
