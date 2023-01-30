let saveEl = document.getElementById("save_el");
let countEl = document.getElementById("inc_count");
let count = 0;
let errorMessage = document.getElementById("error");

function increment() {

	count = count + 1;
	countEl.textContent = count;

}


function save() {

let countStr = count + " - ";
saveEl.textContent += countStr;
count = 0;
}


function error() {


errorMessage.textContent = "Something went wrong, please try again"

}