
function calcularArea() {
  const inputR = document.getElementById('radioMayor');
  const inputr = document.getElementById('radioMenor');
  const resultado = document.getElementById('resultado-area');
  const valorArea = document.getElementById('valorArea');

 
  inputR.classList.remove('is-invalid');
  inputr.classList.remove('is-invalid');

  const R = inputR.value.trim();
  const r = inputr.value.trim();

  let valido = true;

  
  if (R === '') {
    inputR.classList.add('is-invalid');
    valido = false;
  }
  if (r === '') {
    inputr.classList.add('is-invalid');
    valido = false;
  }

  if (!valido) return;

  
  const Rnum = parseFloat(R);
  const rnum = parseFloat(r);

  if (isNaN(Rnum) || Rnum <= 0) {
    inputR.classList.add('is-invalid');
    valido = false;
  }
  if (isNaN(rnum) || rnum <= 0) {
    inputr.classList.add('is-invalid');
    valido = false;
  }

  if (!valido) return;

  
  if (Rnum <= rnum) {
    inputR.classList.add('is-invalid');
    inputr.classList.add('is-invalid');
    alert('El radio mayor (R) debe ser mayor que el radio menor (r).');
    return;
  }


  const area = Math.PI * (Math.pow(Rnum, 2) - Math.pow(rnum, 2));

  valorArea.textContent = area.toFixed(2) + ' u²';
  resultado.style.display = 'block';
}