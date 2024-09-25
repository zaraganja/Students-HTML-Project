// es6:
// تعریف تابع
// arrow functions
// not suitable for (new...)
const alertMyMsg=(msg)=>{
    alert(msg)
}

// traditional function // regular function
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

const testObjects=()=>{
    const person={
        firstName:"zara-",
        lastname:"ganj-",
        age:30,
    }
    // تعریف تابع
    const person2={};
    // یا
    const person3=new Object();

    person2.firstName="zara";
    person2.lastName="ganji";
    person2.age=30
    person2.nationality="farsi"

    // console.log(person2.firstName)
    // یا
    // console.log(person2["age"])
    console.log(person2)
    // پاک کردن از آبجکت 
    delete person2.age;
    console.log(person2)



}

const nestedObject=()=>{
    const myObj={
        name:"zara",
        age:30,
        classes:{
            class1:"front",
            class2:"back-end",
            class3:"security"
        }
    }
     console.log(myObj.classes.class2)
     console.log(myObj.classes["class3"])
     console.log(myObj["classes"]["class1"])
}

const functionItemObjExample=()=>{
    const functionObj={
        firstName:"zara",
        lastname:"ganji",
        id:234566,
        // fullName: function(){
        //     return(this.firstName + "" +this.lastname).toUpperCase()
        // }
    }
    // نحوه فراخوانیش
    // console.log(functionObj.fullName());
    // document.getElementById("emptySpace").innerText=functionObj.fullName()

    // نمایش تمام آیتمهای داخل آبجکت ها
    for (let x in functionObj){
        console.log(functionObj[x])
    }



}

const fillMyListViaObject=()=>{
    const Colors={
        color1:"red",
        color2:"green",
        color3:"blue",
        color4:"yellow"
    }
    const listForm=document.getElementById("colors");
    for (let x in Colors){
        const option=document.createElement('option');
        option.value=Colors[x];
        listForm.appendChild(option);
    }
}

const ArraysFunction=()=>{
    const myObjct={
        name:"zara",
        age:30,
        city:"Urmia"
    }
    const person45=[
        "item1",
        "item2",
        "item3",
        233456
    ]
    // console.log(person45);
    // console.log(person45[3]);

    // برای ایجاد آرایه
    // آبجکت را داخل آرایه انداختم
    const myArray= Object.values(myObjct);
    // console.log(myArray);
    // گرفتن سایز آرایه 
    console.log(person45.length);
    console.log(myObjct.length); //undefiend

}

const fillMyListViaArray=()=>{
    const Cars=[
        "car1","car2","car3","car4",12234556
    ]
    console.log(Cars.length); //5
    const listForm=document.getElementById("colors");
    for (let x=0 ;x< Cars.length;x++){
        const option=document.createElement('option');
        option.value=Cars[x];
        listForm.appendChild(option)
    }
    console.log(Cars)
    console.log(JSON.stringify(Cars));

    const myObjct20={
        name:"zara",
        age:30,
        city:"Urmia"
    }
    console.log(myObjct20);
    console.log(JSON.stringify(myObjct20));



}

const createObject=()=>{

    // یک تابع که آبجکت ایجاد میکند به تعداد دلخواه
    function Persons(first,last,age,eye){
        this.firstName=first;
        this.lastName=last;
        this.age=age;
        this.eyeColor=eye
    }
     
    const myPersons1= new Persons("zara","ganji",30,"brown");
    const myPersons2=new Persons("shiva","deljavan",20,"brown")
    console.log(myPersons2);

}

// **************buil-in javascript constructors******************* 
// new Object()
// new Array()
// new Map()
// new Set()
// new Date()
// new RegExp()
// new Function

const example1=()=>{
    // new Object()*******************
    // یک آبجکت ایجاد میکند 
    const myObject30=new Object();
    myObject30.firstName="zara";
    myObject30.lastName="ganji";
    myObject30.age=30;
    console.log(myObject30)
}

const example2=()=>{
    // new Array()*********************
    const myArray= new Array();
     myArray[0]="zara";
    myArray[1]="ganji";
    myArray[2]=30;
    myArray[3]="melorinet";
    console.log(myArray[1]);
}

const example3=()=>{
    // new Map()*********************set-get-has-size
    const myMap=new Map();
    myMap.set('name','zara');
    myMap.set('age',30);
    myMap.set('job','IT-Specialist');
    // console.log(myMap);
    const objKey={id:1};
    myMap.set(objKey,"this is my object key");
    console.log(myMap);
    console.log(myMap.get('name'));

    console.log(myMap.has('salary'));
    console.log(myMap.size);

}

// پر کردن لیست با استفاده از مپ 
const fillMyListViaMap=()=>{
    const foodMap=new Map();
    foodMap.set('menu1','soup');
    foodMap.set('menu2','drink');
    foodMap.set('menu3','coffee');
    const listForm=document.getElementById("colors");
    for (let [key,value] of foodMap){
        const option=document.createElement('option');
        option.value=[value];
        listForm.appendChild(option)
    }
}


const example4=()=>{
    // new Set()*********************** add-has-
    const mySet=new Set();
    mySet.add(1);
    mySet.add(5);
    mySet.add("zara");
    mySet.add("ganji");

    console.log(mySet);
    mySet.add({id:22222});
    console.log(mySet);
    console.log(mySet.has(5));//true
    mySet.delete(5);
    console.log(mySet.has(5))//false

}

// پر کردن فرم با ست 
const fillMyListViaSet=()=>{
    
}









