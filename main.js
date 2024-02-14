
onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };
document.getElementById('myButton').addEventListener('click', function() {
        // Agregar clase de transición a la página actual
        document.body.classList.add('fade-out');
        
        // Redireccionar a la página 2 después de la animación de transición
        setTimeout(function() {
            window.location.href = 'FLORES.html';
        }, 500); // 500 milisegundos (0.5 segundos), puedes ajustar este valor según tu preferencia
    });
    