'use strict';

//Constructor Function to make objects for each image..
// needs to include a way to track how often it's popped up and how often it was clicked.
var totalClicks = 0;
var oldPics = [];
var newPics = [];
var imgArray = [];
var body = document.getElementById('body');
var randomNum = Math.floor(Math.random() * imgArray.length);
var chartDrawn = true;
// var img1 = document.getElementById('img1');
// var img2 = document.getElementById('img2');
// var img3 = document.getElementById('img3');

function imgMaker(name, path) {
  this.name = name;
  this.path = path;
  this.timesAppeared = 0;
  this.timesClicked = 0;
  this.percent = 0;
  imgArray.push(this);
};

function checkPercent () {
  for (var i = 0; i < imgArray.length; i++) {
    if (imgArray[i].timesAppeared === 0) {
      imgArray[i].timesAppeared = 0;
    } else {
      imgArray[i].percent = imgArray[i].timesClicked / imgArray[i].timesAppeared;
    }
  }
}

function checkPics (array, value) {
  for (var i = 0; i < imgArray.length; i++) {
    if (value === array[i]) {
      return false;
    }
  } return true;
}


function getImg () {
  newPics = [];
  while (newPics.length < 3) {
    var randomNum = Math.floor(Math.random() * imgArray.length);
    if (checkPics(newPics,imgArray[randomNum]) && checkPics(oldPics,imgArray[randomNum])) {
      newPics.push(imgArray[randomNum]);
      imgArray[randomNum].timesAppeared ++;
    }
  } oldPics = newPics;
}

function datNewNew() {
  getImg();
  for (var i = 0; i < newPics.length; i++) {
    var imgEl = document.createElement('img');
    imgEl.src = newPics[i].path;
    imgEl.id = newPics[i].name;
    body.appendChild(imgEl);
  }
}


function clickHandler (event) {
  for (var i = 0; i < newPics.length; i++) {
    if (event.target.id == newPics[i].name) {
      newPics[i].timesClicked ++;
      totalClicks ++;
      var remImg = document.getElementById('body')
      while (remImg.firstChild) {
        remImg.removeChild(remImg.firstChild)
      }
      if (totalClicks === 25) {
          var remEL = document.getElementById('body');
          while (remEL.firstChild) {
            remEL.removeChild(remEL.firstChild);
          }
          checkPercent();
          body.removeEventListener('click', clickHandler);
          var secEl = document.createElement('section');
          secEl.id = 'results';
          var h2El = document.createElement('h2');
          h2El.textContent = 'Results';
          secEl.appendChild(h2El);
          var ulEl = document.createElement('ul');
          for (var i = 0; i < imgArray.length; i++) {
            var liEl = document.createElement('li');
            liEl.textContent = imgArray[i].timesClicked + ' votes for ' + imgArray[i].name + '.';
            ulEl.appendChild(liEl);
          }
          secEl.appendChild(ulEl);
          body.appendChild(secEl);
        } else {
          datNewNew();
          checkPercent();
        }
      }
    }
  }



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

datNewNew();

body.addEventListener('click', clickHandler);






var labelData = [];
var actualData = [];


for (var i = 0; i < imgArray.length; i++) {
  labelData.push(imgArray[i].name);
  actualData.push(imgArray[i]).timesClicked;
}


var data = {
  labels: labelData, // titles array we declared earlier
  datasets: [
    {
      data: actualData, // votes array we declared earlier
      backgroundColor: [
        'bisque',
        'darkgray',
        'burlywood',
        'lightblue',
        'navy'
      ],
      hoverBackgroundColor: [
        'purple',
        'purple',
        'purple',
        'purple',
        'purple'
      ]
    }]
};


function drawChart() {
  var ctx = document.getElementById('surveyResults').getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: {
      responsive: false,
      animation: {
        duration: 1000,
        easing: 'easeOutBounce'
      }
    },
    scales: {
      yAxes: [{
        ticks: {
          max: 10,
          min: 0,
          stepSize: 1.0
        }
      }]
    }
  });
  chartDrawn = true;
};
