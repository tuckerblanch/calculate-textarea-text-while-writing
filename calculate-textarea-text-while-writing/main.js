var myTextarea = document.getElementById('myText'),
    mySpan = document.getElementById('mySpan');

myTextarea.onkeyup = function() {
    'use strict';
    mySpan.textContent = 100 - this.value.length;

    if (mySpan.textContent < 0){
        mySpan.style.color = '#F00';
    } else {
        mySpan.style.color = '#008000';
    }};

