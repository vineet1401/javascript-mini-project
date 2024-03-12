var player1 = ["images\\dice1.png", "images\\dice2.png", "images\\dice3.png", "images\\dice5.png", "images\\dice5.png", "images\\dice6.png"];
var player2 = ["images\\dice1.png", "images\\dice2.png", "images\\dice3.png", "images\\dice5.png", "images\\dice5.png", "images\\dice6.png"];

var p1Dice = Math.floor(Math.random() * 6);
var p2Dice = Math.floor(Math.random() * 6);

// alert(p1Dice);
// alert(p2Dice);



document.querySelectorAll("img")[0].setAttribute("src" , player1[p1Dice]);
document.querySelectorAll("img")[1].setAttribute("src" , player2[p2Dice]);

if(p1Dice > p2Dice){
    document.querySelector("h1").textContent = "Winner is Player 1";
}
else if(p1Dice < p2Dice){
    document.querySelector("h1").textContent = "Winner is Player 2";
}
else if(p1Dice == p2Dice){
    document.querySelector("h1").textContent = "The Game is Tied";
}