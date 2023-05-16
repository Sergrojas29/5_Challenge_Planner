// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var today = dayjs()

var testTime = dayjs().set('hour', 10).set('minute', 55)
$('#currentDay').text(testTime.format('MMMM DD YYYY'))
$('#currentTime').text(testTime.format('hh:mm a'))
$('#currentHour').text(testTime.format('h'))



var ScheduleArea = $('#ScheduleArea')
var SaveBtn = $('.saveBtn')




function setTimeColor(){
  for (let i = 0; i < ScheduleArea.children().length; i++) {
    var HourChecker = Number(testTime.format('HH'))
    var CheckHourId = Number(ScheduleArea.children(0).eq(i).attr('id'))
    if(HourChecker > CheckHourId){      
      ScheduleArea.children(0).eq(i).addClass('past')
    }
    else if (HourChecker == CheckHourId){
      ScheduleArea.children(0).eq(i).addClass('present')
    }
    else{
      ScheduleArea.children(0).eq(i).addClass('future')
    }
     
  }
}
setTimeColor()


function Checkclick(event){
  element = event.target
  jqelement = $(event.target)
  console.log(element)
  console.log(jqelement)
  var inputTest = jqelement.prev().val()
  console.log(inputTest)
}

SaveBtn.on('click', Checkclick )


// testColor()


// ScheduleArea.children(0).eq(1).addClass('present')
// console.log(ScheduleArea.children(0).eq(0))
// console.log(ScheduleArea.children().length)
// console.log(typeof(ScheduleArea.children(0).eq(0).attr('id')))
// console.log(ScheduleArea.toggle())



$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
