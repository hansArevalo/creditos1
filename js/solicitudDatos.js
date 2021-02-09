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
var persona = {
    'usuario': []
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

function validar_mayor_edad(){
    let mayor_edad=false;
    if (edad >=18) {
        mayor_edad= true;
        
        
        //alert("mayor");
    } else {
        mayor_edad= false;
        //alert("menor");
      // Swal('Menor');
    }

}

function llenarDatos(){

    nombre= document.getElementById("fname").value;
    apellido = document.getElementById("fapellido").value;
    ciudad=document.getElementById("ciudad").value;
    tipo_id=document.getElementById("tipo_id").value;
    cedula= document.getElementById("Identificacion").value;
    telefono= document.getElementById("phone").value;
    email= document.getElementById("email").value;
    ingreso= document.getElementById("ingresos").value;
    estrato= document.getElementById("estrato").value;
    edad =calcularEdad(document.getElementById("fecha").value);

    //alert(validar_mayor_edad());
    persona.usuario.push({'Nombre':nombre,'apellido':apellido,'tipo_id':tipo_id,cedula,
    'telefono':telefono,'email':email,'ingreso':ingreso,'estrato':estrato,'edad':edad});
    //console.log(usuarios);
    localStorage.setItem('persona', JSON.stringify(persona));
    var restoredSession = JSON.parse(localStorage.getItem('persona'));
    console.log(restoredSession);

    //------------ crear archivo json ----------------

    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([JSON.stringify(persona, null, 2)], {
      type: "text/plain"
    }));
    
    //a.setAttribute("download", "data2.txt");
    document.body.appendChild(a);
    
    a.click();
    document.body.removeChild(a);

    
    limpiar();
    //archivoJson();
  
}


function limpiar(){
    
    document.getElementById("fname").innerText="";
    alert("nom");
    apellido.innerHTML = "";
    ciudad.innerHTML = "";
    cedula.innerHTML = "";
    telefono.innerHTML = "";
    email.innerHTML = "";
    edad.innerHTML = "";
    alert("asdfasd");
    
}
