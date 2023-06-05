//crear elementos
//NO USAR COMILLAS DOBLES

//crear elemento 4:
const parrafo4=document.createElement('p'); //creas elemento que queremos.
const elementopadre=document.querySelector('.padre'); //seleccionas el padre (con class).
elementopadre.appendChild(parrafo4); //agregas nodo.
const textoparrafo4=document.createTextNode('parrafo 4.'); //creas texto que quieras que aparezca en el navegador.
parrafo4.appendChild(textoparrafo4); //pegas el texto creado.

//crear elemento 5:
//en este caso no se crea el elementopadre porq ya esta declarado.
const parrafo5=document.createElement('p');
elementopadre.appendChild(parrafo5);
const textoparrafo5=document.createTextNode('parrafo 5.');
parrafo5.appendChild(textoparrafo5);

//crear un div con un h2 con mi nombre:
const nombre=document.createElement('h2');
const elementomadre=document.querySelector('.madre');
elementomadre.appendChild(nombre)
const h2nombre=document.createTextNode('milagros.');
nombre.appendChild(h2nombre);

//crear otro div con un h3 con un subtitulo:
const subtitulo=document.createElement('h3');
const elementotia=document.querySelector('.tia');
elementotia.appendChild(subtitulo);
const h3subtitulo=document.createTextNode("asies, me llamo milagros.");
subtitulo.appendChild(h3subtitulo);

//agregarle 3 parrafos al mismo div:
//1
const parrafo6=document.createElement('p');
elementotia.appendChild(parrafo6);
const textoparrafo6=document.createTextNode('parrafo 6.');
parrafo6.appendChild(textoparrafo6);
//2
const parrafo7=document.createElement('p');
elementotia.appendChild(parrafo7);
const textoparrafo7=document.createTextNode('parrafo 7.');
parrafo7.appendChild(textoparrafo7);
//3
const parrafo8=document.createElement('p');
elementotia.appendChild(parrafo8);
const textoparrafo8=document.createTextNode('parrafo 8.');
parrafo8.appendChild(textoparrafo8);