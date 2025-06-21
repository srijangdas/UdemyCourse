num1 = (getRandomInt(6)) + 1;
num2 = (getRandomInt(6)) + 1;

path1 = num1;
path2 = num2;

headC = document.querySelector("h1");
document.querySelector(".img1").setAttribute("src", `./images/dice${num1}.png`);
document.querySelector(".img2").setAttribute("src", `./images/dice${num2}.png`);

if(num1>num2){
    headC.innerHTML = "Player 1 won";
}else if(num2>num1){
    headC.innerHTML = "Player 2 won";
}else{
    headC.innerHTML = "Tie, Try Again";
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}