const submit = document.getElementById("submit-btn");
const fullName = document.getElementById("full-name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const message = document.getElementById("message");


function validName() {
  if (!fullName.value) {
    fullName.innerHTML = `<p class="no-alert alert">Debes introducir un nombre</p>`;
    fullName.style.borderColor = "red";
    fullName.style.borderStyle = "solid";
  } else {
    nameError.innerHTML = `<p class="no-alert">Debes introducir un nombre</p>`;
    name.style.borderStyle = "none";
  }
}

fullName.addEventListener("input", () => {
  validName();
});

function validMail() {
  let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!email.value) {
    mailError.innerHTML = `<p class="no-alert alert">Debes introducir un e-mail</p>`;
    email.style.borderColor = "red";
    email.style.borderStyle = "solid";
  } else {
    if (regex.test(email.value)) {
      mailError.innerHTML = `<p class="no-alert">Debes introducir un e-mail</p>`;
      email.style.borderStyle = "none";
    } else {
      mailError.innerHTML = `<p class="no-alert alert">Debes introducir un e-mail válido</p>`;
      email.style.borderColor = "red";
      email.style.borderStyle = "solid";
    }
  }
}

email.addEventListener("input", () => {
  validMail();
});

function validPhone() {
  if (!phone.value) {
    phoneError.innerHTML = `<p class="no-alert alert">Debes introducir tu nº de teléfono</p>`;
    phone.style.borderColor = "red";
    phone.style.borderStyle = "solid";
  } else {
    phoneError.innerHTML = `<p class="no-alert">Debes introducir tu nº de teléfono</p>`;
    phone.style.borderStyle = "none";
  }
}

phone.addEventListener("input", () => {
  validPhone();
});

function validMsg() {
  if (!message.value) {
    messageError.innerHTML = `<p class="no-alert alert">El mensaje debe tener al menos 5 caracteres</p>`;
    message.style.borderColor = "red";
    message.style.borderStyle = "solid";
  } else {
    if (message.value.length > 4) {
      messageError.innerHTML = `<p class="no-alert">El mensaje debe tener al menos 5 caracteres</p>`;
      message.style.borderStyle = "none";
    } else {
      messageError.innerHTML = `<p class="no-alert alert">El mensaje debe tener al menos 5 caracteres</p>`;
      message.style.borderColor = "red";
      message.style.borderStyle = "solid";
    }
  }
}

message.addEventListener("input", () => {
  validMsg();
});

submit.addEventListener("click", (click) => {
  click.preventDefault();
  validName();
  validMail();
  validPhone();
  validMsg();
  console.log(`
  Client's name: ${fullName.value}
  Client's email: ${email.value}
  Client's phone: ${phone.value}
  Client's message: ${message.value}`);
});

//1º Al hacer click en el botón se ejecuta una función
//2º Dicha función previene el comportamiento por defecto del form
//3º La función lanza los console.log


// Añadir entre los pasos 2 y 3 la confirmación del formulario.
