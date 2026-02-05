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
  // area1 → image6, area2 → image7, area3 → image8, area4 → image9, area5 → image5
  if (area === 1) window.location.href = "image6.html";
  if (area === 2) window.location.href = "image7.html";
  if (area === 3) window.location.href = "image8.html";
  if (area === 4) window.location.href = "image9.html";
  if (area === 5) window.location.href = "image5.html";
}

function checkDownload(e) {    
  let x = e.clientX / window.innerWidth;    
  let y = e.clientY / window.innerHeight;    

  if (x >= 0.50 && x <= 0.74 && y >= 0.75 && y <= 0.80) {    
    const link = document.createElement("a");    
    link.href = "203_3_2025 - Marksheet.pdf";    
    link.download = "203_3_2025 - Marksheet.pdf";    
    link.click();    
  }    
}
