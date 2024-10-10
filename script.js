const buttonLogin = document.getElementById("buttonLogin");
const formLogin = document.getElementById("loginForm");

formLogin.addEventListener("submit", (event) => {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
    })
    .then((res)=>{
        if(res.ok){
            return res.json();
        }
        else{
            throw new Error("Something went wrong");
        }
    })
    .then((data)=>{
        alert("loggin Success")
        window.location.href = "materi.html";
    })
    .catch((error)=>{
        console.log(error);
    })
})