function login() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  if (email === "A" && password === "s") {
    window.location.href = "./image2.html";
  } else {
    alert("Wrong email or password");
  }
}

function goMenu() {
  window.location.href = "./image3.html";
}

function openNextImage(area) {
  let page = "";

  if (area === 1) page = "image6.html";
  if (area === 2) page = "image7.html";
  if (area === 3) page = "image8.html";
  if (area === 4) page = "image9.html";
  if (area === 5) page = "image5.html";

  window.location.href = "./" + page;
}

function checkDownload(e) {
  let x = e.clientX / window.innerWidth;
  let y = e.clientY / window.innerHeight;

  if (x >= 0.50 && x <= 0.74 && y >= 0.75 && y <= 0.80) {
    const link = document.createElement("a");
    link.href = "./203_3_2025 - Marksheet.pdf";
    link.download = "203_3_2025 - Marksheet.pdf";
    link.click();
  }
}
