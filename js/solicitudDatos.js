let nombre;
let apellido;
let ciudad;
let cedula;
let edad;
let telefono;
let email;
let ingreso;
let estrato;

function validar_edad(){
    let edad= document.getElementById("fecha").value;
    edad 
    alert(edad);

}
   
function llenarDatos(){

    nombre= document.getElementById("fname").value;
    apellido = document.getElementById("fapellido").value;
    ciudad=document.getElementById("tipo_id").value;
    cedula= document.getElementById("Identificacion").value;
    telefono= document.getElementById("phone").value;
    email= document.getElementById("email").value;
    ingreso= document.getElementById("ingresos").value;
    estrato= document.getElementById("estrato").value;
    edad= validar_edad();
    alert("holaaaa");


}

//Funcion para cargar las provincias al campo "select".
function cargarProvincias() {
    //Inicializamos el array.
    var array = ["Cantabria", "Asturias", "Galicia", "Andalucia", "Extremadura"];
    //Ordena el array alfabeticamente.
    array.sort();
    //Pasamos a la funcion addOptions(el ID del select, las provincias cargadas en el array).
    addOptions("provincia", array);
}
