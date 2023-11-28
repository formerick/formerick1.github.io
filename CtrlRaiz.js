let numero = document.getElementById("numero");
let resultado = document.getElementById("resultado");
let forma = document.getElementById("forma");
let m_error = document.getElementById("m_error");


forma.addEventListener("submit", raiz, false);

function raiz(event) {
   

  try {
    let n = parseInt(numero.value);

    if (isNaN(n)) {
      throw "Ingresa un número";
    }

    if (n < 0) {
      throw "El número debe ser positivo";
    }

    if (n === 0) {
      throw "El número debe ser mayor que cero";
    }

    let r = Math.sqrt(n);
    resultado.innerHTML = r;
    m_error.innerHTML = null;
  } catch (e) {
    m_error.innerHTML = e;
    resultado.innerHTML = null;
  }
}

forma.addEventListener("reset", limpiarFormulario, false);

function limpiarFormulario() {
  resultado.innerHTML = null;
  m_error.innerHTML = null;
  numero.value = null;
}


