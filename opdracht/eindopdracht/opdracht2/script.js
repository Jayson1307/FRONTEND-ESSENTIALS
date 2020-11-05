
//voornaam
var voornaam = prompt("wat is je voornaam?");
var element = document.getElementById("id01");
element.innerHTML = voornaam;

//achternaam
var achternaam = prompt("wat is je achternaam?");
var element = document.getElementById("id02");
element.innerHTML = achternaam;

//email
var email = prompt("wat is je email?");
var element = document.getElementById("id03");
element.innerHTML = email;

//woonplaats
var woonplaats = prompt("wat is je woonplaats?");
var element = document.getElementById("id04");
element.innerHTML = woonplaats;

//leeftijd
var leeftijd = prompt("wat is je leeftijd?");
if (leeftijd == 16){
    document.body.style.backgroundColor = "green";
}

