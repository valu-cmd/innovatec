document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('correo-enviado');
    const enviarForm = document.getElementById('enviar-contacto');


    enviarForm.addEventListener('click', (event) => {
      event.preventDefault();
      const formData = new FormData(form);
      const data = {};
      for (const [key, value] of formData.entries()) {
        data[key] = value;
      }
     
  //ayuda a hacer la peticion http 
      const json = JSON.stringify(data);
      fetch('http://127.0.0.1:8000/correo-enviado', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: json
      })
      .then(response => response.json())
      //
      .then(data => console.log(data))
      .catch(error => console.error(error));
    });
    
    
  });

