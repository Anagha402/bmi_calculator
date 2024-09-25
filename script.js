//1.Check if all input fields are entered some value

var age=document.getElementById("tx");
var male=document.getElementById("ml");
var female=document.getElementById("fl");
var height=document.getElementById("hgt");
var weight=document.getElementById("wgt");


function calculate(){
    if(age.value==""||height.value==""||weight.value==""||(male.checked==false && female.checked==false)){
        alert("All fields are mandatory")
    }else{
        calcBmi();
    }
}

function calcBmi(){
   const heightInMeters=height.value/100;
   const bmi=weight.value/Math.pow(heightInMeters,2);

   var answer="";
   if(bmi<18.5){
    answer="UNDERWEIGHT"
   }else if(18.5<=bmi&&bmi<=24.9){
    answer="HEALTHY"
   }else if(25<=bmi&&bmi<=29.9){
    answer="OVERWEIGHT"
   }else if(bmi>=30){
    answer="OBESE"
   }
   //display number
   const displayNumber=document.getElementById("result");
   displayNumber.innerHTML=`<h1 style="padding:5px;">${bmi.toFixed(2)}</h1>`;

   if(answer=="UNDERWEIGHT"){
    displayNumber.style.color="lightgreen"

   }else if(answer=="HEALTHY"){
    displayNumber.style.color="darkgreen"

   }else if(answer=="OVERWEIGHT"){
    displayNumber.style.color="orange"

   }else if(answer=="OBESE"){
    displayNumber.style.color="red"

   }

   //comment
   const cmt=document.getElementById("comment");
   cmt.innerHTML=`<p style="font-size: large;font-weight: 700;text-align: center;border:2px dashed black;">You are ${answer}</p>`

}


