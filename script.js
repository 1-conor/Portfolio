const calculateTimeSince = dateString => {
    const startDate = new Date(dateString);
    const today = new Date();
    const differenceInDays = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));
    const differenceInYears = (differenceInDays / 365.25).toFixed(1);
    return differenceInYears;
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('years').textContent = calculateTimeSince("2023-09-18");
});


var modal1 = document.getElementById("modal-1");
var btn1 = document.getElementById("project-1");
var span1 = modal1.getElementsByClassName("close")[0];
btn1.onclick = function() {
  modal1.style.display = "block";
}
span1.onclick = function() {
  modal1.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
}

var modal2 = document.getElementById("modal-2");
var btn2 = document.getElementById("project-2");
var span2 = modal2.getElementsByClassName("close")[0];
btn2.onclick = function() {
  modal2.style.display = "block";
}
span2.onclick = function() {
  modal2.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}

var modal3 = document.getElementById("modal-3");
var btn3 = document.getElementById("project-3");
var span3 = modal3.getElementsByClassName("close")[0];
btn3.onclick = function() {
  modal3.style.display = "block";
}
span3.onclick = function() {
  modal3.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal3) {
    modal3.style.display = "none";
  }
}