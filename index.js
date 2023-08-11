function generate(){
    var x = Math.random();
x = Math.floor(x * 6) + 1;
return x;
}
var dice1 = generate();
var dice2 = generate();
var dice = document.querySelectorAll("img");
dice[0].setAttribute("src", "images/dice"+dice1+".png");
dice[1].setAttribute("src", "images/dice"+dice2+".png");
if(dice1 > dice2){
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else{
    if(dice1 < dice2){
        document.querySelector("h1").innerHTML = "Player 2 Wins!";
    }
    else{
        document.querySelector("h1").innerHTML = "It's A Draw!";
    }
}