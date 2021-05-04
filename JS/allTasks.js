var item1 = window.localStorage.getItem('taskName');
var item2 = window.localStorage.getItem('hour');
var item3 = window.localStorage.getItem('minute');
var item4 = window.localStorage.getItem('month');
var item5 = window.localStorage.getItem('day');
var item6 = window.localStorage.getItem('year');
var item7 = window.localStorage.getItem('physicalTask');

if(item7 == true) {
    $('#allTasks').html("<div class='col-md-8 Tasks'><h4 style='margin-top: 38px;margin-left: 20px;'>"+item4+"/"+item5+"/"+item6+"</h4><div class='assignedTask'><table class='table margin-top-30'><tbody><tr><th scope='row'><input type='checkbox' id='vehicle1' name='vehicle1' value='Bike'></th><td><label style='color: Teal;' class='label1' for='vehicle1'> "+item1+"</label></td><td class='label1'>"+item2+"."+item3+" hr</td></tr></tbody></table></div></div>");
} else {
    $('#allTasks').html("<div class='col-md-8 Tasks'><h4 style='margin-top: 38px;margin-left: 20px;'>"+item4+"/"+item5+"/"+item6+"</h4><div class='assignedTask'><table class='table margin-top-30'><tbody><tr><th scope='row'><input type='checkbox' id='vehicle1' name='vehicle1' value='Bike'></th><td><label style='color: DarkMagenta;' class='label1' for='vehicle1'> "+item1+"</label></td><td class='label1'>"+item2+"."+item3+" hr</td></tr></tbody></table></div></div>");
}


var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;


if("0"+item4 + '/' + "0"+item5 + '/' + item6 == today) {
    if(item7 == true) {
        $('#TodaysTasks').html("<th scope='row'><input type='checkbox' id='v12' name='v12' value='Bike'></th><td><label style='color: Teal;' class='label1' for='v12'>"+item1+"</label></td><td class='label1'>"+item2+"."+item3+" hr</td>");
    } else {
        $('#TodaysTasks').html("<th scope='row'><input type='checkbox' id='v12' name='v12' value='Bike'></th><td><label style='color: DarkMagenta;' class='label1' for='v12'>"+item1+"</label></td><td class='label1'>"+item2+"."+item3+" hr</td>");
    }
}