function toggleMenu(){

const menu = document.getElementById("sidebar")
const overlay = document.getElementById("overlay")

menu.classList.toggle("open")
overlay.classList.toggle("active")

}


// 🌙 MODO CLARO / ESCURO

document.addEventListener("DOMContentLoaded", function(){

const themeButton = document.getElementById("themeToggle")

if(themeButton){

themeButton.addEventListener("click", function(){

document.body.classList.toggle("light")

if(document.body.classList.contains("light")){
themeButton.textContent = "☀️"
}else{
themeButton.textContent = "🌙"
}

})

}

})