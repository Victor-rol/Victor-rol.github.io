// Espera a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function(){
  const form = document.getElementById("subscribeForm");

  form.addEventListener("submit", function(e){
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm_password").value;

    if(password !== confirmPassword){
      e.preventDefault();
      alert("Las contraseñas no coinciden. Por favor, verifica e intenta nuevamente.");
    }
  });
});
