/* eslint-disable */
import "bootstrap";
import "./style.css";

//dot notion
window.onload = function() {
  //write your code here

  console.log("Hello");

  //agregamos un evento al elemento form, primero obtenemos el elemento
  let form = document.querySelector("form");
  //Luego manipulamos el elemento agregandole el evento submit
  // form.addEventListener("evento",funcion que se va activar)
  //on
  form.addEventListener("submit", enviarDatos);

  //declaramos la funcion que envia los datos del formulario
  function enviarDatos(e) {
    e.preventDefault(); // detiene tu comportamiento predeterminado del formulario e interpretado mi codigo
    let amount = document.getElementById("inputAmount");
    let card = document.getElementById("inputCard");
    let cvc = document.getElementById("inputCVC");
    let firstname = document.getElementById("inputFName");
    let lastname = document.getElementById("inputLName");
    let city = document.getElementById("inputCity");
    let state = document.getElementById("inputState");
    let postalcode = document.getElementById("inputZip");
    let message = document.getElementsByClassName("form-control");
    let pagos = document.getElementsByClassName("form-check-input");

    if (amount.value === "") {
      console.log("El campo amount está vacio");
    }

    if (card.value === "") {
      console.log("El campo card está vacio");
    }

    if (cvc.value === "") {
      console.log("El campo cvc está vacio");
    }
    if (firstname.value === "") {
      console.log("El campo firstname está vacio");
    }

    if (lastname.value === "") {
      console.log("El campo lastname está vacio");
    }

    if (city.value === "") {
      console.log("El campo city está vacio");
    }
    if (state.value === "Pick a state") {
      console.log("El campo state está vacio");
    }

    if (postalcode.value === "") {
      console.log("El campo postalcode está vacio");
    }
    if (message.value === "") {
      console.log("El campo message está vacio");
    }

    let elementoActivo = document.querySelector(
      'input[name="inlineRadioOptions"]:checked'
    );
    if (elementoActivo) {
    } else {
      console.log("El campo target esta vacio");
    }
  }
};
