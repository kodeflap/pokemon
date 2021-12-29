const ash_char = document.querySelector(".ash_character");
const ash = document.querySelector(".ash");
const pikachu = document.querySelector(".pikachu");

function jump()
{
    if(ash.classList != "animate") {
        ash.classList.add("animate");
        pikachu.style.animation = "move 1s infinite linear";
    }
    setTimeout(function (){
        ash.classList.remove("animate");
    },300);
}
document.addEventListener("keydown",function () {
    jump();
})

let isAlive = setInterval(function (){
    let ashTop = parseInt(window.getComputedStyle(ash).getPropertyValue("top"));
    let pikachuleft = parseInt(window.getComputedStyle(pikachu).getPropertyValue("left"));
    if(pikachuleft < 40 && pikachuleft > 20 && ashTop >= 130)
    {
        pikachu.style.animation = "none";
        alert("Game Over.Press SpaceBar to restart");
    }
},10);