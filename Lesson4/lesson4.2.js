var jacket = {
    size: 50,
    color: 'голубой',
    price: 670,
    quantity: 6
    }

var jeans = {
    size: 50,
    color: 'голубые',
    price: 450,
    quantity: 2
}
var hat = {
    size: 5,
    color: 'желтая',
    price: 150,
    quantity: 1
}
console.log(jacket);
console.log(jeans);
console.log(hat);

var cartSum = jacket.price * jacket.quantity 
+ jeans.price * jeans.quantity 
+ hat.price * hat.quantity

console.log(cartSum);
