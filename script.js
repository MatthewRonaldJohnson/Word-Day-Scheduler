var $container = $('.container');
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

$("#currentDay").text(moment().format('dddd, MMMM Do, YYYY'))
//populates rows
for (let i = 0; i < schedule.length; i++) {
    var timeIs;
    var newRow = $('<div>').addClass('row');
    $container.append(newRow);
    newRow.append($("<div>").addClass('hour col').text(schedule[i].time));
    var newText = schedule[i].appointment;
    if (schedule[i].milTime == moment().format('H')){ 
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