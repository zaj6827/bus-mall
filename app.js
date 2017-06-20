'use strict';

//Constructor Function to make objects for each image..
// needs to include a way to track how often it's popped up and how often it was clicked.

var imgArray = [];
var pathArray = [];
var body = document.getElementById('body');
var img1 = document.getElementById('img1');
var img2 = document.getElementById('img2');
var img3 = document.getElementById('img3');
function imgMaker(name, path) {
  this.path = path;
  this.name = name;
  this.timesAppeared = 0;
  this.timesClicked = 0;
  imgArray.push(this);
  pathArray.push(this.path);
};


new imgMaker('bag','img/bag.jpg');
new imgMaker('banana', 'img/banana.jpg');
new imgMaker('bathroom', 'img/bathroom.jpg');
new imgMaker('boots', 'img/boots.jpg');
new imgMaker('breakfast', 'img/breakfast.jpg');
new imgMaker('bubblegum', 'img/bubblegum.jpg');
new imgMaker('chair', 'img/chair.jpg');
new imgMaker('cthulhu', 'img/cthulhu.jpg');
new imgMaker('dog-duck', 'img/dog-duck.jpg');
new imgMaker('dragon', 'img/dragon.jpg');
new imgMaker('pen', 'img/pen.jpg');
new imgMaker('pet-sweep', 'img/pet-sweep.jpg');
new imgMaker('scissors', 'img/scissors.jpg');
new imgMaker('shark', 'img/shark.jpg');
new imgMaker('sweep', 'img/sweep.png');
new imgMaker('tauntaun', 'img/tauntaun.jpg');
new imgMaker('Thumbs', 'img/Thumbs.db');
new imgMaker('unicorn', 'img/unicorn.jpg');
new imgMaker('usb', 'img/usb.gif');
new imgMaker('water-can', 'img/water-can.jpg');
new imgMaker('wine-glass', 'img/wine-glass.jpg');





//function for random picture..

function randomPic1() {
  var randomNum = Math.floor(Math.random() * imgArray.length);
  console.log(randomNum);
  document.getElementById('img1').src = pathArray[randomNum];
}
function randomPic2() {
  var randomNum = Math.floor(Math.random() * imgArray.length);
  console.log(randomNum);
  document.getElementById('img2').src = pathArray[randomNum];
}
function randomPic3() {
  var randomNum = Math.floor(Math.random() * imgArray.length);
  console.log(randomNum);
  document.getElementById('img3').src = pathArray[randomNum];
}
//method for the objects, this will be what populates the pictures.?????

//method for render, how the pictures show up on the webpage.
function renderNewPics () {
  randomPic1();
  randomPic2();
  while (img1.src === img2.src) {
    console.log('Match found. Rerolling.');
    randomPic1();
  }
  randomPic3();
  while (img1.src === img3.src || img2.src === img3.src) {
    console.log('Match found. Rerolling.');
    randomPic3();
  }
};



//event handler, this will add a tally to all pictures present, 1 tally to the img chosen, and repopulate the imgs with new choices for user.
function clickHandler (event) {
  console.log(event.target.id);
  renderNewPics();
};

//event listener, to tell us when something was clicked.
body.addEventListener('click', clickHandler);
