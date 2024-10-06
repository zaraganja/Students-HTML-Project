const testFunction=()=>{
   alert("hello");
   document.getElementById("emptySpace").style.color="red";
   document.getElementById("emptySpace").innerHTML="hello smart students";

}
 const alertMSG=(msg)=>{
    alert(msg);
    document.getElementById("emptySpace").innerText=msg;

 }


 const objectArrayFunction=()=>{
    let person1={} //object
    //let person1= new Object(); //یا این


    person1.nameeeeee="shiva";
    person1.lasttttname="deljavan";
    person1.job="IT Specialist";

    console.log(person1);
    console.log(person1.job)
    //************************** */

//     [براکت]   ==>   Array  => [0][1]....
//     {آکولاد}   ==> Object => key-value


    // const person2=[] //array 
    // ویا
    const person2=new Array();

    person2[0]="saba";
    person2[1]="hashemi";
    person2[2]="18";
    person2[3]="IT specialist";
    person2[4]="";


    console.log(person2);
    console.log(person2[1]);

 }

 const dataTypes =()=>{
   
   // number 
   let a =16;
   let b= 2.4;

   // string 
   let color= "red";
   let lastName="deljavan";
   
   // Boolean 
   let x= true;
   let y= false;

   // Date 
   const date = new Date("2022-03-04");

   const num = 20;
   const w = 30;
   const name= "shiva";
   console.log(date); // 
   //

 }

 const testLoopAB=()=>{
   const colors1 ={
      color1:"red",
      color2:"blue",
      color3:"green",
      color4code: 0
   }


   const colors2 =["red","blue","green",0];
   console.log(colors2.length);
   // OBJECTS 
   // for (let x in colors1){
   //    // console.log(colors1[x]);
   //    console.log(x);
   // }


   // ARRAY 
   for (let x=0; x< colors2.length ; x++){
      // console.log(colors2[x]);
      // console.log(x);
     
   }

   // console.log(colors1);
   // console.log(JSON.stringify(colors1));
  


 }

 const myMap =()=>{


   const color1=new Map();
   color1.set('color1','red');
   color1.set('color2','green');
    
   console.log(color1.get('color1'));
   console.log(color1.has('color2')) // boolean(true or false)  

   console.log(color1.size);

 }

 const login =()=>{
   let token ="dhshwlll123*34kxnıhfıdheıdedjjksssnns";
   let name="saba";
   console.log(token);
 }


