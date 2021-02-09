let nombre;
let apellido;
let ciudad;
let cedula;
let edad;
let telefono;
let email;
let ingreso;
let estrato;
let tipo_id;
let tipo_credito;
let valorCredito;
  let persona = {
  usuario: [],
};


function calcularEdad(fecha) {
  var hoy = new Date();
  var cumpleanos = new Date(fecha);
  var edad = hoy.getFullYear() - cumpleanos.getFullYear();
  var m = hoy.getMonth() - cumpleanos.getMonth();

  if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
    edad--;
  }

  return edad;
}

function llenarDatos() {
   if ( nombre == "" || apellido == "" || ciudad == "" || cedula == "" || telefono == "" ||email == ""){
    //COMPRUEBA CAMPOS VACIOS
    swal("AVISO!", "Los CAMPOS NO pueden quedar vacios", "info");
  } else {
    nombre = document.getElementById("fname").value;
    apellido = document.getElementById("fapellido").value;
    ciudad = document.getElementById("ciudad").value;
    tipo_id = document.getElementById("tipo_id").value;
    cedula = document.getElementById("Identificacion").value;
    telefono = document.getElementById("phone").value;
    email = document.getElementById("email").value;
    ingreso = document.getElementById("ingresos").value;
    estrato = document.getElementById("estrato").value;
    edad = calcularEdad(document.getElementById("fecha").value);
    tipo_credito= document.getElementById("tipoCredito").value;
    valorCredito= document.getElementById("valorCredito").value;
    
    persona.usuario.push({
      Nombre: nombre,
      apellido: apellido,
      tipo_id: tipo_id,
      cedula,
      telefono: telefono,
      email: email,
      ingreso: ingreso,
      estrato: estrato,
      edad: edad,
      tipo_credito: tipo_credito,
      valorCredito: valorCredito,
    });
    console.log(persona);
    localStorage.setItem("persona", JSON.stringify(persona));
    var restoredSession = JSON.parse(localStorage.getItem("persona"));
    console.log(restoredSession);

    //------------ crear archivo json ----------------

    const a = document.createElement("a");
    a.href = URL.createObjectURL(
      new Blob([JSON.stringify(persona, null, 2)], {
        type: "text/plain",
      })
    );

    //a.setAttribute("download", "data2.txt");
    //document.body.appendChild(a);

    //a.click();
    //document.body.removeChild(a);

    //archivoJson();
  }
  limpiar();
}

function limpiar() {
  document.getElementById("fname").value = "";
  document.getElementById("fapellido").value = "";
  document.getElementById("Identificacion").value = "";
  document.getElementById("fecha").value = "";
  document.getElementById("ciudad").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phone").value = "";
}


function solicitarAdicionales(){

  //--------- se crea cada una de las acciones de los botones para 
//identidentificar el tipo de credito que el usuario selecciono
const boton = document.querySelector("#BtnLibranza");
const boton1 = document.querySelector("#btnCreditoLibreDestino");
const boton2 = document.querySelector("#BtnCreditoVehiculo");
const boton3 = document.querySelector("#BtnCreditoViviendaSocial");
const boton4 = document.querySelector("#BtnCreditoVivienda");
const boton5 = document.querySelector("#BtnCreditoMano");
// Agregar listener
tipo_credito = boton.addEventListener("click", function(evento){
	// Aquí todo el código que se ejecuta cuando se da click al botón
	tipo_credito= boton.value;
  alert(tipo_credito);
});
boton1.addEventListener("click", function(evento){
	tipo_credito= boton1.value;
  alert(tipo_credito);
});
boton2.addEventListener("click", function(evento){
	tipo_credito= boton2.value;
  alert(tipo_credito);
});
boton3.addEventListener("click", function(evento){
	tipo_credito= boton3.value;
  alert(tipo_credito);
});
boton4.addEventListener("click", function(evento){
	tipo_credito= boton4.value;
  alert(tipo_credito);
});
boton5.addEventListener("click", function(evento){
	tipo_credito= boton5 .value;
  alert(tipo_credito);
});
location.href='./creditos.html';

}




























