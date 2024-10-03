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
 

