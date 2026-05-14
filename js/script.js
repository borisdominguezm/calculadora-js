//Agrega en pantalla el valor del botón presionado
function agregar(valor){
    document.getElementById("pantalla").value += valor;
}
//Limpia la pantalla
function borrar(){
    document.getElementById("pantalla").value = "";
}
function calcular(){
    //Obtiene el texto escrito en pantalla
    const valorPantalla = document.getElementById("pantalla").value;
    
    //Si no hay nada escrito termina la función
    if(valorPantalla === ""){
        return;
    }

    //Evalúa el string como operación matemática
    const resultado = eval(valorPantalla);
    //Muestra el resultado
    document.getElementById("pantalla").value = resultado;
}