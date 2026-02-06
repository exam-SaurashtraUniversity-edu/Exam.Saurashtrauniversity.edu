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

function openNextImage(area) {
  switch(area) {
    case 1: window.location.href = "image6.html"; break;
    case 2: window.location.href = "image7.html"; break;
    case 3: window.location.href = "image8.html"; break;
    case 4: window.location.href = "image9.html"; break;
    case 5: window.location.href = "image5.html"; break;
  }
}

/* PDF Download Function */
function downloadPDF() {
  const link = document.createElement("a");
  link.href = "203_3_2025 - Marksheet.pdf";
  link.download = "203_3_2025 - Marksheet.pdf";
  link.click();
}
