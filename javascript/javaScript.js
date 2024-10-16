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
    // new Set()*********************** add-has-delete-clear
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

// اینو بعدا لازم داریم 
// const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

// پر کردن فرم با ست 
const fillMyListViaSet=()=>{
    const mySet=new Set();
    mySet.add(1);
    mySet.add(5);
    mySet.add("zara");
    mySet.add("ganji");

    const formList= document.getElementById("colors");
    for (let item of mySet){
        const option= document.createElement('option');
        option.value=item;
        formList.appendChild(option);        
    }

    mySet.clear();
    console.log(mySet.size);

}

const testRepetedValues=()=>{
    // میخواهم مقادیر تکراری را حذف کنم 
    const numbers= [1,2,2,3,4,4,5];

    const uniqueNumbers1= new Set(numbers); //object
    const uniqueNumbers2= [...new Set(numbers)] //Array
    console.log(numbers);
     console.log(uniqueNumbers1);
     console.log(uniqueNumbers2);
}


//  Date 

const testDate =()=>{
    // const currentdate= new Date(); //تاریخ فعلی
    // console.log(currentdate);

    // const specificdate=new Date('2024-09-1');
    // console.log(specificdate);

    // const customDate= new Date(2024,8,20,14,30) //(Year,Month,Day,Hour,Minute);
    // console.log(customDate);

    // const current = new Date();
    // console.log(current.getFullYear());
    // document.getElementById("emptySpace").innerText=current.getFullYear(); سال
    // document.getElementById("emptySpace").innerText=current.getMonth(); ماه
    // document.getElementById("emptySpace").innerText=current.getDate(); //روز
    // document.getElementById("emptySpace").innerText=current.getHours();//ساعت
    // document.getElementById("emptySpace").innerText=current.getMinutes();
    // document.getElementById("emptySpace").innerText=current.getSeconds();

    // const timestamp= Date.now();
    // console.log(timestamp);

    // const date= new Date();
    // document.getElementById("emptySpace").innerText=date.toDateString();
    // console.log(date.toDateString());
    // console.log(date.toLocaleDateString());
    // console.log(date.toLocaleTimeString());
    // console.log(date.toISOString());

    const date1= new Date('2024-09-20');
    const date2= new Date('2023-09-20');

    // console.log(date1 < date2); //data type: boolean -- true
     const myBoolean = date1 < date2;
    //  console.log(myBoolean);
     if (myBoolean){
        console.log("I am true");
     }else if (!myBoolean){
        console.log("I am false");
     }

    //  (myBoolean === true)   equal   (myBoolean) یادتون بمونه حتما
    // (myBoolean === false)    equal برابره با   (!myBoolean)



    
}

const testEquals =()=>{
    const a = "20";
    const b= 20;
    console.log(a === b) ;

    // ===       نوع داده را هم بررسی میکنم 
    // == نوع داده را بررسی نمیکند 

    // فقط و فقط ازین به بعد برای بررسی مساوی بودن ها از سه تا مساوی استفاده میکنید باید یاید باید  
}

// new RegExp() ********
// regular expression  بیان منظم 
// در مچ کردن پسورد امن با پسوردی که کاربر وارد میکند استفاده میشود 
// این یکی از کاربردهاشه 

const testRegexp=()=>{
    // const regex= new RegExp('Hello','i');
    // i===> case-insensitive 
    // case-sensitive  حساس به حروف بزرگ و کوچک
    // case-insensitive حساس به حروف بزرگ و کوچک نباشد
    // console.log(regex.test('apple'));

    // const testString ="Hello , world!";
    // const match = testString.match(regex);
    // console.log(match); // ['Hello']

    // const regex2= /hello/;
    // const text="Hello, world! hello again!";
    // console.log(regex2.test(text))

}

// تابع بررسی پسورد امن 
const testSecurePass=()=>{

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const password= document.getElementById("passWord").value;
    if(passwordRegex.test(password)){
        alert("secure")
    }else{
        alert("unsecure")
    }
}

// new Function()**********
// برای ایجاد تابع در زمان ران تایم استفاده میشه 
// تابع داینامیک 
// اگر بخواهید در حین اجرای یک تابع تابعی دیگر ایجاد شود از این استفاده میکنیم 
const testNewFunction1=()=>{
    const add=new Function('a','b','return a+b');
    console.log(add(2,'3'))
}

const testNewFunction2=()=>{
    const turnTotoUpperCase=new Function('str','return str.toUpperCase()');
     const result= turnTotoUpperCase('Hello class!');
     console.log(result);
}

const turnTotoUpperCase=(str)=>{
    const result= str.totoUpperCase();
    console.log(result);
}

const testNewFunction3=()=>{
    const complicatedFunc= new Function('a','b','return alert(a+b),console.log(a+b)');
    complicatedFunc('hi',30);
}


const testNewFunction4=()=>{
    const operation='c';
    const calculate=new Function('x','y',`return x ${operation === 'mul' ? '*' : '+'} y `);
    console.log(calculate(5,10));
}

//${operation === 'mul' ? '*': '+' }
// if(operation === 'mul'){ * } else {+}
// دو خط بالا با هم برابرند 
// اگر آپریشن مساویه مالتیپلای باشه ضرب کن در غیر اینصورت علاوه کن
// ${var === meghdar ?  'agar hast' : 'agar nist'   }
// :   یعنی در غیر اینصورت


// security and performance خطا داره 
// تا میتونید از نیو فانکشن 
// دوری کنید چون باگ های امننیتی و محدودیت هایی داره 

// *****************************javascript events************************** 
// onchange - onclick - onmouseover - onmouseout - onkeydown - onload - 


// onchange 
const handleChange=()=>{
    alert("input changed");
    alert('changed to :' + document.getElementById("inputTXT").value);
}

// onclick 
const handleGetData=()=>{
    alert('I learn onclick event')
}

const handleMouseOver=()=>{
    document.getElementById("mouseOverText").style.backgroundColor="red";
    document.getElementById("status").innerText="MOUSE OVER"

}

const handleMouseOut=()=>{
    document.getElementById("mouseOverText").style.backgroundColor="";
      document.getElementById("status").innerText=" MOUSE OUT"
}

const getData=()=>{
    // fetch(url).catch.
}


const handleKeyDown=(event)=>{
    alert('key pressed :'+ event.key);
    if(event.key === 'Enter'){
        console.log("get data");
        getData();
        // هر تابعی 
    }
}

// window.onload= function (){
    // alert("page has loaded صفحه لود شد ");
    // توی ری اکت 
    // useEffect();
// }

// ********************************template strings ********* 
const testTemplateString=()=>{
    let x= 244;
    let name = `${x} is a number`;
    // let name =x + "is a number";
    alert(name);
}

// javascript string methods ******************

const testStringMethods=()=>{

    // const array=["1","two","8888"];
    // console.log(array.length);

    // let text1= "ABSDFGHTHJJKJYH";
    // let length= text1.length;
    // console.log(length);

    // let text2= "HELLO WORLD";
    // let char2= text2.charAt(1);
    // console.log(char2);

    // let text3= "HELLO WORLD";
    // let char3= text3.charCodeAt(0);
    // console.log(char3);

    // const name2= "Hello";
    // let letter=name2.at(2);
    // console.log(letter);

    // const name3= "Hello";
    // let letter3=name3[0];
    // console.log(letter3);

    // let text= "Hello world";
    // text[0]= "A"; 
    // هیچ ارورری نمیده اما اجرا هم نمیکنه 

}

// سه متود داریم که برای اکسترکت کردن بخشی از یک استرینگ استفاده میشه 
// slice(start,end)
// substring(start,end)
// substr(start,length)

const testSlice=()=>{
    // آخرین کاراکتر را نمیآورد و از صفر شروع به شمارش میکند 
    // let text1="AppleBanananKiwi";
    // let part1= text1.slice(7,13);
    // console.log(part1);

    // اگر دومین ورودی را ندیم از همونجا نصف میکند و نیمه دوم را نمایش میدهد 
    // let text2= "Apple, Banana, Kiwi";
    // let part2= text2.slice(5);
    // console.log(part2);

    // let text="Apple, Banana, Kiwi";
    // let part= text.slice(-12,-6);
    // console.log(part);

}

// سابسترینگ عین اسلایس هست 
// فقط مقدار منفی نمیگیرد 
// const testSubstring=()=>{
//     let text1="AppleBanananKiwi";
//     let part1= text1.substring(7,13);
//     console.log(part1);
//     alert(part1);
// }

// substr( ) عین اسلایس هست 
// اما منسوخ شده 
// const testSubstr=()=>{
//     let srt3= "Apple, Banana, Kiwi";
//     let part3= srt3.substr(7,6);
//     console.log(part3);
// }

// *******************************totoUpperCase() and toLowercase()****** 

// const textUpLow=()=>{
//     let text1= "HI SMART STUDENTS";
//     // let mytxt= text1.toUpperCase();
//     let mytxt= text1.toLowerCase();
//     console.log(mytxt);
// }

// concat به استرینگ استرینگی را وصل میکند *************
// const testConcat=()=>{
//     let text= "Hello"+"T"+"World!";
//     let myTXT= "Hello".concat("T","world!");
//     console.log(text);
//     console.log(myTXT);
// }


// trim()*****************************************
// فاصله اضافی را از هر دو طرف استرینگ حذف میکند
// const testTrim=()=>{
//     let text1= "         Hello world!     ";
//     let text2= text1.trim();
//     let text3=text1.trimStart();
//     let text4= text1.trimEnd();
//     console.log(text4);
//     console.log(text4.length);


//     console.log(text2);
//     console.log(text1);
//     console.log(text1.length);
//     console.log(text2.length);  
// }

// padEnd() - padStart()****************
// const textPad=()=>{
// // let text= "57";
// // let padded= text.padStart(4,"xy");
// // به اول پنج صفر اضافه میکنه تا به کاراکتر چهارم برسه 
// // انقدر باید به اولش یک اضافی کنی تا تعداد کل کاراکتر ها چهار بشه 
// // اگر تعداد کاراکتر ها از ورودی اول بیشتر باشه اجرا نمیکنه 
// // console.log(padded);


// let numb=5; // 5
// let text= numb.toString(); // "5"
// let padded= text.padEnd(4,"8");
// console.log(padded);

// }

// repeat()********************
// const textRepeat=()=>{
//     let text = "hello world";
//     let result= text.repeat(7);
//     console.log(result);
// }


// replace() ****************************************
// اولین مچ رو فقط جایگزین میکنه 
// اگر بخواهیم بقیه مچ هارو هم جایگزین بکنه از /g
// استفاده میکنیم 
// is case sensitive 
// به حروف کوچک و بزرگ حساسه 

// const testReplace=()=>{
//     let text= "please visit our website !";
//     let newText= text.replace("website","Melorinet");
//     let newtxt1= text.replace("WEBSITE","melorinet");
//     // برای اینکه حساس به حروف کوچک و بزرگ نباشه 
//     let newtxt2=text.replace(/WEBSITE/i,"melorinet");
//     // console.log(text);
//     // console.log(newtxt2);


//     let text2= "please visit our website ! website ";
//     // برای اینکه به همه مچ ها اعمال بشه از 
//     // regular expression /g 
//     // استفاده میکنیم 
//     let newtxt= text2.replace(/website/g,"melorinet");
//     console.log(text2);
//     console.log(newtxt);

// }

// replaceAll()*********** 
2021 
 const testReplaceAll=()=>{
    
 }