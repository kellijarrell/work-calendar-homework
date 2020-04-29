
var momentDate = moment().format('dddd, MMMM Do YYYY');


$(document).ready(function(){


(function displayTime(){
var displayMoment = $("#currentDay");
displayMoment.html(momentDate);
})();

$(".saveBtn").on("click", function(){
    var todo = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, todo);
});

$("#9 .description").val(localStorage.getItem("9"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#1 .description").val(localStorage.getItem("13"));
$("#2 .description").val(localStorage.getItem("14"));
$("#3 .description").val(localStorage.getItem("15"));
$("#4 .description").val(localStorage.getItem("16"));
$("#5 .description").val(localStorage.getItem("17"));

function currentTime(){
    let currentHour = moment().hour();
    $(".time-block").each(function(){

        var timeBlockHour = parseInt($(this).attr("id"));
        if (timeBlockHour < currentHour){
            $(this).addClass("past");
        }
        else if(timeBlockHour === currentHour){
            $(this).addClass("present");
        }
        else{
            $(this).addClass("future"); 
        }

    });
};
currentTime();

setInterval(currentTime, 30000);

});