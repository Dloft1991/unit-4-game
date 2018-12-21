var game = document.querySelector('main');

//array of numbers for goal
// const goals = ["535", "240", "925", "765", "490", "815", "1" ]

//random stone value ***
var stones = {
    soul: {
        name: "soul",
        value: 0
    },
    reality: {
        name: "reality",
        value: 0
    },
    mind: {
        name: "mind",
        value: 0
    },
    space: {
        name: "space",
        value: 0
    },
    time: {
        name: "time",
        value: 0
    },
    power: {
        name: "power",
        value: 0
    }
     
};


// counter and score ***
//goal should be a randomly picked number
// score will be sum of users imput
var goal = 0;
var score = 0;
var his = 1;
var mine = 1;
// wins and losses ***
// will be ++; depending on if goal is reached or not then reset
var wins = 1;
var losses = 1;


// randomizer 
var randomizer = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//game start
var gameStart = function() {
    score = 0;
    // numbers for the stones, values between 1 and 15
    goal = randomizer(21, 170);

    // stones values each game
     stones.soul.value = randomizer(1, 15);
     stones.reality.value = randomizer(1, 15);
     stones.mind.value = randomizer(1, 15);
     stones.space.value = randomizer(1, 15);
     stones.time.value = randomizer(1, 15);
     stones.power.value = randomizer(1, 15);

    //write this in the HTML 
    $("#goal").text(goal);
    $("#counter").text(score);
   
    //does this work?
    console.log("goal: " + goal);
    console.log("soul: " + stones.soul.value);
}


//============================== redo

var addValues = function(stones) {
    score = score + stones.value;

    $("#counter").text(score);

    chickenDinner();

}

let chickenDinner = function(){

    //conditions for win/ loss
    if (score === goal) {
                // alert("You Win!");
                $("#wins").text(wins ++);
                console.log(wins);
                $("#mine").text(mine ++);
                $("#alert").text("The Avengers found another stone!")

                gameStart();
            }
            else if (score >= goal) {
                $("#losses").text(losses ++);
                $("#his").text(his ++);
                $("#alert").text("Thanos found another stone!")
                // alert("Thanos has found the Soul Stone!");
                console.log("Thanos has found the Soul Stone!");
                console.log(losses);
                gameStart();
            }
           
            
}

gameStart();


$(".soul").on("click", function() {
    addValues(stones.soul);
});

$(".reality").on("click", function() {
    addValues(stones.reality);
});

$(".mind").on("click", function() {
    addValues(stones.mind);
});

$(".space").on("click", function() {
    addValues(stones.space);
});

$(".time").on("click", function() {
    addValues(stones.time);
});

$(".power").on("click", function() {
    addValues(stones.power);
});





//============================== what I did before
// // on click event
// $("#goal").text(goal);

// $(".soul").on("click", function() {
    
//     score += 10;
//     // alert("Your new score is " + score);
//     $("#counter").text(score);
    
//     console.log("you clicked soul stone");
    
//     if (score === goal) {
//         alert("You Win!");
//         $("#wins").text(wins ++);
        
//     }
//     else if (score > goal) {
//         $("#losses").text(losses ++);
//         alert("Thanos has found the Soul Stone!");
//         console.log("Thanos has found the Soul Stone!");
//         restart();
//     }
    
// });


// $(".reality").on("click", function() {
//     score += 10;

//     $("#counter").text(score);

//     console.log("you clicked reality stone");

//     if (score === goal) {
//         alert("You Win!");
//         $("#wins").text(wins ++);
        
//     }
//     else if (score > goal) {
//         $("#losses").text(losses ++);
//         alert("Thanos has found the Reality Stone!");
//         console.log("Thanos has found the Reality Stone!");
//     }
    
    
// });


// $(".mind").on("click", function() {
//     score += 10;

//     $("#counter").text(score);

    
//     console.log("you clicked mind stone");

//     if (score === goal) {
//         alert("You Win!");
//         $("#wins").text(wins ++);
        
//     }
//     else if (score > goal) {
//         $("#losses").text(losses ++);
//         alert("Thanos has found the Mind Stone!");
//         console.log("Thanos has found the Mind Stone!");
//     }

    
// });


// $(".space").on("click", function() {
//     score += 10;

//     $("#counter").text(score);

    
//     console.log("you clicked space stone");

//     if (score === goal) {
//         alert("You Win!");
//         $("#wins").text(wins ++);
        
//     }
//     else if (score > goal) {
//         $("#losses").text(losses ++);
//         alert("Thanos has found the Space Stone!");
//         console.log("Thanos has found the Space Stone!");
//     }
    
// });


// $(".time").on("click", function() {
//     score += 10;

//     $("#counter").text(score);

    
//     console.log("you clicked time stone!");

//     if (score === goal) {
//         alert("You Win!");
//         $("#wins").text(wins ++);
        
//     }
//     else if (score > goal) {
//         $("#losses").text(losses ++);
//         alert("Thanos has found the Time Stone!");
//         console.log("Thanos has found the Time Stone!");
//     }
    
// });

// $(".power").on("click", function() {
//     score += 10;

//     $("#counter").text(score);

    
//     console.log("you clicked power stone");

//     if (score === goal) {
//         alert("You Win!");
//         $("#wins").text(wins ++);
        
//     }
//     else if (score > goal) {
//         $("#losses").text(losses ++);
//         alert("Thanos has found the Power Stone!");
//         console.log("Thanos has found the Power Stone!");
//     }
    
// });