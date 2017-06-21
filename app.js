//
// 'use strict';
// //total click counter
// var totalClicks = 0;
// //all products
// var products = [];
// //products painted last
// var prodLast = [];
// //products to be painted
// var prodNew = [];
// //image container
// var picWheel = document.getElementById('imgPick');
//
// //product object
// function Product(name, path) {
//   this.name = name;
//   this.path = path;
//   this.clicks = 0;
//   this.views = 0;
//   this.conversion = 0;
//   products.push(this);
// }
//
// function calcConversion() {
//   for (var i = 0; i < products.length; i++) {
//     if (products[i].views === 0) {
//       products[i].conversion = 'NA';
//     } else {
//       products[i].conversion = products[i].clicks / products[i].views;
//     }
//   }
// }
//
// function checkQ(array, value) {
//   for (var i = 0; i < array.length; i++) {
//     if (value === array[i]) {
//       return false;
//     }
//   }
//   return true;
// }
//
// function getImage() {
//   prodNew = [];
//   while (prodNew.length < 3) {
//     var select = Math.floor(Math.random() * (products.length));
//     if (checkQ(prodNew, products[select]) && checkQ(prodLast, products[select])) {
//       prodNew.push(products[select]);
//       products[select].views++;
//     }
//   }
//   prodLast = prodNew;
// }
//
// function handleClick(event) {
//   for (var i = 0; i < prodNew.length; i++) {
//     if (event.target.id === prodNew[i].name) {
//       prodNew[i].clicks++;
//       totalClicks++;
//       var remEL = document.getElementById('imgPick');
//       while (remEL.firstChild) {
//         remEL.removeChild(remEL.firstChild);
//       }
//       if (totalClicks === 24) {
//         var remEL = document.getElementById('imgPick');
//         while (remEL.firstChild) {
//           remEL.removeChild(remEL.firstChild);
//         }
//         calcConversion();
//         picWheel.removeEventListener('click', handleClick);
//         var secEl = document.createElement('section');
//         secEl.id = 'results';
//         var h2El = document.createElement('h2');
//         h2El.textContent = 'Results';
//         secEl.appendChild(h2El);
//         var ulEl = document.createElement('ul');
//         for (var i = 0; i < products.length; i++) {
//           var liEl = document.createElement('li');
//           liEl.textContent = products[i].clicks + ' votes for ' + products[i].name + '.';
//           ulEl.appendChild(liEl);
//         }
//         secEl.appendChild(ulEl);
//         picWheel.appendChild(secEl);
//       } else {
//         render();
//         calcConversion();
//       }
//     }
//   }
// }
//
// function render() {
//   getImage();
//   for (var i = 0; i < prodNew.length; i++) {
//     var imgEl = document.createElement('img');
//     imgEl.src = prodNew[i].path;
//     imgEl.id = prodNew[i].name;
//     picWheel.appendChild(imgEl);
//   }
// }
//
// new Product('bag', 'img/bag.jpg');
// new Product('banana', 'img/banana.jpg');
// new Product('bathroom', 'img/bathroom.jpg');
// new Product('boots', 'img/boots.jpg');
// new Product('breakfast', 'img/breakfast.jpg');
// new Product('bubblegum', 'img/bubblegum.jpg');
// new Product('chair', 'img/chair.jpg');
// new Product('cthulhu', 'img/cthulhu.jpg');
// new Product('dogduck', 'img/dog-duck.jpg');
// new Product('dragon', 'img/dragon.jpg');
// new Product('pen', 'img/pen.jpg');
// new Product('petSweep', 'img/pet-sweep.jpg');
// new Product('scissors', 'img/scissors.jpg');
// new Product('shark', 'img/shark.jpg');
// new Product('sweep', 'img/sweep.png');
// new Product('tauntaun', 'img/tauntaun.jpg');
// new Product('unicorn', 'img/unicorn.jpg');
// new Product('usb', 'img/usb.gif');
// new Product('waterCan', 'img/water-can.jpg');
// new Product('wineGlass', 'img/wine-glass.jpg');
// render();
//
// picWheel.addEventListener('click', handleClick);
//



'use strict';

//Constructor Function to make objects for each image..
// needs to include a way to track how often it's popped up and how often it was clicked.
var totalClicks = 0;
var oldPics = [];
var newPics = [];
var imgArray = [];
var body = document.getElementById('body');
var randomNum = Math.floor(Math.random() * imgArray.length);
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

var barData = {
  labels: imgArray,
  datasets : [
    {
      data : imgArray[0].timesAppeared,
      fillColor : "#48A497",
      strokeColor : "#48A4D1",
    },
    {
      data : imgArray[0].timesClicked,
      fillColor : "rgba(73,188,170,0.4)",
      strokeColor : "rgba(72,174,209,0.4)",
    }
  ]
}


function drawChart() {
  var surveyResults = document.getElementById('surveyResults').getContext('2d');
  surveyChart = new Chart(surveyResults, {
    type: 'bar',
    data: barData,
  });
};
