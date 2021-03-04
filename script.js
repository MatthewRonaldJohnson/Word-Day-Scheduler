var $container = $('.container');
var buisnessHours = ["8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"]


buisnessHours.forEach(function(i){
    var newRow = $('<div>').addClass('row input-group mb-3');
    $container.append(newRow);
    newRow.append($("<div>").addClass('description').text(i));
    newRow.append($("<input>").addClass('time-block').attr('placeholder', 'blank').attr('type', 'text'));
    newRow.append($("<button>").addClass('saveBtn').text("💾"));
})
