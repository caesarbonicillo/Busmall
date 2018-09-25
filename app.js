'use strict';


Product.allProducts = []; // this is my product list of picture Items
var imgElement = document.getElementById('product'); 
var imgElementTwo = document.getElementById('productTwo');
var imgElementThree = document.getElementById('productThree');

function Product(filePath, productName){ 
  this.imgSource = filePath;
  this.productName = productName;
  Product.allProducts.push(this);
}

Product.prototype.randomNumber = function (randomNumber) //I THINK I HAVE TO USE A PROTOTYPE HERE
{
function randomProduct()
{
  var randomNumber = Math.floor(Math.random()* Product.allProducts.length);
  imgElement.src = Product.allProducts[randomNumber].imgSource;
  imgElement.alt = Product.allProducts[randomNumber].productName;
}

function randomProductTwo()
{
  var randomNumberTwo = Math.floor(Math.random()* Product.allProducts.length);
  imgElementTwo.src = Product.allProducts[randomNumberTwo].imgSource;
  imgElementTwo.alt = Product.allProducts[randomNumberTwo].productName;
  
} 

function randomProductThree()
{
  var randomNumberThree = Math.floor(Math.random()* Product.allProducts.length);
  imgElementThree.src = Product.allProducts[randomNumberThree].imgSource;
  imgElementThree.alt = Product.allProducts[randomNumberThree].productName;
}
}
imgElement.addEventListener('click', randomProduct)
imgElementTwo.addEventListener('click', randomProductTwo)
imgElementThree.addEventListener('click', randomProductThree)

new Product ('img/bag.jpg', 'bag'); // new instancating a new object
new Product ('img/banana.jpg', 'banana');
new Product ('img/bathroom.jpg', 'bathroom');
new Product ('img/boots.jpg', 'boots');
new Product ('img/breakfast.jpg', 'breakfast');
new Product ('img/bubblegum.jpg', 'bubblegum');
new Product ('img/chair.jpg', 'chair');
new Product ('img/cthulhu.jpg', 'cthulhu.jpg');
new Product ('img/dog-duck.jpg', 'dog-duck');
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
randomProductTwo();
randomProductThree();