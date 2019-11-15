var userName = localStorage.getItem('receivedName');

if (localStorage.getItem('receivedName') == null) {
	userName = "friend";
}
function openSettings () {
	document.getElementById('settings').classList.toggle("settings-open");
}

function saveName() {
	localStorage.setItem('receivedName', userName);
}

function changeName() {
	var inputName = document.getElementById("name-input").value;

	if (inputName === "") {
		alert("Your name is nobody? I doubt it. Try again, friend.");
	} else {
		userName = inputName;
		document.getElementById("name").innerHTML = userName;
	}

	saveName();

	document.getElementById("name-input").value = "";

}
document.getElementById("name-form").addEventListener('submit', function(e) {
	e.preventDefault()
    changeName();
});

function getName() {
	userName = localStorage.getItem('receivedName');
};

getName();



function clearName() {
	document.getElementById("name-input").value = "";
}


document.getElementById("settings-btn").addEventListener('click', openSettings);


function getTime() {
	var date = new Date();
	console.log(date);
	var hour = date.getHours();
	var day = date.getDate();
	var month = date.getMonth() + 1;
	var year = date.getFullYear();

	var amPM

	if (hour < 12) {
		amPM = "AM"
	} else if (hour >= 12) {
		amPM = "PM"
	}

	if (hour > 12) {
		hour = hour - 12;
	} else if (hour === 0) {
		hour = 12;
	}

	var minutes  = date.getMinutes();

	if (minutes < 10) {
		document.getElementById("time").innerHTML = hour + ":0" + minutes + " " + amPM;
	} else {
		document.getElementById("time").innerHTML = hour + ":" + minutes + " " + amPM;
	}

	document.getElementById("date").innerHTML = day +"-"+ month + "-" + year;
}

setInterval(getTime, 1000);
getTime();

function getGreeting() {
	var date = new Date();
	var hour = date.getHours();

	if (hour >= 0 && hour < 12) {
		document.getElementById("greeting").innerHTML += `Good morning`;
	} else if (hour >= 12 && hour < 18) {
		document.getElementById("greeting").innerHTML += `Good afternoon`;
	} else if (hour >= 18 && hour <= 23) {
		document.getElementById("greeting").innerHTML += `Good evening`;
	}
}

getGreeting();

function getName() {
	document.getElementById("name").innerHTML = userName;
}

getName();
let compliments = [
	"Imperfection is beauty,madness is genius and it's better to be absolutely ridiculous than absolutely boring.  ― Marilyn Monroe",
	"I have not failed. I've just found 10,000 ways that won't work ― Thomas A. Edison",
	"It is never too late to be what you might have been.― George Eliot",
	"Everything you can imagine is real.― Pablo Picasso",
	"Life isn't about finding yourself. Life is about creating yourself.― George Bernard Shaw",
	"Do what you can, with what you have, where you are.― Theodore Roosevelt",
	"Success is not final, failure is not fatal: it is the courage to continue that counts.― Winston S. Churchill",
	"It's the possibility of having a dream come true that makes life interesting.― Paulo Coelho, The Alchemist",
	"I believe in you with the power and might of 1,000 fiercely-flaming suns.",
	"You can't live your life for other people. You've got to do what's right for you, even if it hurts some people you love.― Nicholas Sparks, The Notebook",
	"Do what you feel in your heart to be right – for you’ll be criticized anyway.― Eleanor Roosevelt",
	"Whatever you are, be a good one.― Abraham Lincoln",
	"May you live every day of your life.― Jonathan Swift",
	"Who controls the past controls the future. Who controls the present controls the past.― George Orwell, 1984",
	"Always do what you are afraid to do.― Ralph Waldo Emerson",
	"The mind is its own place, and in itself can make a heaven of hell, a hell of heaven..― John Milton, Paradise Lost",
	"The future belongs to those who believe in the beauty of their dreams.― Eleanor Roosevelt",
	"But I know, somehow, that only when it is dark enough can you see the stars.― Martin Luther King, Jr.",
	"It's kind of fun to do the impossible.― Walt Disney",
	"Pain is temporary. Quitting lasts forever.― Lance Armstrong Sally Jenkins, Every Second Counts"

];

var getRandomNumber = Math.floor(Math.random() * compliments.length);
function getCompliment() {
	document.getElementById("compliment").innerHTML += compliments[getRandomNumber];
};

getCompliment();

function saveState() {
	localStorage.setItem('toDoState', document.getElementById("ul-task-list").innerHTML);
}

document.getElementById("ul-task-list").addEventListener('click', function(e) {
	if (e.target.className == "close") {
		var listItem = e.target.parentElement;
		document.getElementById("ul-task-list").removeChild(listItem);
		saveState();
	} else if (e.target.tagName === 'LI') {
		e.target.classList.toggle('checked');
	}
}, false);

// Add New List Item

function newElement() {
	var inputValue = document.getElementById("myInput").value;

	if (inputValue === "") {
		alert("Give me something to work with! I can't add an empty item to the list.");
	} else {
		document.getElementById("ul-task-list").innerHTML += '<li>' + inputValue 
		+ '<span class="close">&times</span></li>';
	}

    document.getElementById("myInput").value = "";

	saveState();

}

document.getElementById("input-and-add-form").addEventListener('submit', function() {
    newElement();
});

/* =================================
	Retrieve Saved Items in the To Do List
================================= */

let savedToDoList = localStorage.getItem('toDoState');
if (savedToDoList === null) {
	document.getElementById("ul-task-list").innerHTML = `
		<li class="li-task">Add some new to do's<span class="close">&times</span></li>
		<li class="li-task">Cross off these old ones<span class="close">&times</span></li>
		<li class="li-task">Celebrate your hard work with a nap<span class="close">&times</span></li>
	`
} else {
	document.getElementById("ul-task-list").innerHTML = localStorage.getItem('toDoState');
}