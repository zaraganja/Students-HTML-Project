// es6:
// تعریف تابع
const alertMyMsg=(msg)=>{
    alert(msg)
}

// function alertMyMsg(){

// }
// ********
// const writeHello =()=>{
//     document.getElementById("emptySpace").innerHTML="HELLO JS";
//     document.getElementById("emptySpace").style.color="red";
//     document.getElementById("emptySpace").style.textDecoration="line-through";

// }

// var
// let 
// const 

// var 
// function-scoped => اگر در داخل تابع تعریف بشه 
// فقط در داخل تابع قابل دسترسیه 
// و اگر بیرون از تابع تعریف بشه به صورت global
const exampleVar=()=>{
    var x = 10;
    console.log(x); //10
    if (true){
        var x= 20;
        console.log(x)//20
    }
     console.log(x)//20
}

// let 
// Block-scoped : 
const exampleLet =()=>{
    let y = 10;
    console.log(y);
    if (true){
        let y=20;
        console.log(y);
    }
    console.log(y);
}


// const -block-scoped
// re-decleration : 
const exampleConst=()=>{
    const z=10;
    // z=20;
//    const z=20;
const obj = {name:"zara"};
  obj.name="ali";
console.log(obj);
}

// 1.numbers:
// 10.0003
// 100021

// 2.string -text- 
// "zara"
// 'zara'

const stringInt=()=>{
    var x= 20;
    var y= 2;
    var z=3;
    var num=(y+z)*2;
    // x += 5    x= x+ 5
    // x -= y   ( x= x-y)
    //  x *= y   x= x*y 
    // x /= y    x= x/y 
    // x %= y    x= x% y  باقی مانده
    //  x **=y    x= x**y   به توان
    x %= y;
    

    console.log(x);

}

const checkLog=()=>{
    let x= null; // تعداد محصول 
    let y= 1;
    // if (x === undefined || x === 0 || x === false || x=== Nan || x === null){
    //     x= 1;

    // }
    x||= y     // x=x || x=y
    console.log(x)

    // falsy = x=> undefined, null, 0,NaN, "",false
}

const checkX= ()=>{
    let x= null;
    let y = 20 ;
    if (x === null || undefined){
        x=y;
    }
    // x ??= y    //x=x ?? (x=y)
    console.log(x);
    //  if x = null or undefiend
}

// Data types 

// Number 
let weight = 7.5;

// String 
let lastname= "zara";

// Boolean 
let x= true;
let y= false;

// Object 
const person = {firstName: "zara", lastName:"ganji"}

// Array 
const cars = ["car1","car2","car3"]

// Date 
const date = new Date ("2024-02-01")











