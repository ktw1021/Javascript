
alert("welcome!");
let choice = confirm("Ready to go?");
let name = "";
if (choice == true) {
    name = prompt("What is your name");
}
if (name) {
    alert(`Hi! ${name}!`);
}