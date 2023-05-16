// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

var todoSave = {
  8: '',
  9: '',
  10: '',
  11: '',
  12: '',
  13: '',
  14: '',
  15: '',
  16: '',
  17: '',

}



$(function () {
  // TODO: Add code to display the current date in the header of the page.
  var today = dayjs()

  var testTime = dayjs().set('hour', 9).set('minute', 55)
  $('#currentDay').text(testTime.format('MMMM DD YYYY'))
  $('#currentTime').text(testTime.format('hh:mm a'))
  $('#currentHour').text(testTime.format('H'))




  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  function Checkclick(event) {
    var hourSelecter = $(event.target)
    var inputText = hourSelecter.prev()
    var userText = inputText.val()
    var timeEl = inputText.prev().attr('id')
    todoSave[timeEl] = userText
    console.log(todoSave)
    saveTodo()
  }
  function saveTodo() {
    localStorage.setItem("todoSave", JSON.stringify(todoSave))
  }

  var SaveBtn = $('.saveBtn')
  SaveBtn.on('click', Checkclick)


  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  function setTimeColor() {
    var ScheduleArea = $('#ScheduleArea')
    for (let i = 0; i < ScheduleArea.children().length; i++) {
      var HourChecker = Number(testTime.format('H'))
      var CheckHourId = Number(ScheduleArea.children(0).eq(i).attr('id'))
      if (HourChecker > CheckHourId) {
        ScheduleArea.children(0).eq(i).addClass('past')
      }
      else if (HourChecker == CheckHourId) {
        ScheduleArea.children(0).eq(i).addClass('present')
      }
      else {
        ScheduleArea.children(0).eq(i).addClass('future')
      }

    }
  }
  setTimeColor()



  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?


  getSaveTodo()
  function getSaveTodo() {
    var lastTodoSave = JSON.parse(localStorage.getItem('todoSave'))
    if (lastTodoSave !== null) {
      todoSave = lastTodoSave
      writeToSchedule()
    }

  }
  function writeToSchedule() {
    var objetSize = Object.keys(todoSave).length + 8
    for (let i = 8; i < objetSize; i++) {
      var numberthing = String('#' + i)
      var selectEL = $(numberthing)
      var textareaEL = selectEL.children().eq(1)
      textareaEL.text(todoSave[i])
    }
  }

  // Todo: added a clear button
  var clearBtn = $('#clearBtn')
  clearBtn.on('click', clearSaveTodo)

  function clearSaveTodo() {
    localStorage.clear()
    location.reload()
  }

});
