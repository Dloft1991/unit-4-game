var game = document.querySelector('main');

//random stone value ***
var soul = Math.floor(Math.random() * (12 - 1) +1);
var reality = Math.floor(Math.random() * (12 - 1) +1);
var mind = Math.floor(Math.random() * (12 - 1) +1);
var space = Math.floor(Math.random() * (12 - 1) +1);
var time = Math.floor(Math.random() * (12 - 1) +1);
var power = Math.floor(Math.random() * (12 - 1) +1);

// counter and score ***
//goal should be a randomly picked number
// score will be sum of users imput
var goal = Math.floor(Math.random() * (12 - 1) +1);
var score = [];

// wins and losses ***
// will be ++; depending on if goal is reached or not then reset
var wins = 0;
var losses = 0;

// start of game
const startGame = function(){

    //put in here what you want to reset
}

// click functions
$(".soul").on("click", function() {
    alert("you did it");
    
});