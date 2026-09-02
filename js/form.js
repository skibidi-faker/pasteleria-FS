document.getElementById('registroForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Captura de datos
    const correo = document.getElementById('correo').value.trim();
    const codigoPromocional = document.getElementById('codigoPromocional').value.trim();

    // Listado donde se acumularán las promociones obtenidas
    const beneficios = [];

    // 1. Evaluación Código Promocional ("FELICES50")
    if (codigoPromocional.toUpperCase() === 'FELICES50') {
      beneficios.push('10% de descuento de por vida aplicado por código FELICES50.');
    }

    // 2. Evaluación Estudiantes @duocuc.cl
    const esCorreoDuoc = correo.toLowerCase().endsWith('@duocuc.cl')

    if (esCorreoDuoc) {
      beneficios.push('Torta gratis en tu cumpleaños por ser estudiante de Duoc UC.');
    }

    // Mostrar Resultados
    const contenedorResultado = document.getElementById('resultadoBeneficios');
    const listaBeneficios = document.getElementById('listaBeneficios');
    listaBeneficios.innerHTML = '';

    if (beneficios.length > 0) {
      beneficios.forEach(beneficio => {
        const li = document.createElement('li');
        li.textContent = beneficio;
        listaBeneficios.appendChild(li);
      });
    } else {
      const li = document.createElement('li');
      li.textContent = 'Registro exitoso sin promociones especiales aplicadas.';
      listaBeneficios.appendChild(li);
    }

    contenedorResultado.style.display = 'block';
  });