// Question 1
interface Product{
    id : number
    name : string 
    price : number 
    inStock : boolean
}

// Question2
function logProduct(product:Product) {
    console.log(`id : ${product.id} , name : ${product.name} , price : ${product.price} , inStock : ${product.inStock}`)
}

let productOne : Product = {
    id : 1,
    name : "T-shirt",
    price : 300 ,
    inStock : true
}

logProduct(productOne);

// Question 3
type ProductOrError = Product | string;

// Question 4 
function wrap<T>(arr:T) :T[]{
    return [arr];
}
console.log(wrap([1,7,8]));
console.log(wrap([true , false]));
console.log(wrap(['m','o','s','t','a','f','a']));

// Question 5 
interface ApiResult<T> {
  data: T
  success: boolean
  message: string
}

// Bonus Question


function getApi(data:ApiResult<Product>){
    if(data.success){
        let product = data.data;
        console.log(`id : ${product.id} , name : ${product.name} , price : ${product.price} , inStock : ${product.inStock}, msg : ${data.message}`)
    }
    else "success is false"
}


let productTwo : ApiResult<Product> = {
    data:{
        id : 2,
        name : "Pantlon",
        price : 300 ,
        inStock : true 
    },
    success:true,
    message : "Product Amazing"
}

console.log(getApi(productTwo));
 