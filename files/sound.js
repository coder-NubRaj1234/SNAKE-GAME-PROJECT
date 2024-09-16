//selet some elements.........
const musicBtn = document.querySelector("#music");
const snakeSoundBtn = document.querySelector("#snake-sound");

const musicSlider = document.querySelector("#music-slider");
const soundSlider = document.querySelector("#sound-slider");

//selects some sounds ..............
const musicSound = new Audio("/SNAKE-GAME-PROJECT/shunds/music.mp3");
const foodSound = new Audio("/SNAKE-GAME-PROJECT/shunds/food.mp3");
const gameOverSound = new Audio("/SNAKE-GAME-PROJECT/shunds/gameover.mp3");
const moveSound = new Audio("/SNAKE-GAME-PROJECT/shunds/move.mp3");

let musciPlay = false;
let soundPlay = false;

//function for toggle classLists............
function toggleSliderClass(sliderElm) {
    if (sliderElm.classList.contains("right")) {
        sliderElm.classList.remove("right");
        sliderElm.classList.add("left");
    } else {
        sliderElm.classList.add("right");
        sliderElm.classList.remove("left");
    }
};

//Event for class list toggle.......
musicBtn.addEventListener("click", function () {
    toggleSliderClass(musicSlider);
    musciPlay = !musciPlay ? true : false ;
    console.log("Music" ,musciPlay);
    // checkSound(musciPlay, soundPlay);
});
snakeSoundBtn.addEventListener("click", function () {
    toggleSliderClass(soundSlider);
    soundPlay = !soundPlay ? true : false;
    console.log("Sounds" , soundPlay)
});
//select some elements........................
const downArrow = document.querySelector("#dowArrow");
const sound = document.querySelector("#sound");
const arrowDown = document.querySelector(".fa-angle-down");

//arrow buttn Event.........................
downArrow.addEventListener("click", function () {
    if (arrowDown.classList.contains("fa-angle-down")) {
        arrowDown.classList.remove("fa-angle-down");
        arrowDown.classList.add("fa-chevron-up");
    } else {
        arrowDown.classList.add("fa-angle-down");
        arrowDown.classList.remove("fa-chevron-up");
    };
    sound.classList.toggle("display-visible");
});

export {musciPlay , soundPlay};
export {foodSound , gameOverSound , moveSound , musicSound}