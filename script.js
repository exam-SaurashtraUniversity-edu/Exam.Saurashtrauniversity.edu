/* LOGIN FUNCTION */
function login() {

  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  if (email === "A" && password === "s") {
    window.location.href = "image2.html";
  }
  else {
    alert("Wrong email or password");
  }
}


/* PROFILE → MENU */
function goMenu() {
  window.location.href = "image3.html";
}


/* IMAGE4 RESULT TABS → OPEN PAGES */
function openNextImage(area) {

  if (area === 1) {
    window.location.href = "image6.html";
  }

  else if (area === 2) {
    window.location.href = "image7.html";
  }

  else if (area === 3) {
    window.location.href = "image8.html";
  }

  else if (area === 4) {
    window.location.href = "image9.html";
  }

  else if (area === 5) {
    window.location.href = "image5.html";
  }

}


/* IMAGE5 → PDF DOWNLOAD AREA */
function checkDownload(event) {

  let x = event.clientX / window.innerWidth;
  let y = event.clientY / window.innerHeight;

  /* Bottom Center Download Area */
  if (x >= 0.40 && x <= 0.70 && y >= 0.75 && y <= 0.82) {

    const link = document.createElement("a");

    link.href = "203_3_2025 - Marksheet.pdf";

    link.download = "203_3_2025 - Marksheet.pdf";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

}
