window.addEventListener('load', () => {
    const returnButton = document.getElementById('returnButton');
    returnButton.addEventListener('click', () => {
        window.location.href = '/Crit-Ex-Final/finalproject/index.html';
    });
});

let userInput = '';

function setup() {
    const canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent('sketchContainer');
    generateSketch(); // Initial sketch
}

function keyTyped() {
    if (key === 'Enter' || key === ' ') {
        userInput = ''; // Clear the input when Enter or space is pressed
    } else {
        userInput += key; // Add the typed key to userInput
    }
    generateSketch();
    return false; // Prevent default behavior
}

function generateSketch() {
    // Generate a random sketch
    const randomColor = color(random(255), random(255), random(255));
    background(randomColor);

    // Use user input to influence the sketch
    const numShapes = userInput.length * 10;
    for (let i = 0; i < numShapes; i++) {
        fill(randomColor);
        ellipse(random(width), random(height), random(10, 50));
    }

    // Display "type" text and current input
    fill(255);
    textSize(24);
    textAlign(CENTER);
    text('type', width/2, height/2);
    textSize(16);
    text(userInput, width/2, height/2 + 30);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}