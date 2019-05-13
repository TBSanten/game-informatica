var canvasHeight = 400;
	var canvasWidth = 400;
	
	var ballRatio = 20.0;
	var ballXpos = 50;
	var ballYpos = 50;
	
	var ballXspeed= 7; 
	var ballYspeed = 7;
	
	var balkWidth = 150;
	var balkHeight = 20; 
	var balkYpos = canvasHeight - 30; 
	
	var bricksPerRow = 4;
	var rows = 2;
	var brickHeight = 40;
	var brickWidth = canvasWidth / bricksPerRow ;
	
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
	
	    if ((ballYpos + ballRatio >= canvasHeight) || (ballYpos -ballRatio <= 0)) {
	        ballYspeed = ballYspeed * -1;
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
	
	    var drawBriks = function(){
	        noStroke();
	        for (var j = 0; j < rows; j++) {
	        for( var i = 0; i < bricksPerRow; i++) {
	            fill(255 * (i + j), 255 / (i + j), 60);
	        rect(i * brickWidth,j * brickHeight,brickWidth,brickHeight);
	        }
	    }
	};
	
	function draw() {
	     background(23, 23, 117);
	
	    bounceBall();
	    hitBalk();
	    drawBriks();
	
	ballXpos = ballXpos + ballXspeed;
	ballYpos = ballYpos + ballYspeed;
	};
	
	
