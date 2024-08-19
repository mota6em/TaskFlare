const inputBox = document.getElementById("input-box");
const listConainer = document.getElementById("list-container");


function addTask(){
    if(inputBox.value == '')
    {
        alert("You must write fisrt!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listConainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

listConainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);


function saveData(){
    localStorage.setItem("data", listConainer.innerHTML);
}

function showTasks(){
    listConainer.innerHTML = localStorage.getItem("data");
}
showTasks();

// data display

window.onload = function() {
    // Get the current date
    var today = new Date();

    // Get the day, month, and year
    var day = today.getDate();
    var month = today.toLocaleString('default', { month: 'long' });
    var year = today.getFullYear();

    // Get the day of the week and replace 0-6 with Sunday-Saturday
    var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var dayOfWeek = daysOfWeek[today.getDay()];

    // Custom formatting (optional)
    var formattedDate = `${month} ${day}, ${dayOfWeek}`;

    // Update the date in the HTML
    document.getElementById("dateDisplay").innerText = formattedDate;
};
