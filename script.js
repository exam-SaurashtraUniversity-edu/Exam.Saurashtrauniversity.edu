/* LOGIN FUNCTION */
function login() {

  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  if (email === "A" && password === "s") {
    window.location.href = "image2.html"; // Profile page
  }
  else {
    alert("Wrong email or password");
  }
}


/* IMAGE2 → MENU */
function goMenu() {
  window.location.href = "image3.html"; // Menu page
}


/* IMAGE4 → OPEN NEXT IMAGE */
function openNextImage(area) {

  switch(area) {

    case 1:
      window.location.href = "image6.html";
      break;

    case 2:
      window.location.href = "image7.html";
      break;

    case 3:
      window.location.href = "image8.html";
      break;

    case 4:
      window.location.href = "image9.html";
      break;

    case 5:
      window.location.href = "image5.html"; // PDF page
      break;
  }
}


/* IMAGE5 → PDF DOWNLOAD ON SPECIFIC AREA */
function checkDownload(e) {

  let x = e.clientX / window.innerWidth;
  let y = e.clientY / window.innerHeight;

  /* Bottom-middle clickable area */
  if (x >= 0.50 && x <= 0.74 && y >= 0.75 && y <= 0.80) {

    const link = document.createElement("a");

    link.href = "203_3_2025 - Marksheet.pdf";
    link.download = "203_3_2025 - Marksheet.pdf";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
