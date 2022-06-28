/*Pagina Home */
const nombre = document.querySelector("#nombre");
const plataforma = document.querySelector("#plataforma");
const descripcion = document.querySelector("#descripcion");
const buttonSend = document.querySelector("#button-send");
const containerSeries = document.querySelector(".container-series");
const containerAlerta = document.querySelector("#container-vacio");
const listadoSeries = document.querySelector("#listado-series");

/* Pagina contacto */
const buttonSendContact = document.querySelector("#enviar-contacto");
const emailContacto = document.querySelector("#email-contacto");
const textareaContacto = document.querySelector("#textarea-contacto");

/*boton del inicio */
if (buttonSend !== null) {
  buttonSend.addEventListener("click", (e) => {
    e.preventDefault();

    if (!nombre.value.trim()) {
      alert("Por favor ingrese un nombre");
      return;
    }
    if (!plataforma.value.trim()) {
      alert("Por favor ingrese una plataforma");
      return;
    }
    if (!descripcion.value.trim()) {
      alert("Por favor ingrese una descripción");
      return;
    }

    const nameCapitalize =
      nombre.value.charAt(0).toUpperCase() +
      nombre.value.slice(1).toLowerCase();
    const plataformaCapitalize =
      plataforma.value.charAt(0).toUpperCase() +
      plataforma.value.slice(1).toLowerCase();
    const descripcionCapitalize =
      descripcion.value.charAt(0).toUpperCase() +
      descripcion.value.slice(1).toLowerCase();

    let htmlCode = `<li class='margin-serie mb-3'><span>Serie: ${nameCapitalize}</span> <br> Plataforma: <span>${plataformaCapitalize}</span> <br> Descripción: ${descripcionCapitalize}</li>`;
    containerAlerta.classList.add("oculto");
    listadoSeries.classList.remove("oculto");
    containerSeries.innerHTML += htmlCode;
    nombre.value = "";
    plataforma.value = "";
    descripcion.value = "";
  });
}

/* funcion para validar un email */
const validarEmail = (correo) => {
  const expReg =
    /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/;
  let esValido = expReg.test(correo);
  return esValido;
};

/*boton de contacto */
if (buttonSendContact !== null) {
  buttonSendContact.addEventListener("click", (e) => {
    e.preventDefault();
    if (!emailContacto.value.trim()) {
      alert("Por favor ingrese un email");
      return;
    }
    if (!validarEmail(emailContacto.value)) {
      alert("Ingrese un email válido");
      return;
    }
    if (!textareaContacto.value.trim()) {
      alert("Por favor ingrese una consulta");
      return;
    }
    alert("Consulta enviada!");
    emailContacto.value = "";
    textareaContacto.value = "";
  });
}

/* cambio el href del link del mail en sección "nosotros" con jquery */

$(document).ready(function () {
  $("#mail").click(function () {
    $("#mail").attr("href", "mailto:guido_fortunato@hotmail.com.ar");
  });
});
