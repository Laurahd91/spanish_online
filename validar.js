// Creamos la función validar para el formulario de contacto
function validar() {
  // Creamos la variable formulario
  const $form = document.querySelector("#form");

  // Obtenemos los valores dados en el formulario y los guardamos en variables
  let nombre = document.getElementById("nombre").value;
  let apellidos = document.getElementById("apellidos").value;
  let email = document.getElementById("email").value;
  let telefono = document.getElementById("telefono").value;
  let mensaje = document.getElementById("textarea").value;

  // Guardamos en una varible el patrón que debe seguier el correo electrónico
  let correo = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/;

  // Guardamos en una varible el patrón para comprobar si solo se introducen letras
  const pattern = new RegExp(/^[a-zA-Z\u00C0-\u017F\s]+$/);

  // Comprobamos si se han rellenado todos los campos del formulario
  if (
    nombre.length == 0 ||
    apellidos.length == 0 ||
    email.length == 0 ||
    telefono.length == 0 ||
    mensaje.length == 0
  ) {
    alert("No puede dejar ningún campo vacío");
    $form.reset();
  } else {
    //Comprobamos si el nombre dado contiene números
    if (!pattern.test(nombre)) {
      alert("El nombre no puede contener números");
      $form.reset();

      //Comprobamos si los apellidos dados contienen números
    } else if (!pattern.test(apellidos)) {
      alert("Los apellidos no pueden contener números");
      $form.reset();

      //Comprobamos si el teléfono dado contiene letras
    } else if (pattern.test(telefono)) {
      alert("El número de teléfono no puede contener letras");
      $form.reset();

      //Comprobamos si el email dado sigue el patrón guardado en la variable correo
    } else if (correo.test(email)) {
      alert("La dirección de correo introducida es incorrecta");
      $form.reset();

      //Comprobamos si el número de teléfono dado contiene 9 dígitos
    } else if (telefono.length < 9 || telefono.length > 9) {
      alert("El número de teléfono debe contener 9 dígitos");
      $form.reset();
    } else {
      //Si el formulario se rellena de manera correcta, se llamará a la función mailSend
      mailSend();
    }
  }
}

//Creamos la función que permitirá mandar un correo electrónico con cada dato introducido
function mailSend() {
  //Creamos la variable formulario
  let $form = document.querySelector("#form");

  //Creamos la variable botón
  const $buttonMailto = document.querySelector("#mail");

  //Añadimos un EventListener al formulario para llamar a la función handleSubmit
  $form.addEventListener("submit", handleSubmit);

  //Creamos la función que permitirá mandar un correo electrónico con cada dato introducido
  function handleSubmit(event) {
    //Eliminamos el evento por defecto del formulario
    event.preventDefault();

    //Usamos el objeto FormData
    const form = new FormData(this);

    //Obtenemos los Atributos del formulario
    $buttonMailto.setAttribute(
      "href",
      `mailto:spanishonline91@gmail.com?subject= Nombre: ${form.get(
        "nombre"
      )}, Apellidos: ${form.get("apellido")}, Teléfono de contacto: ${form.get(
        "telefono"
      )}&body=${form.get("mensaje")}`
    );

    //Accionamos el botón
    $buttonMailto.click();

    //Reiniciamos el formulario
    $form.reset();
  }
}

//Creamos la función que validará el formulario de compra
function comprar() {
  //Creamos la variable formulario
  const $form = document.getElementById("formulario");

  //Creamos las variables donde guardaremos cada uno de los valores, recogidos del formulario
  let nombre = document.getElementById("nombre").value;
  let apellidos = document.getElementById("apellidos").value;
  let direccion = document.getElementById("direccion").value;
  let cpostal = document.getElementById("cpostal").value;
  let localidad = document.getElementById("localidad").value;

   // Guardamos en una varible el patrón para comprobar si solo se introducen letras
   const pattern = new RegExp(/^[a-zA-Z\u00C0-\u017F\s]+$/);

  // Comprobamos si se han rellenado todos los campos del formulario
  if (
    nombre.length == 0 ||
    apellidos.length == 0 ||
    direccion.length == 0 ||
    cpostal.length == 0 ||
    localidad.length == 0
  ) {
    alert("No puede dejar ningún campo vacío");
    $form.reset();
    exit();
  } else {
    //Comprobamos si el nombre dado contiene números
    if (!pattern.test(nombre)) {
      alert("El nombre no puede contener números");
      $form.reset();

      //Comprobamos si los apellidos dados contienen números
    } else if (!pattern.test(apellidos)) {
      alert("Los apellidos no pueden contener números");
      $form.reset();

      //Comprobamos si el código postal contiene letras
    } else if (pattern.test(cpostal)) {
      alert("El código postal no puede contener letras");
      $form.reset();

      //Comprobamos si la localidad tiene números
    } else if (!pattern.test(localidad)) {
      alert("La localidad no puede contener números");
      $form.reset();

      //Comprobamos si el código postal tiene menos de 5 dígitos
    } else if (cpostal.length < 5) {
      alert("El código postal debe contener 5 dígitos");
      $form.reset();

      //Comprobamos si hay algún checkbox seleccionado
    } else if (
      document.getElementById("cbox1").checked ||
      document.getElementById("cbox2").checked ||
      document.getElementById("cbox3").checked ||
      document.getElementById("cbox4").checked
    ) {
      //Creamo las variables a utilizar
      let individual = 0;
      let grupal = 0;
      let empresa = 0;
      let escuela = 0;

      let producto1 = "";
      let producto2 = "";
      let producto3 = "";
      let producto4 = "";

      //Damos valor a las variables según el checkbox seleccionado
      if (document.getElementById("cbox1").checked) {
        individual = 8;
        producto1 = "Clases individuales  ";
      }

      if (document.getElementById("cbox2").checked) {
        grupal = 10;
        producto2 = "Clases grupales  ";
      }

      if (document.getElementById("cbox3").checked) {
        empresa = 12;
        producto3 = "Clases para empresas  ";
      }

      if (document.getElementById("cbox4").checked) {
        escuela = 13;
        producto4 = "Clases para escuelas  ";
      }

      //Guardamos los resultados en nuevas variables
      let resultado = individual + grupal + empresa + escuela;
      let producto_final = producto1 + producto2 + producto3 + producto4;

      //Guardamos el resultado en un DOMString
      document.getElementById("resultado").innerHTML =
        "D/Dña. " +
        nombre +
        " " +
        apellidos +
        ", le comunicamos que su compra (" +
        producto_final +
        "), por importe de " +
        resultado +
        "€" +
        ", se ha relizado correctamente.";

      $form.reset();
    } else {
      alert("Debe seleccionar alguno de nuestros servicios");
    }
  }
}

// Damos funcionalidad a la tecla Intro del teclado
function handle(event) {
  if (event.keyCode === 13) {
    // eliminamos el evento por defecto
    event.preventDefault();
    // Hacemos que se ejecute el botón
    document.getElementById("aceptar").click();
    // Reiniciamos el formulario
    form.reset();
  }
}
