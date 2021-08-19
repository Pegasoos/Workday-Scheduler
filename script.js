var saveButton = $("i");

var currentDate = moment().format("dddd, MMMM Do YYYY");

$("#currentDay").text(currentDate);

function saveTask(){
    
    //store textContent(can't use this, returns i element) in variable, send to localstorage
    //saved content remains displayed on refresh, set textarea value equal to local storage from beginning?
};

saveButton.on("click", saveTask);
