var saveBtn = $(".saveBtn");

$("#currentDay").text(moment().format('dddd MMMM Do YYYY'))

function timeBlock() {
    const time = moment().hours();
    $(".time-block").each(function(){
        const currentTime = parseInt($(this).attr("id"));
        if (currentTime > time) {
            $(this).addClass("future");
        }else if (currentTime === time) {
            $(this).addClass("present")
        } else {
            $(this).addClass("past");
        }
    })
}

saveBtn.on ("click", function(){
    const time = $(this).siblings(".hour").text();
    const note = $(this).siblings(".plan").val();

    localStorage.setItem(time,note);
});

function planner() {
    $(".hour").each(function(){
        const currentHour = $(this).text();
        const currentNote = localStorage.getItem(currentHour);

        if (currentNote !== null) {
            $(this).siblings(".plan").val(currentNote);
        }
    })
}
timeBlock();
planner();