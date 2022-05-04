const h2 = document.createElement("h2");
h2.textContent = "This content added by JavaScript";
document.querySelector("body").appendChild(h2);

const h3 = document.createElement("h3");

function addEventListener() {
    document.getElementById("h3");
    h3.addEventListener('click', function() {
    alert('I was clicked!')
    document.querySelectorAll("body").appendChild(h3);
   });    
}
