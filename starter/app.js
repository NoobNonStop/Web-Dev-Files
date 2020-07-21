/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
function genRandom(min, max) {
    return Math.floor(min + (max-min) * Math.random());
}
function ifOne() {
 
        document.querySelector(".player").innerHTML = "0";
        document.querySelector(".player-0-panel").classList.remove("active");
        document.querySelector(".player-1-panel").classList.remove("active");

}

function roll() {
    var x = genRandom(1, 7);
    var y = document.querySelector("img");
    
    if (x === 1) 
        {
        y.src = "dice-1.png";     
        }
    if (x === 2) 
        {
        y.src = "dice-2.png";
        }
    if (x === 3) 
        {
        y.src = "dice-3.png";
        }
    if (x === 4) 
        {
        y.src = "dice-4.png";}
    if (x === 5) 
        {
        y.src = "dice-5.png";
        }
    if (x === 6) 
        {
        y.src = "dice-6.png";
        }
    return x;

}


function hold() {
    x = document.querySelectorAll(".player-current-score");
    y = document.querySelectorAll(".player-score");
    y[0].innerHTML = (Number(y[0].innerHTML) + Number(x[0].innerHTML)).toString();
    y[1].innerHTML = (Number(y[1].innerHTML) + Number(x[1].innerHTML)).toString();
    x[0].innerHTML = "0";
    x[1].innerHTML = "0";
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");
    if (Number(y[0].innerHTML) >= 100) {
        document.querySelector("#name-0").classList.add("player-name");
        document.querySelector("#name-0").innerHTML = "WINNER!";
        document.querySelector(".player-0-panel").classList.add("winner");
    }
    else if (Number(y[1].innerHTML) >= 100) {
        document.querySelector("#name-1").classList.add("player-name");
        document.querySelector("#name-1").innerHTML = "WINNER!";
        document.querySelector(".player-1-panel").classList.add("winner");
    }
}
hd = document.querySelector(".btn-hold");
hd.addEventListener("click", hold);


rl = document.querySelector(".btn-roll");
rl.addEventListener("click", function() {
    var y = roll();
    firstPlayer = document.querySelectorAll(".player-current-score")[0];
    secondPlayer = document.querySelectorAll(".player-current-score")[1];

    
    

    if (Number(document.querySelector("#score-0").innerHTML) < 100 && Number(document.querySelector("#score-1").innerHTML) < 100) {
        if (y !== 1) {

            if (document.querySelector(".player-0-panel").classList.contains("active")) {
                firstPlayer.innerHTML = (Number(firstPlayer.innerHTML) + y).toString();

            }
            if (document.querySelector(".player-1-panel").classList.contains("active")) {
                secondPlayer.innerHTML = (Number(secondPlayer.innerHTML) + y).toString();

            }
           
        }
    else if (y === 1) {
            if (document.querySelector(".player-0-panel").classList.contains("active")) {
                document.querySelector("#current-0").innerHTML = "0";
            }
            if (document.querySelector(".player-1-panel").classList.contains("active")) {
                document.querySelector("#current-1").innerHTML = "0";
            }
            document.querySelector(".player-0-panel").classList.toggle("active");
            document.querySelector(".player-1-panel").classList.toggle("active");

        } 
    }
    
    
    console.log(y);
    
    
});


ng = document.querySelector(".btn-new");
ng.addEventListener("click", function() {
    document.querySelector("#current-0").innerHTML = "0";
    document.querySelector("#score-0").innerHTML = "0";
    document.querySelector("#current-1").innerHTML = "0";
    document.querySelector("#score-1").innerHTML = "0";
    if (document.querySelector(".player-panel-0").classList.contains("winner")) {
        document.querySelector(".player-panel-0").classList.remove("winner");
        document.querySelector("#name-0").innerHTML = "Player 1";



    }
    else if (document.querySelector(".player-panel-1").classList.contains("winner")) {
        document.querySelector(".player-panel-1").classList.remove("winner");
    
        document.querySelector("#name-1").innerHTML = "Player 2";
    }


} );



