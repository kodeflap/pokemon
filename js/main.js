const ash_char = document.querySelector(".ash_character");
const ash = document.querySelector(".ash");
const pikachu = document.querySelector(".pikachu");
var counter = 0;
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
    if(pikachuleft < 20 && pikachuleft > -20 && ashTop >= 130)
    {
        pikachu.style.animation = "none";
        alert("\n\nGame Over.Press SpaceBar to restart\n Score: "+Math.floor(counter/100));
        counter = 0;
       // pikachu.style.animation = "move 1s infinite linear"
    }
    else
    {
        counter++;
        document.getElementById("score").innerHTML = Math.floor(counter/100);
    }
},10);