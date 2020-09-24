// constants for accessing document elements
const main_text = document.getElementById('main_text');
const rectangle_button = document.getElementById('rectangle_button');
const extra_text = document.getElementById('extra_text');
const round_button = document.getElementById('round_button');

// variable to keep track of current state to determine what data gets used
let state = 0;

// function to change state
function change_state(x) {
    // ensure the number stays between 0 and 5 for indices of content object
    if (state === 0 && x === -1) {
        state = 5;
    } else if (state === 5 && x === 1) {
        state = 0;
    } else {
        state += x;
    }
}

// !function to generate main_text content for slide 5

// function to populate html elements according to data in content object at state index
function populate_html() {
    if (content[state].main_text) {
        main_text.textContent = content[state].main_text;
    } // !else - fill in with the numbers and (mostly) randomly-generated symbols
    if (content[state].rectangle_button) {
        rectangle_button.textContent = content[state].rectangle_button;
        rectangle_button.classList.remove("d-none");
    } else {
        rectangle_button.classList.add("d-none");
    }
    if (content[state].extra_text) {
        extra_text.textContent = content[state].extra_text;
    }
    round_button.setAttribute("class", "fa fa-6x text-dark " + content[state].round_button);

}

populate_html();

// trigger state change and update html elements according to arrow keypress
// !something is broken here
let key_press = function (event) {
    if (event.keyCode === 37) {
        change_state(-1);
    } else if (event.keyCode === 39) {
        change_state(1);
    }
    populate_html();
}

document.addEventListener("keydown", event => key_press(event));

// !trigger state change and update html elements according to rectangle button press

// !trigger state change and update html elements according to round button press


