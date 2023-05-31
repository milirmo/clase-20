//lectura por nodos 

//por id
let elementoporid=document.querySelector('#parrafo1'); //queryselector para un solo id
elementoporid.innerHTML=("elemento 0 por id");

//por class
let elementosporclass=document.querySelectorAll('.parrafos'); //queryselector para todos las clases
/*console.log(elementosporclass);*/
const arreglo=[...elementosporclass]; //para guardar los elementos en un arreglo
/*console.log(arreglo); //para ver el arreglo en la consola*/
arreglo[1].innerHTML=("elemento 1 por class");

//por etiqueta
let elementosporetiqueta=document.querySelectorAll('p');
elementosporetiqueta[2].innerHTML=("elemento 2 por etiqueta");
console.log(elementosporetiqueta);

//agregar css

//id
elementoporid.style.background= "rgb(230, 105, 147)";
elementoporid.style.color= "black";
elementoporid.style.borderRadius= "10px";
elementoporid.style.width= "400px";
elementoporid.style.textAlign= "rigth";

//class
elementosporclass[1].style.background= "rgb(235, 139, 171)";
elementosporclass[1].style.color= "black";
elementosporclass[1].style.borderRadius= "10px";
elementosporclass[1].style.width= "400px";
elementosporclass[1].style.textAlign= "rigth";

//etiqueta
elementosporetiqueta[2].style.background= "rgb(253, 187, 209)";
elementosporetiqueta[2].style.color= "black";
elementosporetiqueta[2].style.borderRadius= "10px";
elementosporetiqueta[2].style.width= "400px";
elementosporetiqueta[2].style.textAlign= "rigth"; 

