// Declare variables for elements in the HTML file
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

// Define a function to randomly select an item from an array
function randomValueFromArray(array){
const random = Math.floor(Math.random()*array.length);
return array[random];
}

// Define the initial story text and insert placeholders
const storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';
const insertX = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
const insertY = ['the soup kitchen', 'Disneyland', 'the White House'];
const insertZ = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];

// Add an event listener to the "Generate random story" button
randomize.addEventListener('click', result);

// Define a function to generate a new story
function result() {
// Use the original story text as a starting point
let newStory = storyText;

// Randomly select items to replace the placeholders
const xItem = randomValueFromArray(insertX);
const yItem = randomValueFromArray(insertY);
const zItem = randomValueFromArray(insertZ);

// Replace the placeholders in the story text with the randomly selected items
newStory = newStory.replaceAll(':insertx:',xItem);
newStory = newStory.replaceAll(':inserty:',yItem);
newStory = newStory.replaceAll(':insertz:',zItem);

// Replace the name "Bob" in the story with a custom name, if one is provided
if (customName.value !== '') {
const name = customName.value;
newStory = newStory.replaceAll('Bob', name);
}

// If the UK radio button is selected, convert the temperature and weight units to stones and centigrade
if (document.getElementById("uk").checked) {
const weight = `${Math.round(300*0.0714286)} stone`;
const temperature = `${Math.round((94-32) * 5 / 9)} centigrade`;
newStory = newStory.replaceAll('94 fahrenheit', temperature);
newStory = newStory.replaceAll('300 pounds', weight);
}

// Update the text content of the story element with the new story text
story.textContent = newStory;
// Make the story element visible
story.style.visibility = 'visible';
}

// new story coming soon 