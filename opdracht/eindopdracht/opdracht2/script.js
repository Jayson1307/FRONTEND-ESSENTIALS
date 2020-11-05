-voornaam
var voornaam = prompt("wat is je voornaam?");
var element = document.getElementById("id01");
element.innerHTML = voornaam;

-achternaam
var achternaam = prompt("wat is je achternaam?");
var element = document.getElementById("id02");
element.innerHTML = achternaam;

-email
var email = prompt("wat is je email?");
var element = document.getElementById("id03");
element.innerHTML = email;

-woonplaats
var woonplaats = prompt("wat is je woonplaats?");
var element = document.getElementById("id04");
element.innerHTML = woonplaats;


-leeftijd
var leeftijd = prompt("wat is je leeftijd?");
if (leeftijd == 16){
    document.body.style.backgroundColor = "orangered";
}
if (leeftijd == 17){
    document.body.style.backgroundColor = "aqua";
}
if (leeftijd == 18){
    document.body.style.backgroundColor = "goldenrod";
}
if (leeftijd == 19){
    document.body.style.backgroundColor = "limegreen";
}
if (leeftijd == 20){
    document.body.style.backgroundColor = "beige";
}
if (leeftijd == null){
    document.body.style.backgroundColor = "darkgrey";
}
var element = document.getElementById("id05");
element.innerHTML = leeftijd;

 
///console
let bezoeker ={
    voornaam: voornaam,
    achternaam: achternaam,
    email: email,
    woonplaats: woonplaats,
    leeftijd: leeftijd
}
console.log(bezoeker);
 
let naam ={
    voornaam, 
    achternaam
}
var element = document.getElementById("id06");
element.innerHTML = voornaam +" " + achternaam;
console.log(naam);