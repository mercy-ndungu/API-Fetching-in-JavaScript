fetch('http://localhost:5000/products')
.then(function(response) {
    return response.json();
})
.then(function(product) {
 console.log(product);

let products = document.getElementById('products')
product.forEach(prolist => {
    let list = document.createElement('li')
    list.innerText = `${prolist.name}`
    products.appendChild(list)
})
})
.catch(function(error){
 console.log('error',error);
});


fetch('http://localhost:5000/products/fruits')
.then(function(response) {
    return response.json();
})
.then(function(fruit) {
 console.log(fruit);

let fruits = document.getElementById('fruList')
fruit.forEach(fru => {
    let fruitList = document.createElement('li')
    fruitList.innerText = `${fru.name}`
    fruits.appendChild(fruitList)
})
})
.catch(function(error){
 console.log('error',error);
});


fetch('http://localhost:5000/products/vegetables')
.then(function(response) {
    return response.json();
})
.then(function(veggie) {
 console.log(veggie);

let vegetables = document.getElementById('vegList')
veggie.forEach(veg => {
    let veggieList = document.createElement('li')
    veggieList.innerText = `${veg.name}`
    vegetables.appendChild(veggieList)
})
})
.catch(function(error){
 console.log('error',error);
});



// fetch('http://localhost:5000/products')
// .then(function(response) {
//     return response.json();
// })
// .then(function(infos) {
//  console.log(infos);

// let myProduct = document.getElementById('fruList')
// infos.forEach(y => {
//     let productList = document.createElement('li')
//     productList.innerText = `${y.name}`
//     myProduct.appendChild(productList)
// })
// })
// .catch(function(error){
//  console.log('error',error);
// });
// fetch('http://localhost:5000/products')
// .then(function(response) {
//     return response.json();
// })
// .then(function(infos) {
//  console.log(infos);

// let myProduct = document.getElementById('fruList')
// infos.forEach(y => {
//     let productList = document.createElement('li')
//     productList.innerText = `${y.name}`
//     myProduct.appendChild(productList)
// })
// })
// .catch(function(error){
//  console.log('error',error);
// });