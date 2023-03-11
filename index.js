// Write your code here!

let main = document.getElementById("main");
document.body.removeChild(main);

let newHeader = document.createElement("h1");
document.body.appendChild(newHeader);

newHeader.setAttribute("id", "victory");

newHeader.textContent = "Yassin is the champion";
