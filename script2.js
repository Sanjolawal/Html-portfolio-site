// Contact form page scripts

let name = document.getElementById("Surname").value;
let name1 = document.getElementById("name").value;
let email = document.getElementById("email").value;
let info = document.getElementById("info").value;
let Submit = document.getElementById("submit");
console.log(Submit)

Submit.addEventListener('submit', Sendmail)


function Sendmail() {
  Email.send({
    SecureToken: "219c43ad-dede-4b5e-84fe-a344749ab073",
    To: "sanjolawal600@gmail.com",
    From: "name1",
    Subject: "email",
    Body: "info",
  }).then((message) => alert((message = "message sent succesfully")));
}
