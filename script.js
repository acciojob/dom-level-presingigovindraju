// Get the element with the id "level"
let levelElement = document.getElementById("level");

// Initialize the DOM level to 1
let level = 1;

// Keep traversing up the DOM tree and increment the level until we reach the HTML root element
while (levelElement !== document.documentElement) {
    levelElement = levelElement.parentElement;
    level++;
}

// Display the DOM level using the alert function
alert(`The level of the element is: ${level}`);

