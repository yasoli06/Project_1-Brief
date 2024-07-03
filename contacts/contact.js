document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const fullName = document.getElementById("name");
  const email = document.getElementById("email");
  const phone = document.getElementById("phone");
  const message = document.getElementById("message");

  const nameError = document.getElementById("name-error");
  const mailError = document.getElementById("mail-error");
  const phoneError = document.getElementById("phone-error");
  const messageError = document.getElementById("message-error");

  function validateName() {
    if (!fullName.value) {
      nameError.innerText = "Debes introducir un nombre";
      fullName.style.borderColor = "red";
    } else {
      nameError.innerText = "";
      fullName.style.borderColor = "";
    }
  }

  function validateMail() {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email.value) {
      mailError.innerText = "Debes introducir un e-mail";
      email.style.borderColor = "red";
    } else if (!regex.test(email.value)) {
      mailError.innerText = "Debes introducir un e-mail válido";
      email.style.borderColor = "red";
    } else {
      mailError.innerText = "";
      email.style.borderColor = "";
    }
  }

  function validatePhone() {
    if (!phone.value) {
      phoneError.innerText = "Debes introducir tu nº de teléfono";
      phone.style.borderColor = "red";
    } else {
      phoneError.innerText = "";
      phone.style.borderColor = "";
    }
  }

  function validateMsg() {
    if (message.value.length < 5) {
      messageError.innerText = "El mensaje debe tener al menos 5 caracteres";
      message.style.borderColor = "red";
    } else {
      messageError.innerText = "";
      message.style.borderColor = "";
    }
  }

  fullName.addEventListener("input", validateName);
  email.addEventListener("input", validateMail);
  phone.addEventListener("input", validatePhone);
  message.addEventListener("input", validateMsg);

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    validateName();
    validateMail();
    validatePhone();
    validateMsg();

    if (
      !nameError.innerText &&
      !mailError.innerText &&
      !phoneError.innerText &&
      !messageError.innerText
    ) {
      console.log(`
      Client's name: ${fullName.value}
      Client's email: ${email.value}
      Client's phone: ${phone.value}
      Client's message: ${message.value}`);
    }
  });
});



//1º Al hacer click en el botón se ejecuta una función
//2º Dicha función previene el comportamiento por defecto del form
//3º La función lanza los console.log


// Añadir entre los pasos 2 y 3 la confirmación del formulario.
