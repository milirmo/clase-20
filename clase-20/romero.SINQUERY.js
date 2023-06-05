//seleccion y cambiado de elementos

// 1- por id
let elementoporid= document.getElementById("parrafo1");
elementoporid.innerHTML=("watafak");

/*let elemento2porid= document.getElementById("parrafo2");
elemento2porid.innerHTML=("ravioles con crema");

let elemento3porid= document.getElementById("parrafo3");
elemento3porid.innerHTML=("pizza de champiñones");*/

// 2- por class
let elementosporclass=document.getElementsByClassName("parrafos");
console.log(elementosporclass.length); //console.log: ver datos en la consola (en este caso la cant de elementos)
elementosporclass[1].innerHTML=("omaigot");

// 3- por etiqueta
let elementosporetiqueta=document.getElementsByTagName("p");
elementosporetiqueta[2].innerHTML=("oushit");

//modificar estilos

//id
elementoporid.style.background= "black";
elementoporid.style.color= "white";
elementoporid.style.borderRadius= "60px";
elementoporid.style.width= "180px";
elementoporid.style.textAlign= "center";

//class
elementosporclass[1].style.background= "blue";
elementosporclass[1].style.color= "white";
elementosporclass[1].style.borderRadius= "60px";
elementosporclass[1].style.width= "180px";
elementosporclass[1].style.textAlign= "center";

//etiqueta
elementosporetiqueta[2].style.background= "green";
elementosporetiqueta[2].style.color= "white";
elementosporetiqueta[2].style.borderRadius= "60px";
elementosporetiqueta[2].style.width= "180px";
elementosporetiqueta[2].style.textAlign= "center"; 
