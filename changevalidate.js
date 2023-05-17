var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
function emailV() {
  var email = document.getElementById("email").value;
  var name = document.getElementById("name").value;
  var phone = document.getElementById("phone").value;
  var gender = document.querySelector('input[name="gender"]:checked');
  var subject = document.getElementById("subject").value;
  var message = document.getElementById("message").value;
  var city = document.getElementById("inputState").value;

  if (email.value.match(mailformat)) {
    if (email.classList.contains("is-invalid")) {
      email.classList.remove("is-invalid");
    }
    email.classList.add("is-valid");
  } else {
    if (email.classList.contains("is-valid")) {
      email.classList.remove("is-valid");
    }
    email.classList.add("is-invalid");
  }
}
/*
function sifreV() {
  if (
    Number.isInteger(parseInt(Number(document.myForm.sifre.value))) == true &&
    document.myForm.sifre.value != ""
  ) {
    if (document.myForm.sifre.classList.contains("is-invalid")) {
      document.myForm.sifre.classList.remove("is-invalid");
    }
    document.myForm.sifre.classList.add("is-valid");
  } else {
    if (document.myForm.sifre.classList.contains("is-valid")) {
      document.myForm.sifre.classList.remove("is-valid");
    }
    document.myForm.sifre.classList.add("is-invalid");
  }
  */
