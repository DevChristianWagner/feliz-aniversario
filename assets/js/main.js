const h1 = document.querySelector("h1");
let dayNow = document.querySelector(".dayNow");
let minutes = document.querySelector("h3");

let date = new Date();
let day = String(date.getDate());
let mounth = String(date.getMonth());
let year = String(date.getFullYear());
let minutesNow = String(date.getMinutes());

let completeDate = day + " / " + mounth + " / " + year;

if (day === "5") {
  h1.innerHTML = "Feliz aniversário!";
} else {
  h1.innerHTML = "CARMA MEU FI, AINDA NÃO É SEU ANIVERSÁRIO";
}

function dateNow() {
  dayNow.innerHTML = completeDate;
}

dateNow();
