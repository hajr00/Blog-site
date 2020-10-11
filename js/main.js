  function validateUser() {
    var x = document.forms["myUsername"]["username"].value;
    var y = document.forms["myPass"]["pass"].value;
    if (x == "admin" && y == "admin") {
      alert("Succesfully logged on");
      loggedOn();
    } else if (x == "") {
        alert("Username not entered!");
        return false;
    } else if (y == "") {
        alert("Password not entered!");
        return false;
    } else {
        alert("User not found!");
        return false;
    }
  }

  function loggedOn() {
      var logi = document.getElementById("loging").innerHTML = "Admin";
      if (logi == 'Admin') {
        document.getElementsByClassName('.list-group.item').innerHTML = "Hello";
      }
}
