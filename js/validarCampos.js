function check(e) {
    tecla = (document.all) ? e.keyCode : e.which;
    if (tecla == 8) {
        return true;
    }
    patron = /[A-Za-z]/;
    tecla_final = String.fromCharCode(tecla);
    return patron.test(tecla_final);
}

function checkNum(e) {
    tecla = (document.all) ? e.keyCode : e.which;
    if (tecla == 8) {
        return true;
    }
    patron = /[0-9]/;
    tecla_final = String.fromCharCode(tecla);
    return patron.test(tecla_final);
}
//funciones iniciales 
window.addEventListener("load", function() {
    DatosEstrato();
}, false);

function DatosEstrato(){
    select = document.getElementById("estrato");
    for (let i = 1; i < 7; i++) {
        option = document.createElement("option");
        option.value = i;
        option.text = i;
      select.appendChild(option);
    }
}

 
    
    
    
    
    
    