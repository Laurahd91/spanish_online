
Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Su clase de prueba ha sido reservada correctamente.',
    showConfirmButton: true,
    confirmButtonColor: " #000000", 
    type: "success"}).then(okay => {
     if (okay) {
      window.location.href = "index.html","_self";
    }
  });	
