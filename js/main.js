// creating the event
window.addEventListener('load', init);

// available levels
const levels = {
    easy: 5,
    medium: 3,
    hard: 2
}
// to change levels
const currentLevel = levels.easy;

// creating the global variables
let time = currentLevel;
let score = 0;
let isPlaying;

// dom elements
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

// creating the array of rendom words
const words = [
    'hat',
    'river',
    'lucky',
    'general',
    'stubborn',
    'cocktail',
    'runaway',
    'joke',
    'developer',
    'hero',
    'establishment',
    'echo',
    'nutrition',
    'revolver',
    'siblings',
    'horror',
    'sad',
    'try',
];

// initialize game
function init() {
    // show number of seconds in UI
    seconds.innerHTML = currentLevel;
    // load word from array
    showWord(words);
    // start matching on word input
    wordInput.addEventListener('input', startMatch);
    // call countdown every second
    setInterval(countdown, 1000);
    // check the status of the game
    setInterval(checkStatus, 50);
}

// start match
function startMatch() {
    if(matchWords()) {
        isPlaying = true;
        time = currentLevel + 1;
        showWord(words);
        wordInput.value ='';
        score++;
    }
    // if score is -1 display 0
    if(score === -1) {
        scoreDisplay.innerHTML = 0;
    } else {
        scoreDisplay.innerHTML = score;
    }
    
}

// match currentwords to wordinput
function matchWords() {
    if(wordInput.value === currentWord.innerHTML) {
        message.innerHTML = 'Correct';
        return true;
    } else {
        message.innerHTML = '';
        return false;
    }
}

// pick & show random word
function showWord(words) {
    // generate random array index
    const randIndex = Math.floor(Math.random() * words.length);
    // out the random word
    currentWord.innerHTML = words[randIndex];
}

// countdown timer
function countdown() {
    // make sure time is not run out
    if(time > 0) {
        // descrement the time
        time--;
    } else if(time === 0) {
        // game is over
        isPlaying = false;
    }
    // show time
    timeDisplay.innerHTML = time;
}
// check game status
function checkStatus() {
    if(!isPlaying && time === 0) {
        message.innerHTML = 'Game Over!!!';
        score = -1;
    }
}