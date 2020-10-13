  /* Login form */
  
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

/* Blog selection */

var noone = document.querySelector(".list-group #first");
var notwo = document.querySelector(".list-group #second");
var nothree = document.querySelector(".list-group #third");
var nofour = document.querySelector(".list-group #fourth");
var nofive = document.querySelector(".list-group #fifth");
var nosix = document.querySelector(".list-group #sixth");
var noseven = document.querySelector(".list-group #seventh");
var noeight = document.querySelector(".list-group #eighth");
var nonine = document.querySelector(".list-group #nineth");
var noten = document.querySelector(".list-group #tenth");

  
function first() {
  notwo.classList.remove("active");
  nothree.classList.remove("active");
  nofour.classList.remove("active");
  nofive.classList.remove("active");
  nosix.classList.remove("active");
  noseven.classList.remove("active");
  noeight.classList.remove("active");
  nonine.classList.remove("active");
  noten.classList.remove("active");
  noone.classList.add("active");
  document.getElementById("selectedBlog").innerHTML = "Blog";
}
function second() {
  noone.classList.remove("active");
  nothree.classList.remove("active");
  nofour.classList.remove("active");
  nofive.classList.remove("active");
  nosix.classList.remove("active");
  noseven.classList.remove("active");
  noeight.classList.remove("active");
  nonine.classList.remove("active");
  noten.classList.remove("active");
  notwo.classList.add("active");
  document.getElementById("selectedBlog").innerHTML = "Hrana";
}
function third() {
  noone.classList.remove("active");
  notwo.classList.remove("active");
  nofour.classList.remove("active");
  nofive.classList.remove("active");
  nosix.classList.remove("active");
  noseven.classList.remove("active");
  noeight.classList.remove("active");
  nonine.classList.remove("active");
  noten.classList.remove("active");
  nothree.classList.add("active");
  document.getElementById("selectedBlog").innerHTML = "Sport";
}
function fourth() {
  noone.classList.remove("active");
  notwo.classList.remove("active");
  nothree.classList.remove("active");
  nofive.classList.remove("active");
  nosix.classList.remove("active");
  noseven.classList.remove("active");
  noeight.classList.remove("active");
  nonine.classList.remove("active");
  noten.classList.remove("active");
  nofour.classList.add("active");
  document.getElementById("selectedBlog").innerHTML = "Music";
}
function fifth() {
  noone.classList.remove("active");
  notwo.classList.remove("active");
  nothree.classList.remove("active");
  nofour.classList.remove("active");
  nosix.classList.remove("active");
  noseven.classList.remove("active");
  noeight.classList.remove("active");
  nonine.classList.remove("active");
  noten.classList.remove("active");
  nofive.classList.add("active");
  document.getElementById("selectedBlog").innerHTML = "Undefined blog";
}
function sixth() {
  noone.classList.remove("active");
  notwo.classList.remove("active");
  nothree.classList.remove("active");
  nofour.classList.remove("active");
  nofive.classList.remove("active");
  noseven.classList.remove("active");
  noeight.classList.remove("active");
  nonine.classList.remove("active");
  noten.classList.remove("active");
  nosix.classList.add("active");
  document.getElementById("selectedBlog").innerHTML = "Undefined blog";
}
function seventh() {
  noone.classList.remove("active");
  notwo.classList.remove("active");
  nothree.classList.remove("active");
  nofour.classList.remove("active");
  nofive.classList.remove("active");
  nosix.classList.remove("active");
  noeight.classList.remove("active");
  nonine.classList.remove("active");
  noten.classList.remove("active");
  noseven.classList.add("active");
  document.getElementById("selectedBlog").innerHTML = "Undefined blog";
}
function eighth() {
  noone.classList.remove("active");
  notwo.classList.remove("active");
  nothree.classList.remove("active");
  nofour.classList.remove("active");
  nofive.classList.remove("active");
  nosix.classList.remove("active");
  noseven.classList.remove("active");
  nonine.classList.remove("active");
  noten.classList.remove("active");
  noeight.classList.add("active");
  document.getElementById("selectedBlog").innerHTML = "Undefined blog";
}
function nineth() {
  noone.classList.remove("active");
  notwo.classList.remove("active");
  nothree.classList.remove("active");
  nofour.classList.remove("active");
  nofive.classList.remove("active");
  nosix.classList.remove("active");
  noseven.classList.remove("active");
  noeight.classList.remove("active");
  noten.classList.remove("active");
  nonine.classList.add("active");
  document.getElementById("selectedBlog").innerHTML = "Undefined blog";
}
function tenth() {
  noone.classList.remove("active");
  notwo.classList.remove("active");
  nothree.classList.remove("active");
  nofour.classList.remove("active");
  nofive.classList.remove("active");
  nosix.classList.remove("active");
  noseven.classList.remove("active");
  noeight.classList.remove("active");
  nonine.classList.remove("active");
  noten.classList.add("active");
  document.getElementById("selectedBlog").innerHTML = "Undefined blog";
}

function postComment() {

}


function recentBlogOn() {
  /* show */
}
function homePage() {
  /* show */
}