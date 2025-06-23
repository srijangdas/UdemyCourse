var gameStarted = false;
var canPlay = false;

var currClick = 0;

const boxClasses = new Map([
    [0,"green"],
    [1,"red"],
    [2,"yellow"],
    [3,"blue"]
]);

var gameValues = [];

$(document).on('keydown', function(){
    $('body').removeClass("game-over");
    if(!gameStarted){
        gameStart();
    }
});

function gameStart(){
    gameStarted = true;
    addLevel();
}

function addLevel(){
    var cubeSel = Math.floor(Math.random() * 4);
    $('#level-title').text("Level: " + (gameValues.length+1));
    gameValues.push(boxClasses.get(cubeSel));
    lightBox();
}

function lightBox(){
    var currCube = gameValues[gameValues.length-1];
    $("." + currCube).animate({opacity:"50%"}, 150);
    $("." + currCube).animate({opacity:"100%"}, 150);
    canPlay = true;
}

$('.btn').on("click", function(e){
    if(canPlay)
        onClick(e);
});

function onClick(e){
    var btnName = e.currentTarget.className;
    var indiClass = btnName.split(/\s+/);
    var currBtn = indiClass[1];
    $("." + currBtn).addClass('pressed');

    setTimeout(function() {
            $("." + currBtn).removeClass('pressed');
            
        }, 30);
    setTimeout(function(){
        if(currBtn == gameValues[currClick]){
        currClick++;
        if(gameValues.length<=currClick){
            currClick=0;
            canPlay = false;
            addLevel();
        }
    }else{
        gameOver();
    }
    },100);
    
   
}

function gameOver(){
    $('body').addClass("game-over");
    $('#level-title').text("Game Over, try again by pressing random key");
    gameValues.splice(0);
    console.log(gameValues.length);
    canPlay = false;
    gameStarted = false;
    currClick = 0;
}