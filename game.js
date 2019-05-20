var canvasHeight = 400;
var canvasWidth = 400;

var ballRatio = 10.0;
var ballXpos = 100;
var ballYpos = 250;

var ballXspeed= 4; 
var ballYspeed = 4;

var balkWidth = 150;
var balkHeight = 20; 
var balkYpos = canvasHeight - 30; 

var bricksPerRow = 5;
var rows = 5;
var brickHeight = 40;
var brickWidth = canvasWidth / bricksPerRow ;

var bricks = [
    []
];

function setup() {
    createCanvas(400, 400);
}

var bounceBall = function() {
    noStroke();
    fill(251, 255, 0);
    ellipse(ballXpos, ballYpos, ballRatio * 2,ballRatio * 2);

    if ((ballXpos + ballRatio >= canvasWidth) || (ballXpos -ballRatio <= 0)) {
        ballXspeed = ballXspeed * -1;
    }

        if (ballYpos -ballRatio <= 0) {
            ballYspeed = ballYspeed * -1;
        }

            if (ballYpos - ballRatio >= 400){
                bounceBall = reset
            }
};

var hitBalk = function() {
    noStroke();
    fill(12, 242, 234);
    rect(mouseX -50, balkYpos, balkWidth, balkHeight);
    
        if ((ballYpos + ballRatio >= balkYpos) && (ballXpos + ballRatio > mouseX - balkWidth / 2)&&(ballXpos - ballRatio < mouseX + balkWidth / 2) ) {

            ballYspeed = ballYspeed * -1;
        }
};

var hitBricks = function () {

    stroke(0, 0, 0);



    for (var j = 0; j < rows; j++) {

        for (var i = 0; i < bricksPerRow; i++) {
            if (bricks[j][i] == true) {
                if ((ballYpos - ballRatio < brickHeight * j) &&
                    (ballXpos - ballRatio >= brickWidth * i) &&
                    (ballXpos + ballRatio <= brickWidth * (i + 1))) {
                    bricks[j][i] = false;
                    ballYspeed = ballYspeed * -1;

                } else {

                    fill(10 * (i + j), 255 / (i + j), 60);

                    rect(i * brickWidth, j * brickHeight, brickWidth, brickHeight);
                }
            }
        }
    }
};


        for(var j = 0; j < rows; j++){
        for(var i = 0; i < bricksPerRow; i++){
            if(i === 0) { bricks[j]= []
            }
        bricks[j][i]= true;

    }
}


        function draw() {
            background(23, 23, 117);
            
            bounceBall();
            hitBalk();
            
            hitBricks();
    
    ballXpos = ballXpos + ballXspeed;
    ballYpos = ballYpos + ballYspeed;
};


