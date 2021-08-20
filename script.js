console.log(localStorage.getItem("task"))

var saveButton = $("i");

var currentDate = moment().format("dddd, MMMM Do YYYY");

$("#currentDay").text(currentDate);

function saveTask(){
    //code to select text of each time block
    var taskItem = this.parentNode.previousElementSibling.children[0];
    var storageNum = $(taskItem).attr("id");
    //send to localstorage
    localStorage.setItem("task" + storageNum, taskItem.value)
    //starageNum creates seperate localStorage variables that match seperate time block ids
    $(taskItem).val(localStorage.getItem("task" + storageNum))
};
    
  
saveButton.on("click", saveTask);

 $("textarea").each(function(){
     blockNum = $(this).attr("id")
     $(this).val(localStorage.getItem("task" + blockNum))
 }) 


