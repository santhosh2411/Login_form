function myFunction() {

    if (document.getElementById("username").value.length > 0 && document.getElementById("password").value.length > 0) {
        document.getElementById("submit").disabled = false;
    } else {
        document.getElementById("submit").disabled = true;
    }

}

function pop() {
    document.getElementById("submit").disabled = true;
}
pop()

function validate() {

    const userName = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (userName == "admin" && password == "admin") {

    } else {
        alert("Provide Valid Details");

    }
}

// function popUp() {
//     console.log(document.getElementById("username").value)
//     console.log(document.getElementById("password").value)
//     alert("Login Sucess");
// }