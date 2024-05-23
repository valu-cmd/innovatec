/*------------------------login.html--------------------------------*/

/*Utilizado para controlar el comportamiento del placeholder en un input. 
Cuando el usuario coloca el cursor dentro del input (focus), el placeholder desaparece para permitir la escritura y viceversa*/
/*correo*/
document.getElementById('correo').addEventListener('focus', function() {
    this.removeAttribute('placeholder');
});
  
document.getElementById('correo').addEventListener('blur', function() {
    this.setAttribute('placeholder', 'Correo');
});

/*contraseña*/
document.getElementById('contrasena').addEventListener('focus', function() {
    this.removeAttribute('placeholder');
});
  
document.getElementById('contrasena').addEventListener('blur', function() {
    this.setAttribute('placeholder', 'Contraseña');
});

/*------------------------registro.html--------------------------------*/
/*nombre*/
document.getElementById('nombre').addEventListener('focus', function() {
    this.removeAttribute('placeholder');
});
  
document.getElementById('nombre').addEventListener('blur', function() {
    this.setAttribute('placeholder', 'Nombre');
});

/*curp*/
document.getElementById('curp').addEventListener('focus', function() {
    this.removeAttribute('placeholder');
});
  
document.getElementById('curp').addEventListener('blur', function() {
    this.setAttribute('placeholder', 'CURP');
});
