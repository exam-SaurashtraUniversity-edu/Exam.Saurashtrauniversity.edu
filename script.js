function login() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  if (email === "A" && password === "s") {
    window.location.href = "image2.html";
  } else {
    alert("Wrong email or password");
  }
}

function goMenu() {
  window.location.href = "image3.html";
}

function openResult() {
  window.location.href = "image4.html";
}
