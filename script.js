var $container = $('.container');
//var buisnessHours = ["8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"]
//var savedData =  JSON.parse(localStorage.getItem("savedData")) || [] // called from local storage or blank array if nothing saved

//grabs saved schedule from local storage, or creates a new empty schedule
var schedule = JSON.parse(localStorage.getItem('savedSchedule')) || [
    {
        time: "8am",
        milTime: '8',
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
        appointment: "",
    },
    {
        time: "12pm",
        appointment: "",
    },
    {
        time: "1pm",
        appointment: "",
    },
    {
        time: "2pm",
        appointment: "",
    },
    {
        time: "3pm",
        appointment: "",
    },
    {
        time: "4pm",
        appointment: "",
    },
    {
        time: "5pm",
        appointment: "",
    }
]

// schedule.forEach(function(i){
//     var newRow = $('<div>').addClass('row');
//     $container.append(newRow);
//     newRow.append($("<div>").addClass('hour col').text(i.time));
//     var newText = i.appointment;
//     if (newText === undefined){
//         newText = ""
//     };
//     newRow.append($("<input>").addClass('time-block col-9').attr('type', 'text').attr("value", newText));
//     newRow.append($("<button>").addClass('saveBtn col').text("💾"));
// })


//populates rows
for (let i = 0; i < schedule.length; i++) {
    var timeIs;
    var newRow = $('<div>').addClass('row');
    $container.append(newRow);
    newRow.append($("<div>").addClass('hour col').text(schedule[i].time));
    var newText = schedule[i].appointment;
    console.log(moment().format('H'))
    if (schedule[i].milTime == moment().format('H')){ 
        console.log("test")
        timeIs = "present";
    } else if (schedule[i].milTime < moment().format('H')){
        timeIs ="past";
    } else {
        timeIs = 'future';
    }
    newRow.append($("<input>").addClass('time-block col-9 ' + timeIs).attr('type', 'text').attr("value", newText));
    newRow.append($("<button>").addClass('saveBtn col').text("💾").attr('data-index', i));
    
    // if (newText === undefined){
    //     newText = ""
    // };
}

$container.on('click', '.saveBtn', function(e){
    var saved = $(e.target).siblings().eq(1).val();
    correctIndex = $(e.target).attr('data-index');
    schedule[correctIndex].appointment = saved;
    localStorage.setItem('savedSchedule', JSON.stringify(schedule))
})

$('#reset-button').click(function(){
    schedule = [
        {
            time: "8am",
            appointment: "",
        },
        {
            time: "9am",
            appointment: "",
        },
        {
            time: "10am",
            appointment: "",
        },
        {
            time: "11am",
            appointment: "",
        },
        {
            time: "12pm",
            appointment: "",
        },
        {
            time: "1pm",
            appointment: "",
        },
        {
            time: "2pm",
            appointment: "",
        },
        {
            time: "3pm",
            appointment: "",
        },
        {
            time: "4pm",
            appointment: "",
        },
        {
            time: "5pm",
            appointment: "",
        }
    ];
    localStorage.setItem('savedSchedule', JSON.stringify(schedule));
    location = location;
})

$("#currentDay").text(moment().format('dddd, MMMM Do, YYYY'))