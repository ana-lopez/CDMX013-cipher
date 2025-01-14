import cipher from './cipher.js';
// todo lo que ver con manipulacion del DOM
let btnCifrar = document.getElementById('cifrar');
btnCifrar.addEventListener('click', function () {
    let plainText = document.getElementById('plainText').value;
    let offset = parseInt(document.getElementById('offset').value); // parseInt() convierte un string a un entero
    //manda a llamar a la funcion dentro del objeto, y le pasa los valores de offset e input a cipher.js
    document.getElementById('decodedTxt').value = cipher.encode(offset, plainText);

});

const btnDecode = document.getElementById('btnDecode');
btnDecode.addEventListener('click', function () {
    let decodedTxt = document.getElementById('decodedTxt').value;
    let offset = parseInt(document.getElementById('offset').value); // parseInt() convierte un string a un entero
    document.getElementById('plainText').value = cipher.decode(offset, decodedTxt);
});

//Sirve para ocultar estos elementos al cargar el html. 
//Al no estar dentro de una funcion permite que se escondan estos elementos.
document.getElementById('container2').style.display = 'none';
document.getElementById('areaTexts').style.display = 'none';
document.getElementById('goBack').style.display = 'none';

//funcion para mostrar los elementos ocultos
const boton = document.getElementById('boton');
boton.addEventListener('click', showScreen);
function showScreen() {
    document.getElementById('container2').style.display = 'flex';
    document.getElementById('areaTexts').style.display = 'flex';
    document.getElementById('goBack').style.display = 'flex';
    document.getElementById('hi').style.display = 'none';
    document.getElementById('centrar').style.display = 'none';
    document.getElementById('boton').style.display = 'none';
    document.getElementById('txt').style.display = 'none';
    document.getElementById('offset').style.display = 'none';
}

const btnAtras = document.getElementById('goBack');
btnAtras.addEventListener('click', goBack);
function goBack() {
    document.getElementById('container2').style.display = 'none';
    document.getElementById('areaTexts').style.display = 'none';
    document.getElementById('goBack').style.display = 'none';
    document.getElementById('hi').style.display = 'flex';
    document.getElementById('centrar').style.display = 'flex';
    document.getElementById('boton').style.display = 'flex';
    document.getElementById('txt').style.display = 'none';
    document.getElementById('offset').style.display = 'flex';

}

//Funcion para borrar las areas de texto
let btnClear = document.getElementById('btnClear');
btnClear.addEventListener('click', clearText)
function clearText() {
    document.getElementById('plainText').value = '';
    document.getElementById('decodedTxt').value = '';
    //  document.getElementById('offset').value = '';
}

