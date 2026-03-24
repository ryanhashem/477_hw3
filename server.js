function checkFields() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  if (!email.includes("@") || password.length < 8) {
    alert("password must contain 8 or more characters, email must contain @.");
    return;
  }

  document.getElementById("output").innerText = "logged in as " + email;
}
