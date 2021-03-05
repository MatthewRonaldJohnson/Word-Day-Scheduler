var $container = $('#timeblock-container');
//grabs saved schedule from local storage, or creates a new empty schedule
var schedule = JSON.parse(localStorage.getItem('savedSchedule')) || [
    {
        time: "8am",
        milTime: 8,
        appointment: "",
    },
    {
        time: "9am",
        milTime: 9,
        appointment: "",
    },
    {
        time: "10am",
        milTime: 10,
        appointment: "",
    },
    {
        time: "11am",
        milTime: 11,
        appointment: "",
    },
    {
        time: "12pm",
        milTime: 12,
        appointment: "",
    },
    {
        time: "1pm",
        milTime: 13,
        appointment: "",
    },
    {
        time: "2pm",
        milTime: 14,
        appointment: "",
    },
    {
        time: "3pm",
        milTime: 15,
        appointment: "",
    },
    {
        time: "4pm",
        milTime: 16,
        appointment: "",
    },
    {
        time: "5pm",
        milTime: 17,
        appointment: "",
    }
]

//gets the current day from moment and displays it at the top of the page
$("#currentDay").text(moment().format('dddd, MMMM Do, YYYY'))

//populates rows
for (let i = 0; i < schedule.length; i++) {
    var timeIs;
    //add the hour label for the row
    var newRow = $('<div>').addClass('row');
    $container.append(newRow);
    newRow.append($("<div>").addClass('hour col').text(schedule[i].time));
    //grabs any saved appointments to print
    var newText = schedule[i].appointment;
    //logic to check which class to apply to the input areas based off current time
    if (schedule[i].milTime == moment().format('H')){ 
        timeIs = "present";
    } else if (schedule[i].milTime < moment().format('H')){
        timeIs ="past";
    } else {
        timeIs = 'future';
    }
    //adds the input area
    newRow.append($("<input>").addClass('time-block col-8 col-md-10 ' + timeIs).attr('type', 'text').attr("value", newText));
    //adds the save button
    newRow.append($("<button>").addClass('saveBtn col').text("💾").attr('data-index', i));
}

//sets up event listener on entire container, but the function only fires if the click was on one of the save buttons
$container.on('click', '.saveBtn', function(){
    var saved = $(this).siblings().eq(1).val();
    var correctIndex = $(this).attr('data-index');
    schedule[correctIndex].appointment = saved;
    localStorage.setItem('savedSchedule', JSON.stringify(schedule))
})

//sets up the functionality of the reset button, reverting schedule to the empty array and refreshing the page
$('#reset-button').click(function(){
    schedule = [
        {
            time: "8am",
            milTime: 8,
            appointment: "",
        },
        {
            time: "9am",
            milTime: 9,
            appointment: "",
        },
        {
            time: "10am",
            milTime: 10,
            appointment: "",
        },
        {
            time: "11am",
            milTime: 11,
            appointment: "",
        },
        {
            time: "12pm",
            milTime: 12,
            appointment: "",
        },
        {
            time: "1pm",
            milTime: 13,
            appointment: "",
        },
        {
            time: "2pm",
            milTime: 14,
            appointment: "",
        },
        {
            time: "3pm",
            milTime: 15,
            appointment: "",
        },
        {
            time: "4pm",
            milTime: 16,
            appointment: "",
        },
        {
            time: "5pm",
            milTime: 17,
            appointment: "",
        }
    ];
    localStorage.setItem('savedSchedule', JSON.stringify(schedule));
    location = location;
})

//sets up the functionality of the save button, loops through and stores the text from all the input areas and puts it in local storage
$('#save-button').click(function(){
     var timeBlocks = $('.time-block');
     for (let i = 0; i < timeBlocks.length; i++) {
         schedule[i].appointment = timeBlocks[i].value;
     }
     localStorage.setItem('savedSchedule', JSON.stringify(schedule));
})