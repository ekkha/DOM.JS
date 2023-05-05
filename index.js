let initialValue=100;
let highScore=null;
let random = generateRandomNumber(100);

function generateRandomNumber(max){
    return Math.floor(Math.random()*max)+1;
}

document.querySelector("#check").addEventListener("click",check);


function check(){
    let currentNumber = document.getElementById("guessId").value;
    if(initialValue!==0)
    {
      if(currentNumber > random)
        {
           document.querySelector("#message").textContent="Your Guess is to High";
           initialValue--;
           document.querySelector("#chances").textContent=initialValue;
        }
        else if(currentNumber < random)
        {
           document.querySelector("#message").textContent="Your Guess is Low";
           initialValue--;
           document.querySelector("#chances").textContent=initialValue;
        }
        else{
           document.querySelector("#message").textContent="✨🎉Hurray! You Guessed Right🎉✨";
           initialValue--;
           document.querySelector("#chances").textContent=initialValue;

           highScore=initialValue;
           document.querySelector("#highScore").textContent=highScore;

           document.body.style.backgroundColor="green";
           document.querySelector("#check").style.visibility="hidden";
           document.querySelector("#exactNo").textContent=random;
           document.querySelector("#guessId").style.visibility="hidden";
        }
    }
    else{
        document.querySelector("#message").textContent="Game OVer";
    }
}
document.querySelector("#playAgain").addEventListener("click",playAgain);

function playAgain(){
    document.body.style.backgroundColor = "blue";
    document.querySelector("#chances").textContent = "100";
    document.querySelector("#message").textContent = "Start Guessing...";
    document.querySelector("#highScore").textContent = "0";
    document.querySelector("#guessId").style.visibility="visible";
    document.querySelector("#guessId").value="";
    document.querySelector("#exactNo").innerText="?";
    document.querySelector("#check").style.visibility="visible";
}

document.querySelector("#guessId").addEventListener("click", colorChange);

function colorChange(){
    document.body.style.backgroundColor = "rgb(45, 13, 13)";

}
