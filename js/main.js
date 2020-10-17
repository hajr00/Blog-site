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
  notwo.classList.remove("activee");
  nothree.classList.remove("activee");
  nofour.classList.remove("activee");
  nofive.classList.remove("activee");
  nosix.classList.remove("activee");
  noseven.classList.remove("activee");
  noeight.classList.remove("activee");
  nonine.classList.remove("activee");
  noten.classList.remove("activee");
  noone.classList.add("activee");
  document.getElementById("selectedBlog").innerHTML = "Blog";
}
function second() {
  noone.classList.remove("activee");
  nothree.classList.remove("activee");
  nofour.classList.remove("activee");
  nofive.classList.remove("activee");
  nosix.classList.remove("activee");
  noseven.classList.remove("activee");
  noeight.classList.remove("activee");
  nonine.classList.remove("activee");
  noten.classList.remove("activee");
  notwo.classList.add("activee");
  document.getElementById("selectedBlog").innerHTML = "Hrana";
}
function third() {
  noone.classList.remove("activee");
  notwo.classList.remove("activee");
  nofour.classList.remove("activee");
  nofive.classList.remove("activee");
  nosix.classList.remove("activee");
  noseven.classList.remove("activee");
  noeight.classList.remove("activee");
  nonine.classList.remove("activee");
  noten.classList.remove("activee");
  nothree.classList.add("activee");
  document.getElementById("selectedBlog").innerHTML = "Sport";
}
function fourth() {
  noone.classList.remove("activee");
  notwo.classList.remove("activee");
  nothree.classList.remove("activee");
  nofive.classList.remove("activee");
  nosix.classList.remove("activee");
  noseven.classList.remove("activee");
  noeight.classList.remove("activee");
  nonine.classList.remove("activee");
  noten.classList.remove("activee");
  nofour.classList.add("activee");
  document.getElementById("selectedBlog").innerHTML = "Music";
}
function fifth() {
  noone.classList.remove("activee");
  notwo.classList.remove("activee");
  nothree.classList.remove("activee");
  nofour.classList.remove("activee");
  nosix.classList.remove("activee");
  noseven.classList.remove("activee");
  noeight.classList.remove("activee");
  nonine.classList.remove("activee");
  noten.classList.remove("activee");
  nofive.classList.add("activee");
  document.getElementById("selectedBlog").innerHTML = "Undefined blog";
}
function sixth() {
  noone.classList.remove("activee");
  notwo.classList.remove("activee");
  nothree.classList.remove("activee");
  nofour.classList.remove("activee");
  nofive.classList.remove("activee");
  noseven.classList.remove("activee");
  noeight.classList.remove("activee");
  nonine.classList.remove("activee");
  noten.classList.remove("activee");
  nosix.classList.add("activee");
  document.getElementById("selectedBlog").innerHTML = "Undefined blog";
}
function seventh() {
  noone.classList.remove("activee");
  notwo.classList.remove("activee");
  nothree.classList.remove("activee");
  nofour.classList.remove("activee");
  nofive.classList.remove("activee");
  nosix.classList.remove("activee");
  noeight.classList.remove("activee");
  nonine.classList.remove("activee");
  noten.classList.remove("activee");
  noseven.classList.add("activee");
  document.getElementById("selectedBlog").innerHTML = "Undefined blog";
}
function eighth() {
  noone.classList.remove("activee");
  notwo.classList.remove("activee");
  nothree.classList.remove("activee");
  nofour.classList.remove("activee");
  nofive.classList.remove("activee");
  nosix.classList.remove("activee");
  noseven.classList.remove("activee");
  nonine.classList.remove("activee");
  noten.classList.remove("activee");
  noeight.classList.add("activee");
  document.getElementById("selectedBlog").innerHTML = "Undefined blog";
}
function nineth() {
  noone.classList.remove("activee");
  notwo.classList.remove("activee");
  nothree.classList.remove("activee");
  nofour.classList.remove("activee");
  nofive.classList.remove("activee");
  nosix.classList.remove("activee");
  noseven.classList.remove("activee");
  noeight.classList.remove("activee");
  noten.classList.remove("activee");
  nonine.classList.add("activee");
  document.getElementById("selectedBlog").innerHTML = "Undefined blog";
}
function tenth() {
  noone.classList.remove("activee");
  notwo.classList.remove("activee");
  nothree.classList.remove("activee");
  nofour.classList.remove("activee");
  nofive.classList.remove("activee");
  nosix.classList.remove("activee");
  noseven.classList.remove("activee");
  noeight.classList.remove("activee");
  nonine.classList.remove("activee");
  noten.classList.add("activee");
  document.getElementById("selectedBlog").innerHTML = "Undefined blog";
}

function postComment() {

}
function recentBlogOn() {
  
}
function homePage() {
  /* show */
}

/* BLOGS SELECTION */ 

function focusedBlog() {
  document.getElementById("first").addEventListener("click", firstBlog);
  document.getElementById("second").addEventListener("click", secondBlog);
  document.getElementById("third").addEventListener("click", thirdBlog);
  document.getElementById("fourth").addEventListener("click", fourthBlog);
  document.getElementById("fifth").addEventListener("click", fifthBlog);
  document.getElementById("sixth").addEventListener("click", sixthBlog);
  document.getElementById("seventh").addEventListener("click", seventhBlog);
  document.getElementById("eighth").addEventListener("click", eighthBlog);
  document.getElementById("nineth").addEventListener("click", ninethBlog);
  document.getElementById("tenth").addEventListener("click", tenthBlog);
}
function homePage() {
  document.querySelector('#landingpage').style.display = 'inline-block';
  document.querySelector('#blog').style.display = 'none';
}

function firstBlog() {
  document.querySelector('#landingpage').style.display = 'none';
  document.querySelector('#blog').style.display = 'block';
}
function secondBlog () {
  document.querySelector('#landingpage').style.display = 'none';
}
function thirdBlog () {
  document.querySelector('#landingpage').style.display = 'none';
}
function fourthBlog () {
  document.querySelector('#landingpage').style.display = 'none';
}
function fifthBlog () {
  document.querySelector('#landingpage').style.display = 'none';
}
function sixthBlog () {
  document.querySelector('#landingpage').style.display = 'none';
}
function seventhBlog () {
  document.querySelector('#landingpage').style.display = 'none';
}
function eighthBlog () {
  document.querySelector('#landingpage').style.display = 'none';
}
function ninethBlog () {
  document.querySelector('#landingpage').style.display = 'none';
}
function tenthBlog () {
  document.querySelector('#landingpage').style.display = 'none';
}
focusedBlog();