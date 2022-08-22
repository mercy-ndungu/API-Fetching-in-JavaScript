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
    list.style.cssText = `
    display:flex;
    style: none;
    padding:10px;
    `
    products.appendChild(list)
})
})
.catch(function(error){
 console.log('error',error);
});
document.getElementById("products").style.cssText = `
  display: flex; 
`;


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
    fruitList.style.cssText = `
    display:flex;
    style: none;
    padding:10px;
    `
    fruits.appendChild(fruitList)
})
})
.catch(function(error){
 console.log('error',error);
});
document.getElementById("fruList").style.cssText = `
  display: flex; 
`;


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
    veggieList.style.cssText = `
    display:flex;
    style: none;
    padding:10px;
    `
    vegetables.appendChild(veggieList)
})
})
.catch(function(error){
 console.log('error',error);
});
document.getElementById("vegList").style.cssText = `
  display: flex; 
`;



