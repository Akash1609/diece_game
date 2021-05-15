var num1 = Math.floor(Math.random()*6);
var num2 = Math.floor(Math.random()*6);
var r_image = ["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"];
document.querySelector(".img1").setAttribute("src",r_image[num1]);
document.querySelector(".img2").setAttribute("src",r_image[num2]);
if(num1>num2)
document.querySelector(".container h1").innerHTML="Player 1 Win";
else if(num1<num2)
document.querySelector(".container h1").innerHTML="Player 2 Win";
else
document.querySelector(".container h1").innerHTML="Match draw";



