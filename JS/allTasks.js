var item1 = window.localStorage.getItem('taskName');
var item2 = window.localStorage.getItem('hour');
var item3 = window.localStorage.getItem('minute');
var item4 = window.localStorage.getItem('month');
var item5 = window.localStorage.getItem('day');
var item6 = window.localStorage.getItem('year');
var item7 = window.localStorage.getItem('physicalTask');

if(item1 != null) {
    if(item7 == true) {
        $('#TodaysTasks').html("<tr><th scope='row'><input type='checkbox' id='vehicle0' name='vehicle0' value='Bike'></th><td><label style='color: Teal;' class='label1' for='v0'> "+item1+"</label></td><td class='label1'>"+item2+"."+item3+" hr</td></tr>");
    } else {
        $('#TodaysTasks').html("<tbody><tr><th scope='row'><input type='checkbox' id='vehicle0' name='vehicle0' value='Bike'></th><td><label style='color: DarkMagenta;' class='label1' for='v0'> "+item1+"</label></td><td class='label1'>"+item2+"."+item3+" hr</td></tr>");
    }
}



var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;


if(item4 + '/' + item5 + '/' + item6 == today) {
    if(item1 != null) {
        if(item7 == true) {
            $('#TodaysTasks').html("<th scope='row'><input type='checkbox' id='v0' name='v0' value='Bike'></th><td><label style='color: Teal;cursor:pointer;' class='label1' for='v0'>"+item1+"</label></td><td class='label1'>"+item2+"."+item3+" hr</td>");
        } else {
            $('#TodaysTasks').html("<th scope='row'><input type='checkbox' id='v0' name='v0' value='Bike'></th><td><label style='color: DarkMagenta;cursor:pointer;' class='label1' for='v0'>"+item1+"</label></td><td class='label1'>"+item2+"."+item3+" hr</td>");
        }
    }
    
}
