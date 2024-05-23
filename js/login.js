document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('formulario-login');
  const enviarForm = document.getElementById('login-enviado');

  enviarForm.addEventListener('click', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const data = {};
    for (const [key, value] of formData.entries()) {
      data[key] = value;
    }
    console.log(data)
  
    const json = JSON.stringify(data);

    fetch('http://127.0.0.1:8000/IniciarSesion', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: json
    })
    .then(response => {
      if (response.status === 302) {
        // Redirección del servidor
        window.location.href = '/static/index.html';
        return;
      }
      return response.json();
    })
    .then(data => {
      if (data.error) {
        console.error(data.error);
        // Mostrar el mensaje de error al usuario
      } else {
        // Autenticación exitosa, redirigir al usuario
        window.location.href = '/static/index.html';
      }
    })
    .catch(error => console.error(error));
  });
});