const numero = Number (prompt(`Digite um número:`));

const numeroTiltulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTiltulo.innerHTML = numero;
texto.innerHTML = '';
texto.innerHTML = `Raiz quadrada: ${numero ** 0.5}</br>`;
texto.innerHTML += `${numero} é inteiro:${Number.isInteger(numero)} </br> `;
texto.innerHTML += `É NaN: ${Number.isNaN(numero)}</br> `;
texto.innerHTML += `Arredondando pra baixo: ${Math.floor(numero)}</br>`;
texto.innerHTML += `Arredondando pra Cima: ${Math.ceil(numero)}</br>`;
texto.innerHTML += `Com duas casas decimais: ${numero.toFixed(2)}</br>`;
