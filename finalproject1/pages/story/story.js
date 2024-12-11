window.addEventListener('load', () => {
    const returnButton = document.getElementById('returnButton');
    returnButton.addEventListener('click', () => {
        window.location.href = '/index.html';
    });
});

let userInput = '';

let prompt = {
    subject: '',
    destination: '',
    setting: ''
};

const subjects = [
    'a wizard', 'a lost dog', 'two best friends', 'a mysterious package', 
    'an elderly superhero', 'a talking tree', 'a ghost', 'a time traveler', 
    'a young detective', 'an alien explorer', 'a robot with a heart', 'a pirate captain', 
    'a mischievous fairy', 'a brave knight', 'a shapeshifter', 'a cursed artifact', 
    'a runaway prince', 'a reclusive artist', 'a witch in training', 'a scientist with a secret', 
    'a family of dragons', 'a curious child', 'an enchanted mirror', 'a rogue AI', 
    'a treasure hunter', 'a librarian with magical books', 'a lost astronaut', 'a hidden village elder', 
    'a mysterious stranger', 'a cursed castle', 'a band of rebels', 'a forgotten god', 
    'a mythical creature', 'a runaway robot', 'a cursed painting', 'a chef with magical recipes', 
    'a brave squirrel', 'a lonely vampire', 'a singing ghost', 'a mystical map', 
    'a dragon tamer', 'a magical musician', 'a fortune-teller', 'an inventor and their machine', 
    'a hidden heir', 'a mysterious letter', 'a pair of twins with powers', 'a dream traveler', 
    'a guardian spirit', 'a forgotten warrior'
  ];
  
  const destinations = [
    'the moon', 'a secret garden', 'the bottom of the ocean', 'a magical library', 
    'the center of the Earth', 'a haunted mansion', 'a forgotten city', 'a floating island', 
    'a castle in the clouds', 'a desert oasis', 'a deep forest', 'a parallel universe', 
    'a hidden cave', 'a futuristic city', 'a spaceship', 'a volcanic island', 
    'a kingdom under the sea', 'an ancient ruin', 'a carnival at midnight', 'a labyrinth', 
    'a faraway galaxy', 'a mountaintop temple', 'a mysterious lagoon', 'a frozen tundra', 
    'a bustling marketplace', 'a forgotten library', 'a mystical portal', 'a pirate ship', 
    'a magical train', 'a hidden valley', 'an enchanted meadow', 'a time loop', 
    'a celestial palace', 'a small town with secrets', 'a colorful coral reef', 'a cave of wonders', 
    'a magical treehouse', 'a faraway planet', 'a field of stars', 'a shadowy realm', 
    'a glimmering waterfall', 'a fairy circle', 'a bustling harbor', 'a dreamscape', 
    'a lonely lighthouse', 'a forgotten kingdom', 'an underwater city', 'a snowy mountain pass', 
    'a land of perpetual twilight', 'a sky full of floating lanterns'
  ];
  
  const settings = [
    'the dead of night', 'a rainy afternoon', 'an alternate dimension', 'the year 3000', 
    'ancient Egypt', 'a blazing summer day', 'a stormy evening', 'a moonlit forest', 
    'a bustling festival', 'a quiet winter morning', 'a sunrise on the beach', 'a midsummer’s eve', 
    'a dark and stormy night', 'a chilly autumn evening', 'a carnival in full swing', 
    'a starry night sky', 'a desolate wasteland', 'a peaceful meadow at dusk', 'a bustling market at dawn', 
    'a futuristic cityscape', 'a forgotten battlefield', 'a serene mountain village', 'a castle ballroom', 
    'a space station in orbit', 'a dense foggy morning', 'a magical eclipse', 'a village frozen in time', 
    'a royal coronation', 'a cosmic event', 'a school of magic', 'a stormy sea voyage', 
    'a hidden grove', 'a war-torn kingdom', 'a mysterious temple', 'a glowing cave', 
    'a desert at high noon', 'a festival of lights', 'a snowy evening', 'a vibrant spring day', 
    'a midnight train ride', 'a comet passing by', 'a field of fireflies', 'a mysterious carnival', 
    'a quiet library at dusk', 'a sunset on the horizon', 'a shadowy forest', 'a cosmic nebula', 
    'a lonely desert night', 'a world beyond dreams'
  ];
  

// Add this near the other global variables
let showInstructions = true;

function setup() {
    const canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent('sketchContainer');
    generateSketch(); // Initial sketch
}

function keyTyped() {
    if (key === 'Enter') {
        userInput = ''; // Clear the input when Enter is pressed
    } else if (key === ' ') {  // Space bar
        // Randomly select new words
        prompt.subject = random(subjects);
        prompt.destination = random(destinations);
        prompt.setting = random(settings);
        showInstructions = false; // Hide instructions after first spacebar press
        generateSketch();
    } else {
        userInput += key; // Add the typed key to userInput
    }
    return false; // Prevent default behavior
}

function generateSketch() {
    background(20);  // Dark background

    // Instructions at the top of the screen
    if (showInstructions) {
        fill(255);
        textSize(16);
        textAlign(CENTER);
        text('Press SPACE to generate a new story prompt', width/2, 50);
    }

    // Center the story prompts vertically
    const centerY = height/2;
    const lineSpacing = 40;
    
    // Display the story prompt
    textSize(24);
    textAlign(CENTER);
    text(`Write a story about ${prompt.subject}`, width/2, centerY - lineSpacing);
    text(`going to ${prompt.destination}`, width/2, centerY);
    text(`in ${prompt.setting}`, width/2, centerY + lineSpacing);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    generateSketch(); // Add this line to redraw everything after resize
}