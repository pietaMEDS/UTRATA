document.getElementById('top').innerHTML = "<h1>Helow wolrd :)</h1>";

let pi = document.createElement("p");
document.body.appendChild(pi);
pi.innerText = "Этот текст был создан динамически";



let in_name = document.getElementById("name");
let in_mail = document.getElementById("email");
let sub = document.getElementById("chert");

sub.addEventListener("click", function(data){
    console.log(in_name.value);
    console.log(in_mail.value);
})