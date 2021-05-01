// var username  = $('#username').attr('value');
// window.localStorage.setItem('username',username);



$("#LoginButton").click(function() {
    if($("#name2").val() == "etf@gmail.com" && $("#pass2").val() == "frog") {
        window.location.replace("https://etf-eatthefrog.github.io/today.html");
        return false;
    
    } else {
        alert("Username & Password is incorrect");
    }
});

