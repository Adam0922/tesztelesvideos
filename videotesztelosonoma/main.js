function validate() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    var correctEmail = "fulopbutuska@gmail.com";
    var correctPassword = "jelszo12345";

    if(email == correctEmail && password == correctPassword) {
        window.location.href = 'bent.html';
    } else {
        alert("Rossz e-mail cím vagy jelszó!");
        return false;
    }
}