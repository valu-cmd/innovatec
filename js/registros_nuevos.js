document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registro-nuevo');
    const enviarForm = document.getElementById('registro-enviar');


    enviarForm.addEventListener('click', (event) => {
      event.preventDefault();
      const formData = new FormData(form);
      const data = {};
      for (const [key, value] of formData.entries()) {
        data[key] = value;
      }
      console.log(data)
      data.fecha = new Date(data.fecha).toISOString();
      const json = JSON.stringify(data);
  //ayuda a hacer la peticion http 
      fetch('http://127.0.0.1:8000/RegistroNuevo', {
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

