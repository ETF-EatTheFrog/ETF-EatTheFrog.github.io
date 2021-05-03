// var username  = $('#username').attr('value');
// window.localStorage.setItem('username',username);



$("#LoginButton").click(function() {
    if($("#name2").val() == "etf@gmail.com" && $("#pass2").val() == "frog") {
        window.location.replace("https://etf-eatthefrog.github.io/today.html");
        return false;
    
    } else if($("#name2").val() == localStorage.getItem("name1") && $("#pass2").val() == localStorage.getItem("pass1"))  {
        window.location.replace("https://etf-eatthefrog.github.io/today.html");
        return false;
    } else {
        alert("Email and Password do not match");
    }
});

$("#SignupButton").click(function() {
    window.location.replace("https://etf-eatthefrog.github.io/signup.html");
});

$("#SignupLogin").click(function() {
    window.location.replace("https://etf-eatthefrog.github.io/Login.html");
});



$("#SignupPageButton").click(function() {
    var str1 = $("#name2").val();
    var str2 = $("#pass2").val();
    localStorage.setItem("name1", str1);
    localStorage.setItem("pass1", str2);
    alert("Successfully signed up please login to go to homepage");

});


