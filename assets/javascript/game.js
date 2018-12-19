var game = document.querySelector('main');

//array of numbers for goal
const goals = ["535", "240", "925", "765", "490", "815", "1" ]
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
var goal = 50;
var score = 0;

// wins and losses ***
// will be ++; depending on if goal is reached or not then reset
var wins = 1;
var losses = 1;

// start of game
const startGame = function(){
    $(".soul").on("click", soul);
    $(".reality").on("click", reality);
    $(".mind").on("click", mind);
    $(".space").on("click", space);
    $(".time").on("click", time);
    $(".power").on("click", power);
    //put in here what you want to reset
};


// restart function
const restart = function() {
    var score = 0;
}
restart();


// for loop
const goalOptions = [10, 5, 3, 7, 20, 12]

for (var i = 0; i < goalOptions.length; i++) {

}



// on click event
$("#goal").text(goal);

$(".soul").on("click", function() {
    
    score += 10;
    // alert("Your new score is " + score);
    $("#counter").text(score);
    
    console.log("you clicked soul stone");
    
    if (score === goal) {
        alert("You Win!");
        $("#wins").text(wins ++);
        
    }
    else if (score > goal) {
        $("#losses").text(losses ++);
        alert("Thanos has found the Soul Stone!");
        console.log("Thanos has found the Soul Stone!");
        restart();
    }
    
});


$(".reality").on("click", function() {
    score += 10;

    $("#counter").text(score);

    console.log("you clicked reality stone");

    if (score === goal) {
        alert("You Win!");
        $("#wins").text(wins ++);
        
    }
    else if (score > goal) {
        $("#losses").text(losses ++);
        alert("Thanos has found the Soul Stone!");
        console.log("Thanos has found the Soul Stone!");
    }
    
});


$(".mind").on("click", function() {
    score += 10;

    $("#counter").text(score);

    alert("you clicked mind stone");
    console.log("you clicked mind stone");

    if (score === goal) {
        alert("You Win!");
        $("#wins").text(wins ++);
        
    }
    else if (score > goal) {
        $("#losses").text(losses ++);
        alert("Thanos has found the Soul Stone!");
        console.log("Thanos has found the Soul Stone!");
    }

    
});


$(".space").on("click", function() {
    score += 10;

    $("#counter").text(score);

    alert("you clicked space stone");
    console.log("you clicked space stone");

    if (score === goal) {
        alert("You Win!");
        $("#wins").text(wins ++);
        
    }
    else if (score > goal) {
        $("#losses").text(losses ++);
        alert("Thanos has found the Soul Stone!");
        console.log("Thanos has found the Soul Stone!");
    }
    
});


$(".time").on("click", function() {
    score += 10;

    $("#counter").text(score);

    alert("you clicked time stone");
    console.log("you clicked time stone!");

    if (score === goal) {
        alert("You Win!");
        $("#wins").text(wins ++);
        
    }
    else if (score > goal) {
        $("#losses").text(losses ++);
        alert("Thanos has found the Soul Stone!");
        console.log("Thanos has found the Soul Stone!");
    }
    
});

$(".power").on("click", function() {
    score += 10;

    $("#counter").text(score);

    alert("you clicked power stone");
    console.log("you clicked power stone");

    if (score === goal) {
        alert("You Win!");
        $("#wins").text(wins ++);
        
    }
    else if (score > goal) {
        $("#losses").text(losses ++);
        alert("Thanos has found the Soul Stone!");
        console.log("Thanos has found the Soul Stone!");
    }
    
});



// IF statements 

