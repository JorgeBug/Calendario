//Cargar elementos DOM
let dia = document.getElementById("dia");
let mes = document.getElementById("mes");
let anio = document.getElementById("anio");

let boton_calcular = document.getElementById("boton_calcular");

let resultado = document.getElementById("resultado");

boton_calcular.addEventListener("click", () => {
    

    if(anio.value.length !=4 ){
        alert("Debes ingresar el año con 4 digitos");
        return;
    }else if(dia.value > 31 || dia.value <1){
        alert("Debes ingresa del 1 al 31 dias");
        return;
    }else if(mes.value> 12 || mes.value <1){
        alert("Debes ingresar entre 1 y 12");
        return;
    }else{
        
        //Crear fecha
        let fecha = new Date(anio.value, mes.value - 1, dia.value);
        let Dialaboral = fecha.getDay();
        let obtenerdia = "";
        

        switch (Dialaboral) {
            case 0:
                obtenerdia = "Domingo";
                break;
            case 1:
                obtenerdia = "Lunes";
                break;
            case 2:
                obtenerdia = "Martes";
                break;
            case 3:
                obtenerdia = "Miércoles";
                break;
            case 4:
                obtenerdia = "Jueves";
                break;
            case 5:
                obtenerdia = "Viernes";
                break;
            case 6:
                obtenerdia = "Sábado";
                break;
        }

        if(diaLaboral == 0 || diaLaboral == 6) {
            obtenerdia = "No es un día laboral";
            resultado.value = obtenerdia;
        }else {
            obtenerdia = "Es un día laboral";
            resultado.value = obtenerdia;
        }
        
    }

});