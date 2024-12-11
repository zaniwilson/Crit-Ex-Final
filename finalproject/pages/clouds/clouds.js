window.addEventListener('load', () => {
    const returnButton = document.getElementById('returnButton');
    returnButton.addEventListener('click', () => {
        window.location.href = '/Crit-Ex-Final/finalproject/index.html';
    });
});

let userInput = '';
let hasStartedPainting = false;

function setup() {
    const canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent('sketchContainer');
    
    // Create sky gradient background
    background(135, 206, 235); // Sky blue
    createGradient();
}

function createGradient() {
    // Create gradient from darker to lighter blue
    for(let y = 0; y < height; y++){
        const inter = map(y, 0, height, 0, 1);
        const c = lerpColor(
            color(135, 206, 235), // Sky blue
            color(240, 248, 255), // Lighter blue
            inter
        );
        stroke(c);
        line(0, y, width, y);
    }
}

function draw() {
    // Only draw the text if user hasn't started painting
    if (!hasStartedPainting) {
        createGradient();  // Redraw the gradient each frame
        fill(255);
        textSize(24);
        textAlign(CENTER);
        text('paint an image in the clouds', width/2, height/2);
        push();
        textSize(15);
        text('click and drag to paint, press space to clear', width/2, height/2 + 25);
        pop();
    }
}

function mouseDragged() {
    if (!hasStartedPainting) {
        // First time painting - clear the canvas with gradient
        hasStartedPainting = true;
        createGradient();  // Draw gradient one final time
    }
    noStroke();
    fill(255, 255, 255, 25);
    ellipse(mouseX, mouseY, 60, 60);
    return false;
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    createGradient(); // Recreate gradient on resize
}

function keyPressed() {
    if (key === ' ') {  // Check if spacebar was pressed
        // Reset the canvas
        createGradient();
    }
}