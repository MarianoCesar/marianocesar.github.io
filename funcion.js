
//Creacion de una barra particular identificada por su id
function crearBarra(id_barra){
    for(i=0;i<=16;i++){
        let div = document.createElement("div");
        div.className = "e";
        id_barra.appendChild(div);
    }
}


let html = document.getElementById("html");
crearBarra(html);
let javascript = document.getElementById("javascript");
crearBarra(javascript);
let office = document.getElementById("office");
crearBarra(office);
let ingles = document.getElementById("ingles");
crearBarra(ingles);
let liderazgo = document.getElementById("liderazgo");
crearBarra(liderazgo);
let trabajo = document.getElementById("trabajo");
crearBarra(trabajo);

let contadores = [-1,-1,-1,-1,-1,-1];
let entro = false;

//Función que aplica las animaciones de la habilidades
function efectoHabilidades(){
    var habilidades = document.getElementById("habilidades");
    var distancia_skills = window.innerHeight - habilidades.getBoundingClientRect().top;
    if(distancia_skills>=300 && entro==false){
        entro = true;
        const intervalHtml = setInterval(function(){
            pintarBarra(html, 16, 0, intervalHtml);
        },100);
        const intervalJavascript = setInterval(function(){
            pintarBarra(javascript, 11, 1, intervalJavascript);
        },100);
        const intervalOffice = setInterval(function(){
            pintarBarra(office, 11, 2, intervalOffice);
        },100);
        const intervalIngles = setInterval(function(){
            pintarBarra(ingles, 15, 3, intervalIngles);
        },100);
        const intervalLiderazgo = setInterval(function(){
            pintarBarra(liderazgo, 16, 4, intervalLiderazgo);
        },100);
        const intervalTrabajo = setInterval(function(){
            pintarBarra(trabajo, 11, 5, intervalTrabajo);
        },100);
    }
}

//LLenado de una barra particular con la cantidad indicada
function pintarBarra(id_barra, cantidad, indice, interval){
    contadores[indice]++;
    x = contadores[indice];
    if(x < cantidad){
        let elementos = id_barra.getElementsByClassName("e");
        elementos[x].style.backgroundColor = "#940253";
    }else{
        clearInterval(interval)
    }
}

//Detectar el scrolling del mouse para aplicar la animación de la barra
window.onscroll = function(){
    efectoHabilidades();
}