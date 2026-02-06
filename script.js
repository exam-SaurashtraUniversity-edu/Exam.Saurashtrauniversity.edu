function login() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  if (email === "A" && password === "s") {
    window.location.href = "image2.html"; // go to 2nd image (profile)
  } else {
    alert("Wrong email or password");
  }
}

function goMenu() {
  window.location.href = "image3.html"; // go to 3rd image (menu)
}

function openNextImage(current) {
  if (current === 4) window.location.href = "image5.html"; // 4th → 5th
}

function checkDownload(e) {
  let x = e.clientX / window.innerWidth;
  let y = e.clientY / window.innerHeight;

  if (x >= 0.50 && x <= 0.74 && y >= 0.75 && y <= 0.80) {
    const link = document.createElement("a");
    link.href = "203_3_2025 - Marksheet.pdf"; // updated file name
    link.download = "203_3_2025 - Marksheet.pdf"; // updated download name
    link.click();
  }
}
