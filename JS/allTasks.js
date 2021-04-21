var item1 = window.localStorage.getItem('taskName');
var item2 = window.localStorage.getItem('hour');
var item3 = window.localStorage.getItem('minute');
var item4 = window.localStorage.getItem('month');
var item5 = window.localStorage.getItem('day');
var item6 = window.localStorage.getItem('year');

$('#allTasks').html("<div class='col-md-8 Tasks'><h4 style='margin-top: 38px;margin-left: 20px;'>"+item4+"/"+item5+"/"+item6+"</h4><div class='assignedTask'><table class='table margin-top-30'><tbody><tr><th scope='row'><input type='checkbox' id='vehicle1' name='vehicle1' value='Bike'></th><td><label class='label1' for='vehicle1'> "+item1+"</label></td><td class='label1'>"+item2+"."+item3+" hr</td></tr></tbody></table></div></div>");