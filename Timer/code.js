var painter = document.getElementById("c").getContext("2d");
var button = document.getElementById("b");
var x = 180;
var y = 380;
var g = 0.5;
var dy = 10;
var dx = 2;
var jump = -10;
var isleft = false;
var isright = false;
var isup = false;
var allowjump = false;
document.addEventListener("keydown", onKeyDown);
document.addEventListener("keyup", onKeyUp);
button.addEventListener("click", onClick);

drawBackground();
drawSquare(x, y);


function onKeyUp(e) {
   
    if (e.key === "ArrowLeft") {
        isleft = false;
    } else if (e.key === "ArrowRight") {
        isright = false;
    }
  if (e.key === "ArrowUp") {
        isup = false;
    } 
    
}


function onKeyDown(e) {
   
    if (e.key === "ArrowLeft") {
        isleft = true;
    } else if (e.key === "ArrowRight") {
        isright = true;
    }
  if (e.key === "ArrowUp") {
        isup = true;
    } 
    
}

function onClick(){
    setInterval(onTick, 20);
  
    
}
 function onTick(){
    if(isup && allowjump) {
        dy += jump;
        allowjump = false;
    }
    drawBackground();
    drawSquare(x, y);
   dy += g;
    y += dy;

    if(isleft) {
        x -= dx;
    }
    if(isright) {
        x += dx;
    }

    if (x <= -20) {
        x = 380;
    }
    if (x >= 400) {
        x = 0;
    }
    if (y>380) {
        y = 380;
        dy = 0;
        allowjump = true;
    }
}

function drawSquare(x, y) {
    painter.fillStyle = "#FF0000";
    if(x < 0 && x > -20) {
    painter.fillRect(0, y, 20+x, 20);
    painter.fillRect(400+x, y, -x, 20);
    }
    if(x > 380 && x < 400) {
    painter.fillRect(x, y, 400-x, 20);
    painter.fillRect(0, y, 20+x-400, 20);
    }
    
    painter.fillRect(x, y, 20, 20);
}

function drawBackground() {
    painter.fillStyle = "#AAAAAA";
    painter.fillRect(0, 0, 400, 400);
}