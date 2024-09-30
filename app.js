let choices = document.querySelectorAll(".choice");
let turn1 = document.querySelector(".turn1");
let turn2 = document.querySelector(".turn2");
let userHand = document.querySelector(".you");
let compHand = document.querySelector(".comp");
let result = document.querySelector(".result");
let options = ["rock","paper","scissor"];

for(let i = 0; i < choices.length; i++){
    choices[i].addEventListener("click", function(e) {

        // To reset the game design everytime a button gets clicked
        result.classList.remove("draw");
        result.classList.remove("win");
        result.classList.remove("lose");
        result.classList.add("d-n");
        userHand.innerText = "✊🏻";
        compHand.innerText = "✊";

        let userChoice = choices[i].getAttribute("id");
        let compIndex = Math.floor(Math.random()*3);
        let compChoice = options[compIndex];

        choices[i].classList.add("playing");
        startShake();

        setTimeout(()=>{
            choices[i].classList.remove("playing");
            stopShake();

            // Here we have used two different ways to change user and comp hands
            // according to user and comp choice. Both are correct. The problem with
            // second way was that we weren't able to get skinned color emojis. 
            if(userChoice==="rock"){
                userHand.innerText = "👊🏻";
            }else if(userChoice==="paper"){
                userHand.innerText = "🖐🏻";
            }else{
                userHand.innerText = "✌🏻";
            }
            compHand.innerText = document.querySelector(`#${compChoice}`).innerText;
            playGame(userChoice,compChoice);
        },3000)
    })
}

function playGame(user,comp){
    result.classList.remove("d-n");
    if(user===comp){
        result.classList.add("draw");
        result.innerText = "DRAW";
    }else if(user==="rock" && comp==="scissor" || 
             user==="paper" && comp==="rock" ||
             user==="scissor" && comp==="paper"){
        result.classList.add("win");
        result.innerText = "YOU WIN";
    }else{
        result.classList.add("lose");
        result.innerText = "YOU LOSE";
    }
}

function startShake(){
    userHand.classList.add("shake");
    compHand.classList.add("shake");
    turn1.classList.add("playing");
    turn2.classList.add("playing");
}
function stopShake(){
    userHand.classList.remove("shake");
    compHand.classList.remove("shake");
    turn1.classList.remove("playing");
    turn2.classList.remove("playing");
}