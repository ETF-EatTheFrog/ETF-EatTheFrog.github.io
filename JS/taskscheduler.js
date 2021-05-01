function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");

}

function myFunction1() {
  document.getElementById("myDropdown1").classList.toggle("show");

}

function myFunction2() {
  document.getElementById("myDropdown2").classList.toggle("show");

}


// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

function closeCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

// A $( document ).ready() block.
$(document).ready(function () {
  $('[data-toggle="tooltip"]').tooltip();

  $('#vehicle1').change(function () {
    if ($(this).is(":checked")) {
      $('.label1').css({ "opacity": "0.5" });
    } else {
      $('.label1').css({ "opacity": "1" });
    }

  });
});

$(document).ready(function () {
  var date_input = $('input[name="date"]'); //our date input has the name "date"
  var container = $('.bootstrap-iso form').length > 0 ? $('.bootstrap-iso form').parent() : "body";
  var options = {
    format: 'mm/dd/yyyy',
    container: container,
    todayHighlight: true,
    autoclose: true,
  };
  date_input.datepicker(options);
})



var day, month, year;
var taskName;
var taskdesc;
var physicalTask;
var hour, minute;
var nonNego;

$('#savedata').on('click', function () {
  var date = new Date($('#dateObj').val());
  day = date.getDate();
  month = date.getMonth();
  year = date.getFullYear();
  taskName = $('#taskName').val();
  taskdesc = $('#taskDesc').val();
  if ($('#physicalTask').is(":checked")) {
    physicalTask = "true";
  } else {
    physicalTask = "false";
  }
  hour = $('#hour').val();
  minute = $('#minute').val();
  if ($('#NonNego').is(":checked")) {
    nonNego = "true";
  } else {
    nonNego = "false";
  }
  window.localStorage.setItem('taskName', taskName);
  window.localStorage.setItem('hour', hour);
  window.localStorage.setItem('minute', minute);
  window.localStorage.setItem('month', month);
  window.localStorage.setItem('day', day);
  window.localStorage.setItem('year', year);

});

$(".dropdown-bell").on("click", function () {
  
  //window.location.href = "notification.html";
 
  //window.open("notification.html"); 
  //$(".badge").remove();
});


$(".LoginButton").on("click", function () {
  window.location.href = "Login.html";
  //window.open("notification.html"); 
});

$(".SignupButton").on("click", function () {

  window.location.href = "signup.html";
  //window.open("notification.html"); 
});
// var profilename = window.localStorage.getItem('username');

// var text = "<a href='#'>Hi '"+profilename+"'</a>"

// $('.dropdown-content-bell').append(text)


