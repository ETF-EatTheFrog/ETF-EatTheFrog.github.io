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
window.onclick = function(event) {
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
$( document ).ready(function() {
  $('[data-toggle="tooltip"]').tooltip();

    $('#vehicle1').change(function() {
        if($(this).is(":checked")) {
           $('.label1').css({"opacity":"0.5"});
        } else {
          $('.label1').css({"opacity":"1"});
        }
           
    });
});

$(document).ready(function(){
  var date_input=$('input[name="date"]'); //our date input has the name "date"
  var container=$('.bootstrap-iso form').length>0 ? $('.bootstrap-iso form').parent() : "body";
  var options={
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
var hour,minute;
var nonNego;

$('#savedata').on('click', function(){
  var date = new Date($('#dateObj').val());
  day = date.getDate();
  month = date.getMonth();
  year = date.getFullYear();
  taskName = $('#taskName').val();
  taskdesc = $('#taskDesc').val();
  if($('#physicalTask').is(":checked"))
  {
    physicalTask = "true";
  } else{
    physicalTask = "false";
  }
  hour = $('#hour').val();
  minute = $('#minute').val();
  if($('#NonNego').is(":checked"))
  {
    nonNego = "true";
  } else{
    nonNego = "false";
  }
window.localStorage.setItem('taskName',taskName);
window.localStorage.setItem('hour',hour);
window.localStorage.setItem('minute',minute);
window.localStorage.setItem('month',month);
window.localStorage.setItem('day',day);
window.localStorage.setItem('year',year);

});

$(".notification").on("click", function(){
  $('.dropdown-content').slideToggle();
});

// var profilename = window.localStorage.getItem('username');

// var text = "<a href='#'>Hi '"+profilename+"'</a>"

// $('.dropdown-content-bell').append(text)


// function sortTable() {
//   var table, rows, switching, i, x, y, shouldSwitch;
//   table = document.getElementById("HomeTable");
//   switching = true;
//   /*Make a loop that will continue until
//   no switching has been done:*/
//   while (switching) {
//     //start by saying: no switching is done:
//     switching = false;
//     rows = table.rows;
//     /*Loop through all table rows (except the
//     first, which contains table headers):*/
//     for (i = 0; i < (rows.length - 1); i++) {
//       //start by saying there should be no switching:
//       shouldSwitch = false;
//       /*Get the two elements you want to compare,
//       one from current row and one from the next:*/
    
      
//       x = rows[i].getElementsByTagName("span")[0];
//       y = rows[i + 1].getElementsByTagName("span")[0];
//       //check if the two rows should switch place:
//       if(x !== undefined) {
//         if (x.className == "fa fa-star checked") {
//           //if so, mark as a switch and break the loop:
//           rows[i].parentNode.insertBefore(rows[i], rows[i+1]);
//           switching = true;
//         }
//       }
     
//     }
    
//   }
// }

