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
    let text= "فارسی زبان شیرین جهان است .این یک متن فارسی است";
    console.log(text);
    console.log(text.replaceAll("فارسی","پرشین"));
 }


// تبدیل استرینگ به آرایه **************************
const testSplit=()=>{
    let TXT="123456 hbncs"
    console.log(TXT.split(","));
    console.log(TXT.split(""));
}

// متدهای جستجو برای استرینگ ها
// JS string search methods ***********************

const testSearchMethods=()=>{
    // ایندکس حرف اولش رو میاره
    let text= "because the SKY is high!";
    // let index1= text.indexOf("sky");
    // console.log(index1);

    // let lastIndex= text.lastIndexOf("sky");//آخرین کلمه ای که مچ شده را میدهد
    // console.log(lastIndex);

    // console.log(text.indexOf("you"))// اگر نتواند پیدا کنم lastIndexOf- indexOf
    //-1

    // let result=text.search("sky");
    // console.log(result);

    // یک ارایه میدهد 
    // let myMatch= text.match(/sky/gi);
    // let myindex= myMatch[0];
    // console.log(myMatch);
    // console.log(myindex);

    // اگر بخواهم خروجی ام boolean 
    // let includes1=text.includes("the")//true
    // let includes=text.includes("the",12);//false
    // console.log(includes);


    //boolean
    // let x=text.startsWith("because the");//true
    // let y= text.startsWith("the");
    // console.log(y);

    // let m=text.endsWith("the");//false
    // let r=text.endsWith(".",11)
    // console.log(r);


    // ***********************************************template strings *****
    // ``backtick 
    // ""  ''  ``  are strings 

 
   
}

// از داخل یک تابع میتونی تابع دیگه ای رو فراخوانی کنی اما نمیتونی تابع بسازی 
// پس داخل یک تابع نمیتوانی تابع جدیدی بسازی اما اگر به این کار نیاز داری بهتر است تابعی که میخواهی بسازی را 
// در بیرون از آن تابع بسازی و بعد ان را فراخوانی کنی 
const getName=(name)=>{
    if(name !== undefined){
        giveFullName(name)
    }else{
        alert("name is undefiend")
    }
}

const giveFullName=(Name)=>{
    let LName="taheri";
    let FullName= "welcome" + Name + "," + LName;
    let fName= `<i>welcome<h1>${Name},${LName}</h1></i>`;
    document.getElementById("emptySpace").innerHTML=fName;
    document.getElementById("emptySpace2").innerText=fName;
    console.log(FullName);
    console.log(fName);
}

// ********** NaN - Not a Number 
 const testNaN=()=>{
    let x= 100 / "apple";
    let y= 100 /"10"; //اگر استرینگم عدد باشد خروجی یک عدد خواهد بود ۱۰
    let z= 2/0; // infinity
    let m= -2 /0 ; // -infinity


    console.log(x);
    console.log(y);
    console.log(z);
    console.log(m);
 }

//  *********some methods ********* .toString()- typeof()- 

const testToString =()=>{
    let x= 123;
    let y= "123";

    // x1 مانی 
    // x.toString()   عمل نشان دادن تعداد سیب ها
    let x1= x.toString();
   let x2= x+"";
    console.log(typeof(x2));
    // let type= typeof(x);
    // console.log(x1);
    //  console.log(x.toString());
    // console.log(type);
    // console.log(typeof(y));
   
}

// toExponential() رند به بالا رو انجام میده 
const textToExp=()=>{
    let x= 9 ;
    let y = x.toExponential(4);
    console.log(y);
}


// toFixed() خروجی استرینگ میده
const testToFixed=()=>{
    let x= 9.656;
    let y= x.toFixed(2); //مقادیر پولی
    let z = x.toFixed(4);// بعد از ممیز باید چهار تا رقم داشته باشی
    console.log(y);
    console.log(z);
}

// toPrecision() خروجی استرینگ میده
const testToP=()=>{
    let x= 9.565;
    let y= x.toPrecision(3);
    console.log(y);
    console.log(typeof(y));
}

// نوت ؟
// اگر بخواهم نوع یک ورایبل را بفهممم چه کار کنم
// typeof(اون ورایبله )


// valueOf() ***
// ورایبل یعنی ظرف 
const testValueOf=()=>{
    let x= "123";
    let y=x.valueOf();
    console.log(typeof(x.valueOf()))
    console.log(y);
    }



    // Number()- parseFloat() توابعی هستند که ورایبلهارو به نامبر تبدیل میکنن
    const testNumber=()=>{
        // کار مخالف .toString( داره انجام میده )
        // let x= "33";
        // let t = Number(x);
        // console.log(Number(x));

        let a= true;
        let b= false;
        let t=Number(a);
        console.log(t);
        console.log(Number(b));
    
    }

    // parseFloat() 
    // یک استرینگ به عنوان ورودی میگیرد 
    // در داخل این استرینگ از سمت چپ شروع به بررسی میکند
    // اگر عدد باشد ان را برمیگرداند
    // اگر حرف باشد NaN 
    const testParsF=()=>{
        let t = parseFloat("3.3b34a 10.33 30");
        console.log(t);
        // console.log(parseFloat(223333))
    }

    
    // ********************متد های آرایه ها در جاواسکریپت *****************************
    const testArray= ()=>{
        const a = new Array();
        a[0]="apple";
        a[1]="ios";
        a[2]="Mac";
        a[3]="windows";


        const a1= ["apple","ios","Mac","Windos"];

        console.log(a);
        console.log(a1);

        const v= ["red","blue","green"];
    }

    // join()*****
    const testJoinn=()=>{
        const a1= ["apple","ios","Mac","Windos"];
        let t= a1.join(",");
        console.log(t);

    }

    // pop()*******آخرین آیتم از آرایه را برمیدارد و حذف میکند
    // مزیت اینه که جای آیتم رو خالی قرار نمیده 
    // اما delete جای آیتم رو خالی میذاره
    const testPopnkjsdnjknc=()=>{
        const a1= ["apple","ios","Mac","Windos"];
        console.log(a1.pop());//آیتم حذف شده را میدهد
        console.log(a1);// ارایه ی حذف شده را میدهد
        // اگر ایتم اولی یا وسطی را بخوایم حذف کنیم ???

    }

    // push()*******ولیو را به آخر آرایه اضافه میکند 
    const testPush=()=>{
        const a1= ["apple","ios","Mac","Windos"];
        a1.push("linux");// طول ارایه رو میده
        console.log(a1.length);
    }


    // shift()*****
    const testshift=()=>{
        const a1= ["apple","ios","Mac","Windos"];
        console.log(a1.shift());//اون ایتمی رو میده که حذف شده
         console.log(a1.length);
        // a1.shift();
        // console.log(a1);
        // a1.shift();
        // console.log(a1);
        // a1.shift();
        // console.log(a1);
        // a1.shift();
        // console.log(a1);
    }

    // unshift()******آیتم را به اول آرایه اضافه میکند
    const testUnshift=()=>{
        const a1= ["apple","ios","Mac","Windos"];
        console.log(a1.unshift("M2"));
        a1[2]="";
        console.log(a1);
        delete(a1[1]);
        console.log(a1);
    }

    // concat()****** ارایه ها را با هم ترکیب میکنه و یک ارایه تشکیل میده
    const testConcat=()=>{
        const arra1=["RED","GREEN"];
        const arr2= ["gold","silver",234];

        const newARR= arr2.concat(arra1);
        const newarr2= newARR.concat("blue");
        // console.log(newarr2);

        const arr3= ["mac","win","apple"];
        const arr4= ["mac1","win2","apple3"];
        const finalARR= arra1.concat(arr2,arr3,arr4,arra1);

        console.log(finalARR);

    }


    


    //copywithin()
    // المنتهای آرایه را به پوزیشن دیگری کپی میکند 
    // این متد طول ارایه را عوض نمیکند 
    // وقتی بخواهید یک قسمت از ارایه رو به قسمت دیگری از ارایه کپی کنید 
    const testCopywhithin =()=>{
        const colors=["red","green","white","a1","a2"];
        colors.copyWithin(2,0,2);
        console.log(colors);
    }
    // با تعداد ارایه های مختلف کار کنید روش 

    // flat()*******
    // یک ارایه جدید ایجاد میکند 
    const testFlat=()=>{
        const myarr=[[1,2],[7,4],5,6];
        const newarr= myarr.flat();
        console.log(newarr);
    }

    // flatmap()****
    // مثال از سرور تعداد رنگ های یک محصول رو گرفتید 
    // میخواهید این آرایه رو در یک لیستی نمایش 
    // میخواید اول هر ایتم کلمه ی رنگ اضافه بشه 
    // برای این کار از همین متد استفاده میکنید 
    const testflatmap=()=>{
        const myarr=[[1,2],[7,4],5,6];
        const newarr1= myarr.flat().flatMap(x=> [x*10]);
        const newarr2= myarr.flat().flatMap(x=> [x, x+"myitem"]);
        const newarr3= myarr.flat().flatMap(x=> [ x+"myitem"]);
        // console.log(newarr2);

        const colors= ["سبز","قرمز","سفید"];
        const newarr= colors.flatMap(x=> "رنگ " + x);
        console.log(newarr);


    }


    // slice()  splice()  ******
    // slice() قسمتی از ارایه رو جدا میکنه
    // splice() آیتم های جدیدی به ارایه اضافه میکنه 
    // فرق ایندو اینه که اولی ارایه جدید تشکیل میده و ارایه اصلی رو دستکاری نمیکنه
    // ولی دومی میاد خود ارایه رو دستکاری میکنه 
    const testMethods=()=>{
        const foods= ["pizza","hamburger","pilav","waffle"];
        // foods.splice(2,0,"f1","f2");
       const newArr = foods.slice(1);
        console.log(newArr);
    }

    // toSpliced()**** ES2023 splice() همون
    // فرقش با splice 
    // اینه که یه ارایه جدید تشکیل میده و به ارایه اصلی دست نمیزنه

// ************************متد های جستجو در ارایه ها ************************
// indexOf()*****  
const serach=()=>{
    const names=["a1","jacket","pant","hat","jacket","glasses"];
    let jacketPos=names.indexOf("pant",1);
    let pos=names.lastIndexOf("jacket");//آخرین آیتمی که باهاش مچه 4
    let pos2=names.indexOf("jacket");//1
    console.log(pos);
    // اگر بخواهیم هر چند تعداد باشه بهمون برگردونه ؟؟ 
}

// includes()*** boolean
const testinclude =()=>{
    const names=["a1","jacket","pant","hat","jacket","glasses"];
    console.log(names.includes("a2"));
}

// find()***** 
const Findover18=()=>
{
    const names=["a1","jacket","pant","hat","jacket","glasses"];
    let first= names.find(myFunction);
}
const myFunction=(value,index,array)=>{
    if(value === "jacket"){
        console.log(index);
    }
}

// findIndex()****
const testFI=()=>{
    const nums=[3,7,15,22,30];
    let f= nums.findIndex(MyFunction);
    console.log(f);
}
const MyFunction=(value,index,array)=>{
        return value>20
}

// findLast()******* هدفش اینه که نزدیکترین بزرگترین عدد رو به ما برمیگردونه
// const textFL=()=>{
//     const t= [27,28,30,40,42,25,40];
//     let high=t.findLast(x=> x>40);//بزرگترین عدد از داخل یک ارایه رو برمیگردونه
//     console.log(high);
// }

// findLastIndex()***** 
const textFLI=()=>{
    const t= [27,28,30,40,42,25,40];
    let high=t.findLastIndex(x=> x>40);//4 index
    console.log(high);
}

// ******** Javascript مرتب کردن ارایه ها ------ 
// sort()*****
// به ترتیب حروف الفبا مرتب میکنه 
// به ترتیب عدد ها مرتب میکنه 
// حرف و یا عدد اول رو میگیره 
// اول حروف بزرگ رو مرتب میکنه میده بعد حروف کوچک رو مرتب میکنه میده 
const sorT=()=>{
    const array=["baby","ozmo","apple","Nine"];
   let rr= array.toSorted();
    console.log(rr);

     const nums=[20,44,3,"A",18];
     nums.sort();
     console.log(nums);
    // اگر بخواهیم اعداد به صورت واقعی از کوچک به بزرگ مرتب شود ????
}


// reverse()***** ارایه را از اخر به اول نمایش میدهد 
const rv=()=>{
    const array=["baby","ozmo","apple","Nine"];
    let cc=array.toReversed();
    console.log(cc);

}

// toSorted()***** = sort() با فرق اینکه این ارایه اصلی رو عوض نمیکنه
// باید نتیجه عملیات رو بندازیم داخل یک ورایبل 

// toReversed() ** == reverse() یکی هستن با این تفاوت که این به ارایه اصلی دست نمیزنه 

// *************** JS متدهای تکرار ارایه ها 

// forEach() ****** 
// اگر بخواهید ارایه را تغییر دهید و داخل یک ارایه دیگر بیاندازید 
const FE=()=>{
    const nums= [45,4,9,16,25];
     nums.forEach(myFUC);
    // console.log(nums);
}
// let myarr=[];
const myFUC=(value,index,array)=>{
    console.log (value * 3);
    // let txt="";
    // txt += value * 2 ;// 45 and 0
    // myarr.unshift(txt);
    // console.log(myarr);
}

// map()*********** به ارایه اصلی دست نمیزنه
// بدون دادن value اجرا نمیشه 

const MA=()=>{
    const nums= [45,4,9,16,25];
    nums.map(myFUC2);
    console.log(nums);// خود ارایه رو عوض نکرد 
}
 let myarr2=[];
const myFUC2=(value,index,array)=>{
//    let a= value *index;
//    myarr2.unshift(a);
//      console.log(myarr2);
return value*2
}


// map and forEach بعضی وقتا نتیجه یکسان میدن 


// flatMap()**** به راحتی میتوانی روی هر آیتم از ارایه عملیاتی انجام دهی بدون اینکه حلقه بنویسی
const FMA=()=>{
    const arr44=[1,2,3,4,5,6];
    const newarr= arr44.flatMap((x)=> x*2);
    console.log(newarr);
}

// filter() ***** 
const fI=()=>{
    const nums = [30,4,8,10,25];
    const over17= nums.filter(myfUnction);
    console.log(over17);
}
const myfUnction =(value,index,array)=>{
    return value < 17
}

// reduce()***** left to right
const RD=()=>{
    const nums = [30,4,8,10,25];
  let rr = nums.reduce(F,300);//300 + 77
    console.log(rr);
}
const F =(total,value,index,array)=>{
    return total + value;
}


// reduceRight()***** عین قبلیه ولی از راست به چپ 
// الگوریتم حبابی bubble sort 

// سوال اقای طاهر مرتب کردن ارایه به صورت نزولی یا صعودی 
const sortMyarr=()=>{
    let array=[82,[30,50],40,66];
    let sortedArray= array.flat().sort((a,b)=> a - b);//از گوچک به بزرگ 
    let sortedArray2= array.flat().sort((a,b)=> b - a);//از گوچک به بزرگ 
    console.log(sortedArray2);

}

// روش دوم reduce(), push(),findIndex(),splice() 


// every()****** is used in unit testing 
// اگر حتی یکی از ولیو ها تست رو پاس نکنه فالس میده 
// رو هر ولیو از آرایه یه تست انجام میده 
const unitTest=()=>{
    const nums=[45,5,8,31];
    let allOver19= nums.every(everyFunc);
    console.log(allOver19);//false
}
const everyFunc=(value,index,array)=>{
    // if( value >19){
    //     console.log(value +" is bigger than 19");
    // }
    return value>19;
}


// some()**************
// unit test بعضی ها اگر پاس کنند تست قبوله
const kkk=()=>{
    const nums=[45,5,8,31];
    let someOver19= nums.some(someTest);
    console.log(someOver19);// true
}

const someTest=(value,index,array)=>{
    return value > 19;
}

// Array.from()***** (تسک) 
// از یک استرینگ یک ارایه می سازد 
const formarr=()=>{
    let data= "ADFVG1,23456";
    let v= Array.from(data);
    console.log(v);
}


// Array.keys() ******
// کلید های ارایه رو به ما میده 
const testyy=()=>{
    const color=["red","green","blue","yellow"];
    const keys= color.keys();//[0,1,2,3]
     console.log(keys);//[0,1,2,3] array iterator
    let text ="";
    for (let x of keys){
        text += x ;
        console.log(text);
       console.log(Array.from(text));
    }

}

// entries()*****
// کلید و ولیو رو ارایه میکنه میده 
 const vvventry=()=>{
    const colors=["red","green","blue","yellow"];
    const entryList= colors.entries();//[key,value]
    console.log(entryList);
    for (let x of entryList){
        console.log(x);
    }
 }

//  with()****  ES2023
// یک روش راحت برای اینه که المنتهای یک ارایه رو بدون اینکه ارایه اصلی رو عوض کنی تغییر بدی 
const testWith=()=>{
    const colors=["red","green","blue","yellow"];
    // یک مقدار جدید به مقدار قدیمی اضافه میکنه
    // چیز اضافی وارد ارایه نمیکنه 
    const newarr= colors.with(0,"pink"); 
    console.log(newarr);
}

// spread (...) ****مهم
// به این سه نقطه میگن اسپرد 
const testSpread =()=>{
    const colors=["red","green","blue","yellow"];
    const nums=[45,5,8,31];
    const array=["baby","ozmo","apple","Nine"];

    const newCombinedARr=[...colors, ...nums, ...array];
    console.log(newCombinedARr);
}

// **********Math.random()***** 

const testRandom=()=>{
    // قرعه کشی 
    // نام گذاری فایل 
console.log(Math.random()); //یه عددی بین صفر و یک 
console.log(Math.floor(Math.random()*10)); //یه عددی بین صفر و نه 
console.log(Math.floor(Math.random()*11)); //یه عددی بین صفر و ده 
console.log(Math.floor(Math.random()*100)); //یه عددی بین صفر و نود و نه 
console.log(Math.floor(Math.random()*100)+1); //یه عددی بین صفر و صد 

}

// نکاتی در مورد بولین هboolean s 
const booleans =()=>{
    let x1= 0;// -0 //false //اگر بخواهم این متغیر را داخل یک استیت بولین بندازم آیا ترو هست یا فالس
    let x2=1;//true
    let x3= 22;// -22 //true ,یعنی داخل این متغیر مقداری استاندارد و اوکی وجود دارد و اوکیه
    let x4= ""; //false چون یک استرینگ خالیه
    let x5= "frggfeftre";//true چون استرینگ پره
    let x6; // false  متغیری که تعریف شده ولی مقدار دهی نشده تعریف نشده هست
    // if (x6 === 0){
    //     console.log(false);
    // }
    let x7= null; //false
    let x8= 445 / "hnhjd";//NaN not a number and has false data type
     console.log(x8); 
     console.log(Boolean(x8));
     
}

const testTrueFalse=(show)=>{
    let text= (!show) ? "show the loading" : "dont show";
    console.log(text);
}

// nullish operator ?? ******
// nullish یعنی  null or undefiend ??
const testNullish=()=>{
    let name= null;
    let text= "ali";
    let result = name ?? text;//اگر اسم نالیش باشه یعنی یا نال یا آندیفایند باشه تکست را بنداز داخل ریزالت
    console.log(result);
}


// if else ****** 
const testifElse =(productNumber)=>{
    if(productNumber === 0) { 
        console.log("you cant put your product number zero! ")
    }
    else if (productNumber === 9){
        console.log("its ok!")
    }
    else{
        console.log("not allowed");
    }
}

// switch case ****** 
const testSC=(number)=>{
    switch(number){
        case 12:
            console.log(number);
            break;
        case 13:
            console.log("M");
            break;
        case 22:
            console.log("Tue");
            break;
        case 53:
            console.log("null");
            break;
        case 64:
            console.log("64");
            break;
        case 75:
        case 85:
            console.log("Friday");
            break;
        case 69:
            console.log("Saturday");
            break;

        default:
            console.log("function is running");

    }
}


// while do while **** 
const testw=()=>{
    let i=0;
    while(i<6){
        console.log("i is lower than 6");
        i++;
        // break **
         if(i===2) {break;}
    }
}

// ********* fonts ***********ok => textFontFamily.html



// break **** از حلقه میپره بیرون
const testBreak =()=>{
    for (let i=0 ; i<10; i++){
        if(i === 4) {break;}
        console.log(i)
    }
}


// destructuring به معنی قابل درک 
// یعنی آن پک کردن یک آبجکت 
// و یا ارایه 

// چگونه از تک تک آیتم های داخل آبجکت استفاده کنم 
const testDes=()=>{
    const person={
        fname:"shiva",
        lname:"deljavan",
        age:20
    }
    // دادن نام مستعار 
    let {lname,age:birthday}=person;
    console.log(lname);
    console.log(birthday);
}

// برای آرایه ها 
 const testDesArr=()=>{
    const fruites=["banana","cherry","apple","mango"];
    let [fruit1,fruit2,b,a]=fruites;
    console.log(fruit1);
    console.log(b);

    let [f11,f22,...rest]=fruites;
    console.log(rest);// به صورت آرایه میده 

 }

//  برای هندل کردن ارور ها در جاواسکریپت از 
//  try catch () 
 try {
    // خط کدی که میخوای اجرا بشه 
    // معمولا در ارتباط با گرفتن داده ها از سرور استفاده میشه 
 } catch (error) {
    
 }
 finally {
    // این خط کد هارو حنما اجرا میکنه 
 }

//  ایجاد ارور به دلخواه 
const throwError=()=>{
    throw "unsecure password";
}

// ------***** کلاس های جاواسکریپت ---- 
// برای object ها استفاده میشه 
const classTest=()=>{
// برای تولید آبجکت هست این ساختار 
    class Car {
        constructor(name,year){
            this.name= name;
            this.year=year
        }
    }
     const myCar=new Car("C1",2015);
     console.log(myCar);
     const myCar2=new Car("C2",2011);
     console.log(myCar2);
}





// (JSmodules =import ) برای فراخوانی ماژول ها 

// JSON  => Javascript Object Notation
// نوع داده ای که قراره از سرور بگیریم و در پروژه استفاده کنیم 
// داده json رو
// از API میگیریم   

//  show ? "":""
// javascript Bitwise ********* 

// 0 => false
// 1 => true 
// AND 0 OR FALSE 
//  0 && 0 => 0
//( 0 && 1) => 0 
// 1 && 0 => 0 
// 1 && 1 => 1 

// let show= false
// let i= true 
// or 
// 0 || 0 => 0 
// 0 || 1 => 1
// 1 || 0 => 1
// 1 || 1 => 1 

// ^ bitwise
// 0 ^0 => 0
// 1 ^0 => 1 
// 0 ^1 =>1 
// 1 ^1 => 0 


// کد داخلش را بعد از چند میلی ثانیه که تعیین کرده اید اجرا میکند 
const testTimeOut=()=>{
    // یک بار اجرا میشه 
// کد داخلش را بعد از چند میلی ثانیه که تعیین کرده اید اجرا میکند 
    setTimeout(() => {
    alert("hi after 5 s")
    }, 5000);    
}
// به میلی ثانیه 
// 5000s  => 5s


// setInterval(() => {
    // کد داخلش را هر دو یا چند  ثانیه یه بار اجرا میکنه 
// }, 2000);
// const testInterval=()=>{
//     setInterval(() => {
//         alert("hi interval ")
//     }, 2000);
// }

// const tqq=()=>{
//     let i=0;
//     setInterval(() => {
//         i++;
//         alert(i);
//     }, 2000);
// }


// JS promise 
// کدی که اجراش زمان بره و برای یک خروجی منتظره از پرامیس استفاده 

// این دو تابع در ری اکت و در همه پروژه های جاواسریپتی برای 
// گرفتن داده به صورت امن استفاده می شود 
// حفظ کنید و نگه دارید 
// طلا 
// url = api 
const getDataWithPromise=(url)=>{
    return new Promise((resolve,reject)=>{
        fetch(url).then(response =>{
            if(!response){
                reject("HTTP ERROR");
            }else {
                return response.json()
            }
        }).then(data=> resolve(data))
        .catch(error=> reject("network error"+error))
    })
}

const getmyData=()=>{
    getDataWithPromise("https://jsonplaceholder.typicode.com/todos/1").then(data=>{
        console.log(data);
    }).catch(error=>{
        console.log(error);
    })
}


// ******** async await ***** 
// باعث میشه یک پرامیش برگرده 
// مثلا در گرفتن داده از سرور اجازه نمیده به داده ها قبل از دریافت پاسخ از سمت سرور دسترسی داشته باشم 
const getDataAsycrounous=async()=>{
await fetch("https://jsonplaceholder.typicode.com/todos/1").then(response=>{
    console.log(response)
}).catch(error=>{console.log(error)})
}




// مثال رنج برای رنگ و درصد ***************













