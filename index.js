
function login(){
    var user, password

    user = document.getElementById("user")
    password = document.getElementById("password")

    
    if (user == "ADMIN" && password == "COLOMBIA"){
        alert("BIENVENIDO...")
        window.location = "home.html"
        console.log("Inicio de sesión validado...");
    } else {
        alert("INICIO DE SESION INVALIDO...")
        console.log("Inicio de sesión incorrcto...")
    }
    
}