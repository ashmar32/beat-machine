"use strict";

window.addEventListener("keydown", function(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return; // If no audio, then exit function
    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
});

window.addEventListener("keyup", function(e) {
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    key.classList.remove('playing');
});

function removeTransition(e){
    console.log(e)
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
}

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));


