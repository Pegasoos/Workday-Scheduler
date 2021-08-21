var saveButton = $("i");

var currentDate = moment().format("dddd, MMMM Do YYYY");
//loop to create moments, pass ids as a parameter, change classes using isBefore,isSame,isAfter, compare with currentHour?
$("#currentDay").text(currentDate);
//moment of time page loaded stored for comparison with time blocks
 let currentHour = moment().utc().format()

 let hourBlocks = $(".col-md-10")
 console.log($(hourBlocks))
//loop checks if each time block is before, after, or the same as the current time stored in the currentHour moment()
 for(i = 0; i<$(hourBlocks).length;i++){
     let blockTime = moment().hours(9 + i).utc().format()
     if(moment(blockTime).isSame(moment(currentHour))){
         $(hourBlocks[i]).addClass("present")
     }
     else if(moment(blockTime).isAfter(moment(currentHour))){
        $(hourBlocks[i]).addClass("future")
     }
     else{
        $(hourBlocks[i]).addClass("past")
     } 
 }
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