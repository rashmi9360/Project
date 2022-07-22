function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username == "RASHMI" && password == "RASHMI") {
        alert("Login Succesfully");
        alert(window.location = "http://127.0.0.1:5500/diary.html");

    } else {
        alert("Login Failed");
    }


}