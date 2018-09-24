'use strict';


Product.allProducts = []; // this is my product list of picture Items
//var imgElement = document.getElementById('product');
// var imgElement = document.getElementById('productTwo');
var imgElement = document.getElementById('productThree');

function Product(filePath, productName){ 
this.imgSource = filePath;
this.productName = productName;

Product.allProducts.push(this);
}


function randomProduct(){
  var randomNumber = Math.floor(Math.random()* Product.allProducts.length);
  imgElement.src = Product.allProducts[randomNumber].imgSource;
  imgElement.alt = Product.allProducts[randomNumber].productName;
  console.log(randomProduct);
}

imgElement.addEventListener('click', randomProduct)

new Product ('img/bag.jpg', 'bag'); // new instancating a new object
new Product ('img/banana.jpg', 'banana');
new Product ('img/bathroom.jpg', 'bathroom');
new Product ('img/boots.jpg', 'boots');
new Product ('img/breakfast.jpg', 'breakfast');
new Product ('img/bubblegum.jpg', 'bubblegum');
new Product ('img/chair.jpg', 'chair');
new Product ('img/cthulhu.jpg', 'cthulhu.jpg');
new Product ('img/dog-duckk.jpg', 'dog-duck');
new Product ('img/dragon.jpg', 'dragon');
new Product ('img/pen.jpg', 'pen');
new Product ('img/pet-sweep.jpg', 'pet-sweep');
new Product ('img/scissors.jpg', 'scissors');
new Product ('img/sweep.png', 'sweep');
new Product ('img/tauntaun.jpg', 'tauntaun');
new Product ('img/unicorn.jpg', 'unicorn');
new Product ('img/usb.gif', 'usb.gif');
new Product ('img/water-can.jpg', 'water-can');
new Product ('img/wine-glass.jpg', 'wine-glass');

randomProduct();