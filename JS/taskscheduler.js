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
      //$('.label1').css({ "opacity": "0.5" });
      document.getElementById('tr1').innerHTML = '';
    } 
  });
  $('#vehicle2').change(function () {
    if ($(this).is(":checked")) {
      //$('.label1').css({ "opacity": "0.5" });
      document.getElementById('tr2').innerHTML = '';
    } 
  });
  $('#vehicle3').change(function () {
    if ($(this).is(":checked")) {
      //$('.label1').css({ "opacity": "0.5" });
      document.getElementById('tr3').innerHTML = '';
    } 
  });
  $('#vehicle4').change(function () {
    if ($(this).is(":checked")) {
      //$('.label1').css({ "opacity": "0.5" });
      document.getElementById('tr4').innerHTML = '';
    } 
  });
  $('#vehicle5').change(function () {
    if ($(this).is(":checked")) {
      //$('.label1').css({ "opacity": "0.5" });
      document.getElementById('tr5').innerHTML = '';
    } 
  });
  $('#vehicle6').change(function () {
    if ($(this).is(":checked")) {
      //$('.label1').css({ "opacity": "0.5" });
      document.getElementById('tr6').innerHTML = '';
    } 
  });
  $('#vehicle7').change(function () {
    if ($(this).is(":checked")) {
      //$('.label1').css({ "opacity": "0.5" });
      document.getElementById('tr7').innerHTML = '';
    } 
  });
  $('#vehicle8').change(function () {
    if ($(this).is(":checked")) {
      //$('.label1').css({ "opacity": "0.5" });
      document.getElementById('tr8').innerHTML = '';
    } 
  });
  $('#vehicle8').change(function () {
    if ($(this).is(":checked")) {
      //$('.label1').css({ "opacity": "0.5" });
      document.getElementById('tr8').innerHTML = '';
    } 
  });
  $('#v1').change(function () {
    if ($(this).is(":checked")) {
      //$('.label1').css({ "opacity": "0.5" });
      document.getElementById('alltr1').innerHTML = '';
    } 
  });
  $('#v2').change(function () {
    if ($(this).is(":checked")) {
      //$('.label1').css({ "opacity": "0.5" });
      document.getElementById('alltr2').innerHTML = '';
    } 
  });
  $('#v3').change(function () {
    if ($(this).is(":checked")) {
      //$('.label1').css({ "opacity": "0.5" });
      document.getElementById('alltr3').innerHTML = '';
    } 
  });
  $('#v4').change(function () {
    if ($(this).is(":checked")) {
      //$('.label1').css({ "opacity": "0.5" });
      document.getElementById('alltr4').innerHTML = '';
    } 
  });
  $('#v5').change(function () {
    if ($(this).is(":checked")) {
      //$('.label1').css({ "opacity": "0.5" });
      document.getElementById('alltr5').innerHTML = '';
    } 
  });
  $('#v6').change(function () {
    if ($(this).is(":checked")) {
      //$('.label1').css({ "opacity": "0.5" });
      document.getElementById('alltr6').innerHTML = '';
    } 
  });
  $('#v7').change(function () {
    if ($(this).is(":checked")) {
      //$('.label1').css({ "opacity": "0.5" });
      document.getElementById('alltr7').innerHTML = '';
    } 
  });
  $('#v8').change(function () {
    if ($(this).is(":checked")) {
      //$('.label1').css({ "opacity": "0.5" });
      document.getElementById('alltr8').innerHTML = '';
    } 
  });
  $('#v9').change(function () {
    if ($(this).is(":checked")) {
      //$('.label1').css({ "opacity": "0.5" });
      document.getElementById('alltr9').innerHTML = '';
    } 
  });
  $('#v1').change(function () {
    if ($(this).is(":checked")) {
      //$('.label1').css({ "opacity": "0.5" });
      document.getElementById('alltr1').innerHTML = '';
    } 
  });
  $('#v10').change(function () {
    if ($(this).is(":checked")) {
      //$('.label1').css({ "opacity": "0.5" });
      document.getElementById('alltr10').innerHTML = '';
    } 
  });
  $('#v11').change(function () {
    if ($(this).is(":checked")) {
      //$('.label1').css({ "opacity": "0.5" });
      document.getElementById('alltr11').innerHTML = '';
    } 
  });
  $('#v12').change(function () {
    if ($(this).is(":checked")) {
      //$('.label1').css({ "opacity": "0.5" });
      document.getElementById('alltr12').innerHTML = '';
    } 
  });
  $('#v13').change(function () {
    if ($(this).is(":checked")) {
      //$('.label1').css({ "opacity": "0.5" });
      document.getElementById('alltr13').innerHTML = '';
    } 
  });
  $('#v14').change(function () {
    if ($(this).is(":checked")) {
      //$('.label1').css({ "opacity": "0.5" });
      document.getElementById('alltr14').innerHTML = '';
    } 
  });
  $('#v15').change(function () {
    if ($(this).is(":checked")) {
      //$('.label1').css({ "opacity": "0.5" });
      document.getElementById('alltr15').innerHTML = '';
    } 
  });
  $('#v16').change(function () {
    if ($(this).is(":checked")) {
      //$('.label1').css({ "opacity": "0.5" });
      document.getElementById('alltr16').innerHTML = '';
    } 
  });
  $('#v17').change(function () {
    if ($(this).is(":checked")) {
      //$('.label1').css({ "opacity": "0.5" });
      document.getElementById('alltr17').innerHTML = '';
    } 
  });
  $('#v18').change(function () {
    if ($(this).is(":checked")) {
      //$('.label1').css({ "opacity": "0.5" });
      document.getElementById('alltr18').innerHTML = '';
    } 
  });
  $('#v19').change(function () {
    if ($(this).is(":checked")) {
      //$('.label1').css({ "opacity": "0.5" });
      document.getElementById('alltr19').innerHTML = '';
    } 
  });
  $('#v20').change(function () {
    if ($(this).is(":checked")) {
      //$('.label1').css({ "opacity": "0.5" });
      document.getElementById('alltr20').innerHTML = '';
    } 
  });
  $('#v21').change(function () {
    if ($(this).is(":checked")) {
      //$('.label1').css({ "opacity": "0.5" });
      document.getElementById('alltr21').innerHTML = '';
    } 
  });
  $('#v22').change(function () {
    if ($(this).is(":checked")) {
      //$('.label1').css({ "opacity": "0.5" });
      document.getElementById('alltr23').innerHTML = '';
    } 
  });
  $('#v24').change(function () {
    if ($(this).is(":checked")) {
      //$('.label1').css({ "opacity": "0.5" });
      document.getElementById('alltr24').innerHTML = '';
    } 
  });
  $('#v25').change(function () {
    if ($(this).is(":checked")) {
      //$('.label1').css({ "opacity": "0.5" });
      document.getElementById('alltr25').innerHTML = '';
    } 
  });
  $('#v26').change(function () {
    if ($(this).is(":checked")) {
      //$('.label1').css({ "opacity": "0.5" });
      document.getElementById('alltr26').innerHTML = '';
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

$('#savedata').on('click', function () {
  
  var date = new Date($('#dateObj').val());
  day = date.getDate();
  month = date.getMonth()+1;
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
  window.localStorage.setItem('taskName', taskName);
  window.localStorage.setItem('hour', hour);
  window.localStorage.setItem('minute', minute);
  window.localStorage.setItem('month',"0"+month);
  window.localStorage.setItem('day', "0"+day);
  window.localStorage.setItem('year', year);
  window.localStorage.setItem('physicalTask', physicalTask);
  
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

function search() {
  let searchText = $('#searchText').val().toUpperCase();
  let matches = 0;
  for(let i=0; i<$("#HomeTable label").length; i++) {
    if ($("#HomeTable label")[i].textContent.toUpperCase().includes(searchText)) {
      matches++;
    }
  }
  $("#result").text(matches + " matches found.");
  $("#searchText").val("");
}


function searchTable() {
  let searchText = $('#searchText1').val().toUpperCase();
  let matches = 0;
  for(let i=0; i<$("#HomeTable1 label").length; i++) {
    if ($("#HomeTable1 label")[i].textContent.toUpperCase().includes(searchText)) {
      matches++;
    }
  }
  for(let i=0; i<$("#HomeTable2 label").length; i++) {
    if ($("#HomeTable2 label")[i].textContent.toUpperCase().includes(searchText)) {
      matches++;
    }
  }
  for(let i=0; i<$("#HomeTable3 label").length; i++) {
    if ($("#HomeTable3 label")[i].textContent.toUpperCase().includes(searchText)) {
      matches++;
    }
  }
  for(let i=0; i<$("#HomeTable4 label").length; i++) {
    if ($("#HomeTable4 label")[i].textContent.toUpperCase().includes(searchText)) {
      matches++;
    }
  }
  $("#result_alltasks").text(matches + " matches found.");
  $("#searchText1").val("");
}

  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();

  today = mm + '/' + dd + '/' + yyyy;
  $("#currentday").html(today);
  var item1 = window.localStorage.getItem('taskName');
  var item2 = window.localStorage.getItem('hour');
  var item3 = window.localStorage.getItem('minute');
  var item4 = window.localStorage.getItem('month');
  var item5 = window.localStorage.getItem('day');
  var item6 = window.localStorage.getItem('year');

  if(item4 + '/' + item5 + '/' + item6 == today) {
    $('#allTasks').html("<tr><th scope='row'><input type='checkbox' id='v12' name='v12' value='Bike'></th><td><label class='label1' for='v12'>"+item1+"</label></td><td class='label1'>"+item2+"."+item3+" hr</td></tr>");
  }


  var selected1;
  var selected2;
  $("#datepicker1").on("change",function(){
    selected1 = $(this).val();
    //alert(selected);
  });
  $("#datepicker2").on("change",function(){
    selected2 = $(this).val();
    //alert(selected);
  });

  $("#dateSubmit").on("click", function(){

    if(new Date($('#date1').html()) >= new Date(selected1) && new Date($('#date1').html()) <= new Date(selected2)) {
      $("#allTasks").css("display","none");
      $("#allTasks3").css("display","none");
      $("#allTasks4").css("display","none");
      $("#allTasks5").css("display","none");
      if(new Date($('#date2').html()) >= new Date(selected1) && new Date($('#date2').html()) <= new Date(selected2)) {
        $("#allTasks3").css("display","block");
        $("#allTasks4").css("display","none");
        $("#allTasks5").css("display","none");
        if(new Date($('#date3').html()) >= new Date(selected1) && new Date($('#date3').html()) <= new Date(selected2)) {
        
        
          $("#allTasks4").css("display","block");
          $("#allTasks5").css("display","none");
        }
        if(new Date($('#date4').html()) >= new Date(selected1) && new Date($('#date4').html()) <= new Date(selected2)) {
          $("#allTasks5").css("display","block");
        }
        
      }
    } else if(new Date($('#date2').html()) >= new Date(selected1) && new Date($('#date2').html()) <= new Date(selected2)) {
      $("#allTasks").css("display","none");
      $("#allTasks2").css("display","none");
      $("#allTasks4").css("display","none");
      $("#allTasks5").css("display","none");
      if(new Date($('#date3').html()) >= new Date(selected1) && new Date($('#date3').html()) <= new Date(selected2)) {
        
        
        $("#allTasks4").css("display","block");
        $("#allTasks5").css("display","none");
      }
      if(new Date($('#date4').html()) >= new Date(selected1) && new Date($('#date4').html()) <= new Date(selected2)) {
        $("#allTasks5").css("display","block");
      }
    } else if(new Date($('#date3').html()) >= new Date(selected1) && new Date($('#date3').html()) <= new Date(selected2)) {
      $("#allTasks").css("display","none");
      $("#allTasks2").css("display","none");
      $("#allTasks3").css("display","none");
      $("#allTasks5").css("display","none");
      if(new Date($('#date4').html()) >= new Date(selected1) && new Date($('#date4').html()) <= new Date(selected2)) {
        $("#allTasks5").css("display","block");
      }
    } else if(new Date($('#date4').html()) >= new Date(selected1) && new Date($('#date4').html()) <= new Date(selected2)) {
      $("#allTasks").css("display","none");
      $("#allTasks2").css("display","none");
      $("#allTasks3").css("display","none");
      $("#allTasks4").css("display","none");
    }

    // if(new Date($('#date1').html()) >= new Date(selected1) && new Date($('#date2').html()) <= new Date(selected2)) {
    //   $("#allTasks").css("display","none");
    //   //$("#allTasks2").css("display","block");
    //   //$("#allTasks3").css("display","block");
    //   $("#allTasks4").css("display","none");
    //   $("#allTasks5").css("display","none");
    // }

    // if($('#date1').html() == selected1 && $('#date3').html() == selected2) {
    //   $("#allTasks").css("display","none");
    //   //$("#allTasks2").css("display","block");
    //   //$("#allTasks3").css("display","block");
    //   //$("#allTasks4").css("display","none");
    //   $("#allTasks5").css("display","none");
    // }
    // if($('#date1').html() == selected1 && $('#date4').html() == selected2) {
    //   $("#allTasks").css("display","none");
    //   //$("#allTasks2").css("display","block");
    //   //$("#allTasks3").css("display","block");
    //   //$("#allTasks4").css("display","none");
    //   //$("#allTasks5").css("display","none");
    // }
    // if($('#date2').html() == selected1 && $('#date3').html() == selected2) {
    //   $("#allTasks").css("display","none");
    //   $("#allTasks2").css("display","none");
    //   //$("#allTasks3").css("display","block");
    //   //$("#allTasks4").css("display","none");
    //   $("#allTasks5").css("display","none");
    // }
    // if($('#date3').html() == selected1 && $('#date4').html() == selected2) {
    //   $("#allTasks").css("display","none");
    //   $("#allTasks2").css("display","none");
    //   $("#allTasks3").css("display","none");
    //   //$("#allTasks4").css("display","none");
    //   //$("#allTasks5").css("display","none");
    // }
    // if($('#date2').html() == selected1 && $('#date4').html() == selected2) {
    //   $("#allTasks").css("display","none");
    //   $("#allTasks2").css("display","none");
    //     //$("#allTasks3").css("display","none");
    //   //$("#allTasks4").css("display","none");
    //   //$("#allTasks5").css("display","none");
    // }
  });

  


