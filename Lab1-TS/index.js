// Question2
function logProduct(product) {
    console.log("id : ".concat(product.id, " , name : ").concat(product.name, " , price : ").concat(product.price, " , inStock : ").concat(product.inStock));
}
var productOne = {
    id: 1,
    name: "T-shirt",
    price: 300,
    inStock: true
};
logProduct(productOne);
// Question 4 
function wrap(arr) {
    return [arr];
}
console.log(wrap([1, 7, 8]));
console.log(wrap([true, false]));
console.log(wrap(['m', 'o', 's', 't', 'a', 'f', 'a']));
// Bonus Question
function getApi(data) {
    if (data.success) {
        var product = data.data;
        console.log("id : ".concat(product.id, " , name : ").concat(product.name, " , price : ").concat(product.price, " , inStock : ").concat(product.inStock, ", msg : ").concat(data.message));
    }
    else
        "success is false";
}
var productTwo = {
    data: {
        id: 2,
        name: "Pantlon",
        price: 300,
        inStock: true
    },
    success: true,
    message: "Product Amazing"
};
console.log(getApi(productTwo));
