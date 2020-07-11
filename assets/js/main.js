var input = document.getElementById("myInput");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("btn").click();
  }
});

function openWeb() {
    var input = document.getElementById("myInput").value;
    if (input == "2100") {
        window.open("https://www.w3schools.com");
    } else {
        alert("Please enter a valid postcode!");
    }
}
