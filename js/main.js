  function validateUser() {
    var x = document.forms["myUsername"]["username"].value;
    var y = document.forms["myPass"]["pass"].value;
    if (x == "admin" && y == "admin") {
      alert("Succesfully logged on");
      loggedOn();
      checking();
      console.log(x, y);
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
  var logg = document.getElementById("loging");

  function loggedOn() {
      logg.innerHTML = "Admin";
      }
      
        function checking() {
              if (logg = "Admin") {
                console.log('editovanje');
                document.querySelector('#noOne').style.display = 'block';
                document.querySelector('#noTwo').style.display = 'block';
                document.querySelector('#noThree').style.display = 'block';
                document.querySelector('#noFour').style.display = 'block';
                document.querySelector('#noFive').style.display = 'block';
                document.querySelector('#noSix').style.display = 'block';
                document.querySelector('#noSeven').style.display = 'block';
                document.querySelector('#noEight').style.display = 'block';
                document.querySelector('#noNine').style.display = 'block';
                document.querySelector('#noTen').style.display = 'block';
              }
            }

            
function recentBlogOn() {
  /* show */
}
function homePage() {
  /* show */
}